// actionCaptureMiddleware.js
const capturedActions = [];

const actionCaptureMiddleware = (store) => (next) => (action) => {
  capturedActions.push(action);
  return next(action);
};

export const getCapturedActions = () => {
  return capturedActions;
};

export const clearCapturedActions = () => {
  capturedActions.length = 0;
};

export default actionCaptureMiddleware;