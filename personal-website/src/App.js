
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="personal-website">
            <h1 id="website-title">Sophie Walden</h1>

            <div id="main-content">
              <div id="about">
                  <h2>About Me</h2>
                  <p>University of Maine Computer Scientist, just making some fun websites on the side!</p>
              </div>
              <div id="portfolio">
                  <h2>Portfolio</h2>

                  <div><h3>Genetic Algorithim Neural Nets: </h3>   <a href="https://github.com/SophieWalden/selfDrivingCarGeneticAlgo"> https://github.com/SophieWalden/selfDrivingCarGeneticAlgo</a></div>
                  <div><h3>CNotes: </h3>   <a href="https://github.com/SophieWalden/CNotes"> https://github.com/SophieWalden/CNotes</a></div>
                  <div><h3>Tower Defense Game: </h3>   <a href="https://github.com/SophieWalden/Block-Tower-Defense"> https://github.com/SophieWalden/Block-Tower-Defense</a></div>

              </div>
              <div id="contact">
                  <h2>Contact Me</h2>
                  <p> Email: sophie.walden@maine.edu</p>
              </div>
            </div>
        </div>
    );
}

export default App;
