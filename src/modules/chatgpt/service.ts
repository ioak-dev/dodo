import * as Helper from "./helper";

export const processChatGpt = async (req: any, res: any) => {
  const { data, headers } = req;
  const out: any = await Helper.processChatGpt(req.body, headers?.authorization);
  res.status(out.code);
  res.send(out.data);
  res.end();
};
