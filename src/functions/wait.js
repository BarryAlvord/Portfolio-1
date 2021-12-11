const wait = (ms) => {
  return new Promise((timeOut) => {
    const waiting = setTimeout(timeOut, ms);
    return () => clearTimeout(waiting);
  });
};
export default wait;
