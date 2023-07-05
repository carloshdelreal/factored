export const errorMessage = (error) => {
  let errorMessage = `${error.message} `;
  if (error?.response) {
    if (error?.response?.data?.status) {
      errorMessage += error.response.data.status.message;
    } else {
      errorMessage += error.response.data;
    }
  }

  return errorMessage;
};
