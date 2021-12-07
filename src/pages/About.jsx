import React, { Component } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <p>
          Esta aplicação foi criada por <a rel="noreferrer" href="https://www.linkedin.com/in/oguiaugusto/">Guilherme Augusto</a> usando a API <a rel="noreferrer" href="https://restcountries.com/" target="_blank">REST Countries</a>
        </p>
        <div className="social-media">
          <a rel="noreferrer" href="https://github.com/oguiaugusto" target="_blank">
            <BsGithub color="#252525" size={ 50 } />
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/oguiaugusto/" target="_blank">
            <BsLinkedin color="#252525" size={ 50 } />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
