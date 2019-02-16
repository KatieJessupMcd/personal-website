import React, { Component } from 'react';
import headShot from './headShot.jpg';
import './App.css'; 

class AboutPage extends Component {
  render() {
    return (
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} id="about">
          <div className="row">
            <div className="col-xs-6 col-md-6 col-lg-6 text-center">
            <div className="image-container">
              <img src={headShot} alt="" className="profile img-responsive" style={{width: '33rem', marginTop: '4rem', borderRadius: '5%'}} />
              </div>
            </div>

            <div className="col-xs-5 col-md-5 col-lg-5">
              <h1 className="HeaderText">About me</h1>
              <p>
              I am a full stack software engineer based in the Bay Area with a passion for detail and
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
        </section>
    );
  }
}

export default AboutPage;
