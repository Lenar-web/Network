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
  let totalPage = pages
  .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
  .map((p) => {
    return <li  className={currentPage === p ? "page-item active" : 'page-item'}
                 key={p}
                 onClick={(e) => {
                     onPageChange(p);
                 }}><span className="page-link" href="discussions.html#">{p}</span></li>
})

  return 									<div className="blog-pagination">
  <nav aria-label="Page navigation example">
    <ul className="pagination">
    {portionNumber > 1 && <li className="page-item" onClick={ () => {setPortionNumber(portionNumber - 1); onPageChange(leftPortionPageNumber-portionSize)}}><span className="page-link"  aria-label="Previous">
          <i className="fas fa-angle-left"></i>
        </span></li>}
        {totalPage}	
      {portionNumber < portionCount && <li className="page-item" onClick={ () => {setPortionNumber(portionNumber + 1); onPageChange(rightPortionPageNumber+1)}}><span className="page-link"  aria-label="Next">
          <i className="fas fa-angle-right"></i>
        </span></li>}										
    </ul>
  </nav>
</div>

}

export default Pagination