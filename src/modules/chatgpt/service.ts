import * as Helper from "./helper";

export const updateChatgpt = async (req: any, res: any) => {
  const out: any = await Helper.updateChatgpt(req.body);
  res.status(200);
  res.send(out);
  res.end();
};
