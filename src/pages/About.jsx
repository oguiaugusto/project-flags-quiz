import React, { Component } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LeaveButton from '../components/LeaveButton';

class About extends Component {
  constructor(props) {
    super(props);

    this.handleLeave = this.handleLeave.bind(this);
  }

  handleLeave() {
    this.props.history.push('/');
  }

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
        <LeaveButton handleLeave={ this.handleLeave }>Voltar</LeaveButton>
      </div>
    );
  }
}

export default About;
