import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { shuffleArray } from '../services/utilities';
import { PageMenu } from '../components/styledComponents';
import { OptionButton, Button } from '../components/styledComponents';
import LeaveButton from '../components/LeaveButton';
import '../styles/play.css';

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCountry: {},
      countryIndex: 0,

      options: [],
      correctOption: '',
      correctOptionClass: 'btn btn-option',
      wrongOption: '',

      checking: false,
      score: 0,
      endGame: false,
    };

    this.setOptions = this.setOptions.bind(this);
    this.nextFlag = this.nextFlag.bind(this);
    this.answer = this.answer.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  };

  componentDidMount() {
    const { props: { countries } } = this;
    this.setState({ currentCountry: countries[0] }, () => {
      if (this.state.currentCountry) {
        this.setOptions();
      }
    });
  }

  setOptions() {
    const { props: { allCountries } } = this;
    const {
      currentCountry: {
        name: { common: engName },
        continents: currContinent,
        translations: { por: { common: name }},
      },
    } = this.state;

    const options = allCountries
      .filter(({ name: { common }, continents }) => (
        continents.includes(currContinent[0]) && common !== engName
      ))
      .sort(() => Math.random() - 0.5)
      .splice(0, 3)
      .map(({ translations: { por: { common }}}) => common);

    const sortedOptions = shuffleArray([...options, name]);
    this.setState({ options: sortedOptions, correctOption: name });
  }

  nextFlag() {
    const { props: { countries } } = this;
    let { countryIndex } = this.state;
    countryIndex += 1;

    this.setState({
      countryIndex,
      currentCountry: countries[countryIndex],
      correctOptionClass: 'btn btn-option',
      wrongOption: '',
    }, () => this.setOptions());
  }

  showResults() {
    this.setState({ endGame: true });
  }

  answer({ target: { name } }) {
    let { score, correctOption } = this.state;

    this.setState({ checking: true }, () => {
      this.answerTO = setTimeout(() => {
        if (name === correctOption) score += 1;
        this.setState({ score, correctOptionClass: 'btn btn-option correct', checking: false }, () => {
          if (name !== correctOption) this.setState({ wrongOption: name, checking: false });
        });
      }, 800)
    })
  }

  handleLeave() {
    this.props.history.push('/');
  }

  componentWillUnmount() {
    clearTimeout(this.answerTO);
    const { props: { resetGame } } = this;
    resetGame();
  }
  
  render() {
    const { props: { countries } } = this;
    const {
      currentCountry,
      countryIndex,
      options,
      correctOption,
      correctOptionClass,
      wrongOption,
      checking,
      score,
      endGame,
    } = this.state;

    if (!currentCountry) return <Redirect to="/" />;

    if (endGame) return (
      <div className="play-page-results">
        <PageMenu className="play-results">
          <p>Fim de Jogo!</p>
          <p className="score">{ score }</p>
          <p>Pontuação Total</p>
        </PageMenu>
        <div className="border-button">
          <LeaveButton handleLeave={ this.handleLeave } width="100%">Reiniciar</LeaveButton>
        </div>
      </div>
    );

    const { name: { common } = '', flags: { svg } = '' } = currentCountry;

    return (
      <div className="play-page">
        <PageMenu className="play-menu">
          <p className="rounds">{`${countryIndex + 1}/${countries.length}`}</p>
          <div className="flag">
            <img src={ svg } alt={ `${common} flag` } />
          </div>
          <div className="options">
            {options.map((option) => (
              <OptionButton
                key={ option }
                type="button"
                className={ option === correctOption ? correctOptionClass : (
                  option === wrongOption ? 'btn btn-option wrong' : 'btn btn-option'
                ) }
                name={ option }
                disabled={ correctOptionClass !== 'btn btn-option' || checking }
                onClick={ this.answer }
              >
                {option}
              </OptionButton>
            ))}
          </div>
          {checking ? <Loader type="ThreeDots" color="#252525" height={40} width={40} /> : null}
          {correctOptionClass === 'btn btn-option' ? null : (
            countryIndex !== countries.length - 1 ? (
              <div className="border-button">
                <Button
                  type="button"
                  className="btn btn-results"
                  onClick={ this.nextFlag }
                  bgColor="#f0d55f"
                  color="#252525"
                >
                  Próxima
                </Button>
              </div>
            ) : (
              <div className="border-button">
                <Button
                  type="button"
                  className="btn btn-results"
                  onClick={ this.showResults }
                  bgColor="#f0d55f"
                  color="#252525"
                >
                  Resultado
                </Button>
              </div>
            )
          )}
        </PageMenu>
      </div>
    );
  }
}

Play.propTypes = {
  allCountries: PropTypes.arrayOf(PropTypes.any),
  countries: PropTypes.arrayOf(PropTypes.any),
};

export default Play;
