const axios = require("axios");
// const ONEAUTH_API = process.env.ONEAUTH_API || "http://localhost:4010/api";
const ONEAUTH_API = process.env.ONEAUTH_API || "https://api.ioak.io:8010/api";
import { incomeCategoryCollection, incomeCategorySchema } from "./model";
const { getGlobalCollection } = require("../../lib/dbutils");

export const updateIncomeCategory = async (data: any) => {
  const model = getGlobalCollection(
    incomeCategoryCollection,
    incomeCategorySchema
  );
  if (data._id) {
    const response = await model.findByIdAndUpdate(
      data._id,
      {
        ...data,
      },
      { new: true, upsert: true }
    );
    return response;
  }

  return await model.create(data);
};
