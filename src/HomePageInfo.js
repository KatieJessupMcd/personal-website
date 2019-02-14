import React, { Component } from 'react';

class HomePageInfo extends Component {
  render() {
    return (
      <div style={{ height: '100vh'}} className= 'pt-5' id="home">
        <div className="pt-5">
          <div className="HomePageInfo text-center">
            <h1 class="BigText"> Hi, I'm Katie! </h1>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="card text-center" style={{ width: '18rem', backgroundColor: '#BAB2B5'}}>
            <div className="cardBody">
              <h5 className="cardTitle">Skills</h5>
              <div className="cardText">
                Javascript, React, Reudx, Node.js, Express, Python, Flask, SQL,
                PosgreSQL, HTML, CSS
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <h3>
            {' '}
            Full Stack Web Developer | Alaska Native | Former Music Teacher {' '}
          </h3>
        </div>
      </div>
    );
  }
}

export default HomePageInfo;
