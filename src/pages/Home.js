import React from 'react';
import Header from '../components/Header';
import homeStyles from '../styles/homeStyle.module.css';

import sapLogo from '../resources/SAPLogo.png';

export default function Home() {
  return (
    <div>
      <div className={homeStyles.introThemeLayers}>
        <div className={homeStyles.haloBg}>
          <div className={homeStyles.introSideTab}>
            <p className={homeStyles.introSideText}>
              <span style={{fontSize:'4vi'}}>Hi! </span>
              <span style={{fontSize:'2vi'}}>My name is </span>
              <span style={{fontSize:'3vi'}}>Kai Chu</span>
              <span style={{fontSize:'2vi'}}>,<br/></span>
              <span style={{fontSize:'2vi'}}>I am an aspiring game developer.</span>
            </p>
          </div>
        </div>
        <Header />
      </div>
      

      <div className={homeStyles.bioCard}>
        <p>
          <span style={{fontSize:'3vi'}}>Bio</span>
          <span style={{fontSize:'1.5vi'}}>
            <br/><br/>
            I am an avid gamer who loves a whole variety of video game genres.
            I have played video games since I was a child, and have been very engaged
            with the video game industry for over 10 years.
          </span>
          <span style={{fontSize:'1.5vi'}}>
            <br/><br/>
            I aim to build 3D story driven games
            in the future that grab the attention of gamer’s across the world!
          </span>
        </p>
      </div>

      <div className={homeStyles.jobCardStyle1}>
        <div className={homeStyles.jobCardImg}>
          {/* <img src={sapLogo}/> */}
        </div>
        <div className={homeStyles.jobCardText}>text</div>
      </div>
    </div>
  );
}
