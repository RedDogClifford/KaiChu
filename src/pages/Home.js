import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeStyles from '../styles/homeStyle.module.css';

import sapLogo from '../resources/companyLogos/SAPLogo.png';
import aqLogo from '../resources/companyLogos/aqLogo.png';
import vjgaLogo from '../resources/companyLogos/vjgaLogo.png';

export default function Home() {
  return (
    <div>
      <div className={homeStyles.introThemeLayers}>
        <div className={homeStyles.haloBg}>
          <div className={homeStyles.introSideTab}>
            <p className={homeStyles.introSideText}>
              <span style={{fontSize:'4vi'}}>Hi! </span>
              <span style={{fontSize:'1.5vi'}}>My name is </span>
              <span style={{fontSize:'3vi'}}>Kai Chu</span>
              <span style={{fontSize:'1.5vi'}}>,<br/></span>
              <span style={{fontSize:'1.5vi'}}>I am an aspiring game developer.</span>
            </p>
          </div>
        </div>
        <Header />
      </div>
      

      <div className={homeStyles.bioCard}>
        <p>
          <span style={{fontSize:'2vi'}}>Bio</span>
          <span style={{fontSize:'1vi', fontWeight:'500'}}>
            <br/><br/>
            I am an avid gamer who loves many video game genres. 
            <br/>
            I have played video games since I was a child, and have been very engaged
            <br/>
            with the video game industry for over 10 years.          
            <br/><br/>
            I dream of building 3D story-driven games
            <br/>
            in the future that grab the attention of gamers across the world!
          </span>
        </p>
      </div>

      <div className={homeStyles.jobCardStyle1}>
        <img className={homeStyles.jobCardLogo} src={sapLogo}/>
        <div className={homeStyles.jobCardText}>
          <p>
            <span style={{fontSize:'2vi'}}>SAP</span>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>
              <br/>
              Java, Javascript, Jira, HTML5, CSS, JUnit, Cypress, Vert .x,
              <br/>
              Figma, Postman, Mural, MongoDB, Jenkins
            </span>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
              <br/><br/>
              Worked under SAP as a full-stack software developer
              <br/> 
              intern for 1 year.
              <br/><br/>
              I primarily contributed to the development of&nbsp;
              <span className={homeStyles.sapLink}><a href="https://me.sap.com/" target="_blank" rel="noopener noreferrer">SAPForMe</a></span>
              &nbsp;Partner dashboards through front-end UI, and back-end API development.
              <br/><br/>
              My role also included the responsibility to ensure code reliability
              <br/>
              through testing frameworks, and the ability to provide
              <br/>
              technical support for dashboard defects.
            </span>
          </p>
        </div>
      </div>

      <div className={homeStyles.jobCardStyle2}>
        <div className={homeStyles.jobCardText2}>
          <p>
            <span style={{fontSize:'2vi'}}>ArcadeQuest</span>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>
              <br/>
              Javascript, Python, Firebase, React/React Native, AWS EC2,
              <br/>
              Axios HTTP, Express.js & Sanic, NGINX, AdobeXD, Miro
            </span>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
              <br/><br/>
              Worked under ArcadeQuest as a back-end
              <br/>
              developer intern for 8 months.
              <br/><br/>
              I designed, developed and deployed over 100 AI client
              <br/>
              services to create seamless experiences when creating 
              <br/>
              and joining Fortnite tournaments.
              <br/><br/>
              I also had the chance to provide support during
              <br/>
              live testings and UI development on their mobile application.
            </span>
          </p>
        </div>
        <img className={homeStyles.jobCardLogo} src={aqLogo}/>
      </div>

      <div className={homeStyles.jobCardStyle3}>
        <img className={homeStyles.jobCardLogo} src={vjgaLogo}/>
        <div className={homeStyles.jobCardText}>
          <p>
            <span style={{fontSize:'2vi'}}>Vancouver Japanese Gardeners Association</span>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>
              <br/>
              Javascript, HTML, CSS, React, WinSCP
            </span>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
              <br/><br/>
              Designed and developed a new&nbsp;
              <span className={homeStyles.vjgaLink}><a href="https://www.vanjapangardeners.com/#/" target="_blank" rel="noopener noreferrer">VJGA</a></span>
              &nbsp;website to provide a
              <br/>
              new modern look to their website.
              <br/><br/>
              I also added mobile compatibility and Japanese translation
              <br/>
              to improve user experience and accessibility.
            </span>
          </p>
        </div>
      </div>

      <div className={homeStyles.bufferSpace}/>

      <Footer/>
    </div>
  );
}
