import jwt from "jsonwebtoken";

interface IProp {
  shopify: {
    access_token: string;
  };
  square: {
    application_id: string;
    access_token: string;
    location_id: string;
  };
}

const secret = process.env.JWT_SECRET || "arewageek";

if (!secret || typeof secret !== "string") {
  throw new Error("Missing JWT_SECRET in environment variables.");
}

/**
 * encode data
 *
 * @param {IProp} data
 * @returns {string}
 */
export const jwtEncode = (data: IProp): string => {
  return jwt.sign(data, secret);
};

/**
 * decode jwt token back into it's raw data
 *
 * @param {string} token
 * @returns {IProp}
 */
export const jwtVerify = async (token: string) => {
  try {
    return jwt.verify(token, secret) as IProp;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
