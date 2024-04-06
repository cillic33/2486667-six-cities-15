import {StatusCodes} from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const BAD_REQUEST_ERROR = 'Request cannot be completed';
const UNAUTHORIZED_ERROR = 'Server cannot identify the client';
const NOT_FOUND_ERROR = 'Server could not find the requested website';


export {StatusCodeMapping, BAD_REQUEST_ERROR, UNAUTHORIZED_ERROR, NOT_FOUND_ERROR};
