import errorCodes from "@/server/data/errorCodes.json";
import errorStatusCodes from "@/server/data/errorStatusCodes.json";

const errorHandler = (
  error = {
    code: 500
  },
  group = "auth",
  defaultMessage = "에러가 발생했습니다."
) => {
  return {
    statusCode: errorStatusCodes[group][error.code],
    message: errorCodes[group][error.code] || defaultMessage,
    data: {
      message: errorCodes[group][error.code] || defaultMessage
    }
  };
};

export default errorHandler;
