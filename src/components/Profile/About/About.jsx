import React from 'react';
import Preloader from "../../Common/Preloader/Preloader";
import ContactItem from "./ContactItem";

const About = ({profile, isOwner}) => {


  if(!profile){
    return <Preloader/>
  }

  return (
       <React.Fragment>
        <div className="col-lg-4 col-md-5">
          <div className="user-data full-width">
            <div className="about-left-heading">
              <h3>Contacts</h3>
              {isOwner && <a href="#">Edit</a>}
            </div>
            <div className="categories-items">

              {Object.keys(profile.contacts).map(key => <ContactItem key={key} ContactLink={profile.contacts[key]} ContactTitle={key}/>)}
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="user-data full-width">
            <div className="about-left-heading">
              <h3>About</h3>
              {isOwner && <a href="#">Edit</a>}
            </div>
            <div className="about-dt-des">
              <p>{profile.aboutMe}</p>
            </div>
          </div>
          {profile.lookingForAJob &&
          <div className="user-data full-width">
            <div className="about-left-heading">
              <h3>Looking For A Job Description</h3>
              {isOwner && <a href="#">Edit</a>}
            </div>
            <div className="about-dt-des">
              <p>{profile.lookingForAJobDescription}</p>
            </div>
          </div>
          }


          {/*<div className="user-data full-width">*/}
          {/*  <div className="about-left-heading">*/}
          {/*    <h3>Hobbies</h3>*/}
          {/*    <a href="my_dashboard_setting_info.html">Edit</a>*/}
          {/*  </div>*/}
          {/*  <div className="about-hobbies">*/}
          {/*    <div className="row">*/}
          {/*      <div className="col-lg-6 col-md-12">*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Music</h6>*/}
          {/*          <span>Folk, Rap, Solo, Hiphop</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Books</h6>*/}
          {/*          <span>Novel, Comics, Jokes, Love Stories, Secience, History</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Music</h6>*/}
          {/*          <span>Dangle, Na Peru Suriya, Raja the Great, Bahubali 2</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Tv Shows</h6>*/}
          {/*          <span>The Kapil Sharma Show, Kulfi, CID, Big Boss</span>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="col-lg-6 col-md-12">*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Games</h6>*/}
          {/*          <span>Cricket, Football, Hockey, Kabaddi</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Brands</h6>*/}
          {/*          <span>Apple, Oppo, Nike, Addidas, Puma. Jack & Jone, Nokia</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Favourite Artists</h6>*/}
          {/*          <span>Babbu Maan, Salman Khan, Kapil Sharma, Priyanka Chopra</span>*/}
          {/*        </div>*/}
          {/*        <div className="all-hobbies">*/}
          {/*          <h6>Other Interests</h6>*/}
          {/*          <span>Travel, Hiking, Web designing</span>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="edu-emp-items">*/}
          {/*  <div className="row">*/}
          {/*    <div className="col-lg-6 col-md-12">*/}
          {/*      <div className="user-data full-width mb-20">*/}
          {/*        <div className="about-left-heading">*/}
          {/*          <h3>Education</h3>*/}
          {/*          <a href="my_dashboard_setting_info.html">Edit</a>*/}
          {/*        </div>*/}
          {/*        <div className="about-hobbies">*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Master of Science in Information Technology</h6>*/}
          {/*            <span>2014 - 2016</span>*/}
          {/*            <a href="my_dashboard_about.html#">Lovelt Professional University</a>*/}
          {/*          </div>*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Bachelor of Science in Information Technology</h6>*/}
          {/*            <span>2011 - 2014</span>*/}
          {/*            <a href="my_dashboard_about.html">Punjab Technical University</a>*/}
          {/*          </div>*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Graphic Designing Course</h6>*/}
          {/*            <span>2016 - 2017</span>*/}
          {/*            <a href="my_dashboard_about.html#">Gambol Information Institute</a>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className="col-lg-6 col-md-12">*/}
          {/*      <div className="user-data full-width mb-20">*/}
          {/*        <div className="about-left-heading">*/}
          {/*          <h3>Education</h3>*/}
          {/*          <a href="my_dashboard_setting_info.html">Edit</a>*/}
          {/*        </div>*/}
          {/*        <div className="about-hobbies">*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Owner and Founder</h6>*/}
          {/*            <span>2017 - Present</span>*/}
          {/*            <a href="my_dashboard_about.html#">Gambol Themes</a>*/}
          {/*          </div>*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Graphic Designer</h6>*/}
          {/*            <span>2016 - 2017</span>*/}
          {/*            <a href="my_dashboard_about.html#">Company Name</a>*/}
          {/*          </div>*/}
          {/*          <div className="all-hobbies">*/}
          {/*            <h6>Web Designer</h6>*/}
          {/*            <span>2016 - 2017</span>*/}
          {/*            <a href="my_dashboard_about.html#">Company Name</a>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
       </React.Fragment>
  )
}

export default About;