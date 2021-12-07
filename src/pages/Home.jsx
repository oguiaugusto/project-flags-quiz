import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-menu">
          <div className="btn-menu">
            <Link to="/play">Jogar</Link>
          </div>
          <div className="btn-menu">
            <Link to="/config">Opções</Link>
          </div>
          <div className="btn-menu">
            <Link to="/about">Sobre</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
