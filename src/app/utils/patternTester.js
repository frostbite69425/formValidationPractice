const patternTester = (element, regEx) => {
  const elementValue = element.value;
  return regEx.test(elementValue);
};

export default patternTester;
