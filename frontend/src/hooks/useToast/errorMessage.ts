export const errorMessage = (error) => {
  console.log({error})
  let errorMessage = `${error.message} `;
  if (error?.response) {
    if (error?.response?.data?.status) {
      errorMessage += error.response.data.status.message;
    } else if (error?.response?.data?.error) {
      errorMessage += error.response.data.error;
    } else {
      errorMessage += error.response.data;
    }
  }

  return errorMessage;
};
