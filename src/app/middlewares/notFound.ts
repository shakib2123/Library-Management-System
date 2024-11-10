import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Not found!",
    error: {
      path: req.originalUrl,
      message: "your request path is not found",
    },
  });
};

export default notFound;
