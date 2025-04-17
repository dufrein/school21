export const incorrectParamsMock = [{ classNameThree: 'classNameThree' }, 25, [{ hello: 25 }], () => {}];

export const correctParamsMock = [
  'classNameZero',
  'classNameOne',
  null,
  false,
  undefined,
];

export const incorrectWithCorrectParamsMock = [...correctParamsMock, ...incorrectParamsMock];

export const resultMock = 'classNameZero classNameOne';
