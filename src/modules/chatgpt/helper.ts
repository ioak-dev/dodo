const axios = require("axios");
import { chatgptCollection, chatgptSchema } from "./model";
const { getGlobalCollection } = require("../../lib/dbutils");

const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";
const CHATGPT_DEFAULT_AUTH =
  "DEFAULT CHATGPT KEY";

export const processChatGpt = async (data: any, authorizationHeader: any) => {
  const model = getGlobalCollection(chatgptCollection, chatgptSchema);

  let authorization = `Bearer ${CHATGPT_DEFAULT_AUTH}`;

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
    const res = await axios.post(CHATGPT_API_URL, data, { headers: _headers });
    return { code: res.status, data: res.data };
  } catch (error: any) {
    if (error.response) {
      return { code: error.response.status, data: error.response.data };
    } else {
      return { code: 500, data: { error: "Internal Server Error" } };
    }
  }
};
