import React, { Component } from 'react';

class HomePageInfo extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }} className="pt-5" id="home">
        <div className="pt-5">
          <div className="HomePageInfo text-center">
            <h1 class="BigText"> Hi, I'm Katie! </h1>
          </div>
        </div>
        
          <h3 className="frontPage text-center">
            {' '}
            Full Stack Web Developer | Alaska Native | Former Music Teacher{' '}
          </h3>
        

        <ul className="word-grid list-unstyled d-flex flex-wrap justify-content-center">
          <li className="col-home language">JAVASCRIPT</li>
          <li className="col-home frontend">REACT</li>
          <li className="col-home backend">NODE</li>

          <li className="col-home frontend">REDUX</li>
          <li className="col-home backend">EXPRESS</li>
          <li className="col-home language">PYTHON</li>

          <li className="col-home backend">FLASK</li>
          <li className="col-home language">SQL</li>
          <li className="col-home frontend">HTML</li>

          <li className="col-home frontend">CSS</li>
          <li className="col-home language">POSTGRESQL</li>
          <li className="col-home frontend">JQUERY</li>
        </ul>
      </div>
    );
  }
}

export default HomePageInfo;
