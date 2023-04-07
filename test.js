function x() {
  try {

    throw Error(1);
  }
  catch {
    return 0;
  }
}
console.log(x());