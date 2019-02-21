import React, { Component } from 'react';

class HomePageInfo extends Component {
  render() {
    return (
      <section style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="pt-5" id="home">
        <div className="col-xs-12">
          <div className="HomePageInfo text-center">
            <h1 className="BigText"> Hi, I'm Katie! </h1>
          </div>
        </div>
        
          <h3 className="frontPage text-center">
            {' '}
            Full Stack Software Engineer | Alaska Native | Former Music&nbsp;Teacher{' '}
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
      </section>
    );
  }
}

export default HomePageInfo;
