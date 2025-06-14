function multiply(a, b) {
  return a * b;
}
module.exports = multiply;
const fetchData = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("error occured");
      } else {
        resolve("good");
      }
    }, 100);
  });
};

module.exports = fetchData;
