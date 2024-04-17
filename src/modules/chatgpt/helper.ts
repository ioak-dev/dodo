const axios = require("axios");
import { chatgptCollection, chatgptSchema } from "./model";
const { getGlobalCollection } = require("../../lib/dbutils");

const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";

export const updateChatgpt = async (data: any) => {
  const model = getGlobalCollection(chatgptCollection, chatgptSchema);

  return { outcome: "success" };
};
