const axios = require("axios");
import { chatgptCollection, chatgptSchema } from "./model";
const { getGlobalCollection } = require("../../lib/dbutils");

const CHATGPT_API_BASE_URL = "https://api.openai.com/";
const chatgptDefaultApiKey = process.env.CHATGPT_API_KEY || "DEFAULT CHATGPT KEY";

export const processChatGpt = async (
  uri: string,
  data: any,
  authorizationHeader: any
) => {

  let authorization = `Bearer ${chatgptDefaultApiKey}`;

  const authString = authorizationHeader || "";
  const authParts = authString.split(" ");
  if (authParts.length === 2) {
    authorization = `Bearer ${authParts[1]}`;
  }
  const _headers = {
    "Content-Type": "application/json",
    authorization,
  };

  try {
    const res = await axios.post(`${CHATGPT_API_BASE_URL}${uri}`, data, {
      headers: _headers,
    });
    console.log("**GPT service success");
    return { code: res.status, data: res.data };
  } catch (error: any) {
    console.log("**GPT service error");
    console.log(error);
    if (error.response) {
      return { code: error.response.status, data: error.response.data };
    } else {
      return { code: 500, data: { error: "Internal Server Error" } };
    }
  }
};
