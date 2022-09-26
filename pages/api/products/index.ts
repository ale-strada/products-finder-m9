import { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFromReq } from "lib/requests";
import methods from "micro-method-router";
import { productsIndex } from "lib/algolia";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 10000);

  // index.search('query', {
  //   offset: realOffset,
  //   length: realLimit:
  // }).then(({ hits }) => {
  //   console.log(hits);
  // });
  const results = await productsIndex.search(req.query.search as string, {
    offset: offset,
    length: limit,
  });
  res.send({
    results: results.hits,
    pagination: {
      limit,
      offset,
      total: results.nbHits,
    },
  });
}
