import React, { Component } from 'react';
import headShot from './headShot.jpg';
import './App.css'; 

class AboutPage extends Component {
  render() {
    return (
      <div style={{ height: '100vh'}}  id="about">
          <div className="row pt-5">
            <div className="col-6 text-center">
              <img src={headShot} alt="" className="profile" style={{width: '75%', paddingTop: '2rem'}} />
            </div>

            <div className="col-5">
              <h1 className="HeaderText">About me</h1>
              <p>
              I am a full stack web developer based in the Bay Area with a passion for detail and
              problem solving.
              </p>
           
              <p>
                I grew up in a small village in Alaska above the Arctic Circle. My connection to the rest of the world was through a tenuous dial up tone, a connection that has thankfully since improved. 
                Prior to transitioning to tech I was a music teacher and band
                director. My love of organization, problem solving, and growth
                mindset led me to study programming.{' '}
              </p>
           
              <p>
                When not coding you can find me hiking with my family, building
                Lego, or making gluten free banana pancakes.{' '}
              </p>
            </div>
            </div>
        </div>
    );
  }
}

export default AboutPage;
