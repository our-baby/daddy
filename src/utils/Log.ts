export const logOnDev = (message: string) => {
  if (ENV_MODE === 'development') {
    console.log(message);
  }
};
