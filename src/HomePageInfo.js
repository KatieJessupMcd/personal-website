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
        <div className="row pt-3">
          <h3 className="frontPage">
            {' '}
            Full Stack Web Developer | Alaska Native | Former Music Teacher{' '}
          </h3>
        </div>

        <div className="flex-grid-thirds">
          <div className="col-home language">Javascript</div>
          <div className="col-home frontend">React</div>
          <div className="col-home backend">Node.js</div>
        </div>
        <div className="flex-grid-thirds">
          <div className="col-home frontend">Redux</div>
          <div className="col-home backend">Express</div>
          <div className="col-home language">Python</div>
        </div>
        <div className="flex-grid-thirds">
          <div className="col-home backend">Flask</div>
          <div className="col-home language">SQL</div>
          <div className="col-home frontend">HTML</div>
        </div>
        <div className="flex-grid-thirds">
          <div className="col-home frontend">CSS</div>
          <div className="col-home language">PostgreSQL</div>
          <div className="col-home frontend">jQuery</div>
        </div>
      </div>
    );
  }
}

export default HomePageInfo;
