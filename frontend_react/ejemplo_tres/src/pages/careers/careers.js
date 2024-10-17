let careersMock = [
  {
    id: 1,
    name: 'Ing. en Sistemas'
  }
];

const getCareers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(careersMock), 1000);
  });
};

export {
  careersMock,
  getCareers
};
