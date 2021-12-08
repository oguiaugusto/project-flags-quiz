import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { shuffleArray } from '../services/utilities';

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

      score: 0,
      endGame: false,
    };

    this.setOptions = this.setOptions.bind(this);
    this.nextFlag = this.nextFlag.bind(this);
    this.answer = this.answer.bind(this);
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

  answer({ target: { name } }) {
    const { props: { countries } } = this;
    let { score, correctOption, countryIndex } = this.state;

    if (name === correctOption) score += 1;
    this.setState({ score, correctOptionClass: 'btn btn-option correct' }, () => {
      if (name !== correctOption) this.setState({ wrongOption: name });
    });

    console.log(countries.length)
    if (countryIndex === countries.length - 1) this.setState({ endGame: true });
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
      score,
      endGame,
    } = this.state;

    if (!currentCountry) return <Redirect to="/" />;
    if (endGame) return <p>{`Fim! Pontuação: ${score}`}</p>

    const { name: { common } = '', flags: { svg } = '' } = currentCountry;

    return (
      <div className="play-page">
        <p className="rounds">{`${countryIndex + 1}/${countries.length}`}</p>
        <div className="flag">
          <img src={ svg } alt={ `${common} flag` } />
        </div>
        <div className="options">
          {options.map((option) => (
            <button
              key={ option }
              type="button"
              className={ option === correctOption ? correctOptionClass : (
                option === wrongOption ? 'btn btn-option wrong' : 'btn btn-option'
              ) }
              name={ option }
              disabled={ correctOptionClass !== 'btn btn-option' }
              onClick={ this.answer }
            >
              {option}
            </button>
          ))}
        </div>
        {countryIndex !== countries.length - 1 ? (
          <button
            type="button"
            className="btn btn-next"
            onClick={ this.nextFlag }
          >
            Próxima
          </button>
        ) : null}
      </div>
    );
  }
}

Play.propTypes = {
  allCountries: PropTypes.arrayOf(PropTypes.any),
  countries: PropTypes.arrayOf(PropTypes.any),
};

export default Play;
