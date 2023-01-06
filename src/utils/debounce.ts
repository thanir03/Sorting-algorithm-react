// To optimize performance by avoid executing the callback function in every input change
// only execute the callback after delay time
const debounce = (fn: any, delay: number) => {
  let timerId: number | undefined;
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(timerId);
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      fn(event);
    }, delay);
    console.log(timerId);
  };
};
export { debounce };
