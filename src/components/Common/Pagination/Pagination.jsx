import React, {useState}  from 'react'


const Pagination = ({totalCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
  let pageCount = Math.ceil(totalCount/pageSize)

  let pages =[];
  for(let i = 1; i <=pageCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil( pageCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  console.log (portionCount)
  let totalPage = pages
  .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
  .map((p) => {
    return <li  className={currentPage === p ? "page-item active" : 'page-item'}
                 key={p}
                 onClick={(e) => {
                     onPageChange(p);
                 }}><span class="page-link" href="discussions.html#">{p}</span></li>
})

  return 									<div class="blog-pagination">
  <nav aria-label="Page navigation example">
    <ul class="pagination">
    {portionNumber > 1 && <li class="page-item" onClick={ () => {setPortionNumber(portionNumber - 1); onPageChange(leftPortionPageNumber-portionSize)}}><span class="page-link"  aria-label="Previous">
          <i class="fas fa-angle-left"></i>
        </span></li>}
        {totalPage}	
      {portionNumber < portionCount && <li class="page-item" onClick={ () => {setPortionNumber(portionNumber + 1); onPageChange(rightPortionPageNumber+1)}}><span class="page-link"  aria-label="Next">
          <i class="fas fa-angle-right"></i>
        </span></li>}										
    </ul>
  </nav>
</div>

}

export default Pagination