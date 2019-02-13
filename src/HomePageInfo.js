import React, { Component } from 'react';

class HomePageInfo extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center pt-5">
          <div className="HomePageInfo text-center">
            <h1> Hi, I'm Katie! </h1>
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="card text-center" style={{ width: '18rem' }}>
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
            Full Stack Web Developer | Alaska Native | Gluten Intolerant{' '}
          </h3>
        </div>
      </div>
    );
  }
}

export default HomePageInfo;
