import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class Home extends Component {
  render() {
    const { props: { loading } } = this;
    if (loading) return <Loader type="ThreeDots" color="#252525" height={40} width={40} />;
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
