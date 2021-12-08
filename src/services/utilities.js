const defaultContinents = [
  {name: 'Africa' ,selected: true},
  {name: 'Americas' ,selected: true},
  {name: 'Asia' ,selected: true},
  {name: 'Europe' ,selected: true},
  {name: 'Oceania' ,selected: true},
];

const getRandomNumber = (max) => Math.round(Math.random() * max);

const getRandomCountries = (arrays, num) => {
  const countries = [];
  let i = 0;
  while (countries.length !== num) {
    if (arrays[i] !== undefined) {
      let randomI = getRandomNumber(arrays[i].length - 1);
      countries.push(arrays[i][randomI]);

      const index = arrays[i].indexOf(arrays[i][randomI], 1);
      arrays[i] = arrays[i].filter((_arr, arrI) => arrI !== index);
    }
    if (i === arrays.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
  }

  return countries;
};

const shuffleArray = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const r = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}

export { defaultContinents, getRandomNumber, getRandomCountries, shuffleArray };
