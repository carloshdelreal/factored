export const errorMessage = (error) => {
  let errorMessage = `${error.message} `;
  if (error?.response) {
    errorMessage += error.response.data.message;
  }

  return errorMessage;
};
