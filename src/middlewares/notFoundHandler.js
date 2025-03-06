import createHttpError from 'http-errors';

function notFoundHandler(req, res) {
  throw createHttpError(404, 'Route not found');
}

export default notFoundHandler;
