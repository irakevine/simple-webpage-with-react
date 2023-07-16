import "../css/index.css"
import appleimg from '../images/apple2.png'
import aboutimg from '../images/about1.png'
import resumeimg from '../images/resume.png'
import briefcaseimg from '../images/briefcase.png'
import settingsimg from '../images/settings.png'
import review1img from '../images/review1.png'
import bloggingimg from'../images/blogging.png'
import emailimg from '../images/email.png'
import womanimg from '../images/woman33.jpg'
import facebookmg from '../images/facebook-logo.png'
import twitterimg from '../images/twitter.png'
import instagramimg from '../images/instagram.png'
import linkidnimg from '../images/linked-in-logo-of-two-letters.png'
import applelogoimg from '../images/applelogo.png';
import listitem from '../images/list-items.png';

const Home = () => {
    return (
        <div>
      <div className="appldlistitem">
      <div className="appleimg"> 
        <img src={appleimg} alt="" />
         <h3>Apple</h3>
      </div>
      <div className="downloadcv">
        <button>Download CV</button>
      </div>
      <div className="listitem">
        <img src={listitem} alt="" />
      </div>
      </div>

<div className="allthreedivimg">
      <div className="allbuttonimg">
      <div className="aboutimg">
        <img src={aboutimg} />
        <h3>about</h3>
      </div>
      <div className="resumeimg">
        <img src={resumeimg} alt="" />
        <h3>Resume</h3>
      </div>
      <div className="briefcaseimg">
        <img src={briefcaseimg} alt="" />
        <h3>portfolio</h3>
      </div>
      <div className="settingsimg">
        <img src={settingsimg} alt="" />
        <h3>Services</h3>
      </div>
      <div className="testimoniolimg">
        <img src={review1img} alt="" />
        <h3>Testimoniol</h3>
      </div>
      <div className="blogimg">
        <img src={bloggingimg} alt="" />
        <h3>Blog</h3>
      </div>
      <div className="contactimg">
        <img src={emailimg} alt="" />
        <h3>Contact</h3>
      </div>
      </div>

      <div className="allwnimg">
        <img src={womanimg} alt="" />
        <div className="womanNimg">
        <h1>Sarah Jessica</h1>
        <p>Senior Ul/Ux Designer</p>
          <img src={facebookmg} alt="" />
          <img src={twitterimg} alt="" />
          <img src={instagramimg} alt="" />
          <img src={linkidnimg} alt="" />
        </div>
       
      </div>
    <div className="applelogo">
        <div className="applelogoimg">
        <img src={applelogoimg} alt="" />
        </div>
    </div>
    </div>
   
    </div>
    )
}
export default Home;