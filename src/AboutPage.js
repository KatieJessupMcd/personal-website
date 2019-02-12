import React, { Component } from 'react';
import headShot from './headShot.jpg';
import './App.css'; 

class AboutPage extends Component {
  render() {
    return (
      <main>
        <section id="about">
          <div className="row pt-5">
            <div className="col-6 text-center">
              <img src={headShot} alt="" className="profile" style={{width: '75%', borderRadius: '50%'}} />
            </div>

            <div className="col-5 pt-5">
              <h1>About me</h1>
              <p>
                I am a fullstack software engineer studying at Rithm School.{' '}
              </p>
           
              <p>
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
      </main>
    );
  }
}

export default AboutPage;
