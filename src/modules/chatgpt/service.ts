import * as Helper from "./helper";

export const processChatGpt = async (req: any, res: any) => {
  const uri = `${req.params.uri}${req.params[0]}`;
  const { data, headers } = req;
  const out: any = await Helper.processChatGpt(uri, req.body, headers?.authorization);
  res.status(out.code);
  res.send(out.data);
  res.end();
};
