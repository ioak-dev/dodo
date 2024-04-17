import fs from "fs";
import jwt from "jsonwebtoken";
import { validate } from "./modules/auth/helper";

export const authorize = async (req: any, res: any, next: any) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.sendStatus(401);
  }
  const out = await validate(token);
  console.log("---11", out);
  if (!out) {
    return res.sendStatus(401);
  }
  next();
};
