import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send("me" + JSON.stringify(req.body));
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send("me PATCH" + JSON.stringify(req.body));
  },
});
