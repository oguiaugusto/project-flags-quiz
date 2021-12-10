import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { PageMenu, MenuButton } from '../components/styledComponents';
import '../styles/home.css';

class Home extends Component {
  render() {
    const { props: { loading } } = this;
    if (loading) return <div className="home-menu">
      <Loader type="TailSpin" color="#252525" height={40} width={40} />
    </div>;
    return (
      <div className="home-page">
        <PageMenu className="home-menu">
          <MenuButton className="btn-menu">
            <Link to="/play">
              <div>Jogar</div>
            </Link>
          </MenuButton>
          <MenuButton className="btn-menu">
            <Link to="/config">
              <div>Opções</div>
            </Link>
          </MenuButton>
          <MenuButton className="btn-menu">
            <Link to="/about">
              <div>Sobre</div>
            </Link>
          </MenuButton>
        </PageMenu>
      </div>
    );
  }
}

export default Home;
