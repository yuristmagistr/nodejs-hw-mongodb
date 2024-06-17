import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
  next();
};

// export const notFoundHandler = (err, req, res, next) => {
//   res.status(404).json({
//     status: 404,
//     message: 'Contact not found',
//     data: { message: 'Contact not found' },
//   });
//   next();
// };
