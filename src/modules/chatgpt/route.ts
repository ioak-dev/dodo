import { authorize } from "../../middlewares";
import { updateChatgpt } from "./service";

module.exports = function (router: any) {
  router.post("/chatgpt", authorize, updateChatgpt);
};
