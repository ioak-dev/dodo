import * as Helper from "./helper";

export const updateIncomeCategory = async (req: any, res: any) => {
  const incomeCategory: any = await Helper.updateIncomeCategory(req.body);
  res.status(200);
  res.send(incomeCategory);
  res.end();
};
