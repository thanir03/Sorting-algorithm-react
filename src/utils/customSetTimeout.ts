const customSetTimeout = (time: number): Promise<null> => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export { customSetTimeout };
