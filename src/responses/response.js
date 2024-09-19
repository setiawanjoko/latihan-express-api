const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
      message: message,
    },
    pagination: {
      next: "",
      prev: "",
      max: "",
    },
  });
};

export default response;