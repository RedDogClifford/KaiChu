import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import portfolioStyles from '../styles/portfolioStyle.module.css'

import overtimeImg from '../resources/gameImgs/overtimeLogo.jpg'

export default function Portfolio() {
  return (
    <div>
      <Header />

      <div className={portfolioStyles.title}>Game Portfolio</div>

      <div className={portfolioStyles.gameCard1}>
        <img src={overtimeImg} className={portfolioStyles.gameImage1}/>
        <div className={portfolioStyles.gameText1}>
          <p>
            <span style={{fontSize:'1.5vi'}}>Game Jam 2023</span>
            <br/>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>C#, Unity, Medibang</span>
            <br/>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
            <br/>
            Participated in the Game Jam 2023 by GitHub.
            <br/>
            Within a month, I created a top-down survival game
            <br/>
            based on the theme SCALE.
            <br/><br/>
            Overtime is a top-down survival game with the 
            <br/>
            objective of killing as much ninjas as you can.
            <br/><br/>
            </span>

            <div className={portfolioStyles.gameTextSub1}>
              <div className={portfolioStyles.gameLink1}>
                <a href="https://happyteam.itch.io/overtime">Itch.io</a>
                <div className={portfolioStyles.barLine}/>
                <a href="https://github.com/RedDogClifford/Overtime">GitHub</a>
              </div>
              <div className={portfolioStyles.gameDate1}>
                Nov 2023
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className={portfolioStyles.bufferSpace}/>

      <div className={portfolioStyles.gameCard2}>
        <div className={portfolioStyles.gameText1}>
          <p>
            <span style={{fontSize:'1.5vi'}}>Temple Run&nbsp;</span>
            <span style={{fontSize:'1vi', color:'#7B7B7B'}}>Remake</span>
            <br/>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>C#, Unity</span>
            <br/>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
            <br/>
            Temple run is an 3D endless runner game with the
            <br/>
            goal of collecting gems as you run from creatures.
            <br/><br/>
            I had the chance to work on level designing,
            <br/>
            building multiple stage paths, coin trails, and
            <br/>
            background environments using Unity store assets.
            <br/><br/>
            </span>

            <div className={portfolioStyles.gameTextSub1}>
              <div className={portfolioStyles.gameLink1}>
                <a href="https://happyteam.itch.io/temple-run-remake">Itch.io</a>
                <div className={portfolioStyles.barLine}/>
                <a href="https://github.com/RedDogClifford/Temple-Run-Remake-Scripts">GitHub</a>
              </div>
              <div className={portfolioStyles.gameDate1}>
                April - May 2023
              </div>
            </div>
          </p>
        </div>
        <div className={portfolioStyles.imgContainer1}>
          <img src="https://media.giphy.com/media/J7rlyDa8zIwyq88SC6/giphy-downsized-large.gif" className={portfolioStyles.gameImage2}/>
          <div className={portfolioStyles.gameImageRow}>
            <img src="https://media.giphy.com/media/4mMt3Vz7nAa7qt52s4/giphy.gif" className={portfolioStyles.gameImage2}/>
            <img src="https://media.giphy.com/media/WCiA7JkvtPZYEoCJUa/giphy.gif" className={portfolioStyles.gameImage2}/>
          </div>
        </div>
      </div>

      <div className={portfolioStyles.bufferSpace}/>

      <div className={portfolioStyles.gameCard1}>
        <img src="https://media.giphy.com/media/WItEjASFX6fhe9gsUY/giphy.gif" className={portfolioStyles.gameImage1}/>
        <div className={portfolioStyles.gameText1}>
          <p>
            <span style={{fontSize:'1.5vi'}}>Asteroids&nbsp;</span>
            <span style={{fontSize:'1vi', color:'#7B7B7B'}}>Remake</span>
            <br/>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>C++, SFML</span>
            <br/>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
            <br/>
            Asteroids is a 2D shooter game with the goal of
            <br/>
            shooting and destroying as many asteroids and
            <br/>
            saucers as possible.
            <br/><br/>
            With SFML being a low-level library, I learned and
            <br/>
            developed my own game components that
            <br/>
            reflected game engine tools (such as object
            <br/>
            collision, rendering order, sprite animation, ...).
            <br/><br/>
            </span>

            <div className={portfolioStyles.gameTextSub1}>
              <div className={portfolioStyles.gameLink1}>
                <a href="https://happyteam.itch.io/asteroids-game-remake">Itch.io</a>
                <div className={portfolioStyles.barLine}/>
                <a href="https://github.com/RedDogClifford/Asteroids-Game-Recreation">GitHub</a>
              </div>
              <div className={portfolioStyles.gameDate1}>
                May 2023
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className={portfolioStyles.bufferSpace}/>

      <div className={portfolioStyles.gameCard2}>
        <div className={portfolioStyles.gameText1}>
          <p>
            <span style={{fontSize:'1.5vi'}}>Dinosaur Game&nbsp;</span>
            <span style={{fontSize:'1vi', color:'#7B7B7B'}}>Remake</span>
            <br/>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>C++, SFML</span>
            <br/>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
            <br/>
            Dinosaur game is an endless 2D plat-former game
            <br/>
            where the goal is to jump over obstacles and
            <br/>
            achieve a new high score.  
            <br/><br/>
            </span>

            <div className={portfolioStyles.gameTextSub1}>
              <div className={portfolioStyles.gameLink1}>
                <a href="https://happyteam.itch.io/dinosaur-game-remake">Itch.io</a>
                <div className={portfolioStyles.barLine}/>
                <a href="https://github.com/RedDogClifford/Dinosaur-Game-Recreation">GitHub</a>
              </div>
              <div className={portfolioStyles.gameDate1}>
                Mar 2023
              </div>
            </div>
          </p>
        </div>

        <img src="https://media.giphy.com/media/UwXWVbt9wvlSM4P5FV/giphy.gif" className={portfolioStyles.gameImage1}/>
      </div>
      
      <div className={portfolioStyles.bufferSpace}/>

      <div className={portfolioStyles.gameCard1}>
        <img src="https://media.giphy.com/media/fCMxLpIMls0xB5yBfs/giphy.gif" className={portfolioStyles.gameImage1}/>
        <div className={portfolioStyles.gameText1}>
          <p>
            <span style={{fontSize:'1.5vi'}}>PolyPop&nbsp;</span>
            <span style={{fontSize:'1vi', color:'#7B7B7B'}}>Remake</span>
            <br/>
            <span style={{fontSize:'0.75vi', color:'#7B7B7B'}}>C#, Unity, Blender</span>
            <br/>
            <span style={{fontSize:'1vi', fontWeight:'300'}}>
            <br/>
            Polypop is a top-down shooter game with the
            <br/>
            objective to slay chickens and survive for as long
            <br/>
            as possible.
            <br/><br/>
            Experienced designing game scene models
            <br/>
            through Blender. Modeled trees, the island,
            <br/>
            cave entrance, and more.
            <br/><br/>
            </span>

            <div className={portfolioStyles.gameTextSub1}>
              <div className={portfolioStyles.gameLink1}>
                <a href="https://github.com/RedDogClifford/polypop">GitHub</a>
              </div>
              <div className={portfolioStyles.gameDate1}>
                Dec - Jan 2023
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className={portfolioStyles.bufferSpace}/>

      <Footer/>
    </div>
  );
}
