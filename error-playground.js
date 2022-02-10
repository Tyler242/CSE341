const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error('Invalid Arguments');
};

// sychronous error handling
try {
  console.log(sum(1));
} catch (error) {
  console.log('Error');
  //   console.log(error);
}

// console.log(sum(1));
console.log('Yay');
