// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findForName } from "../../../lib/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [campo, search] = req.query.slug as string[];

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const skip = limit * (page - 1);

  const config = {
    query: req.query,
    limit,
    skip,
    campo,
    search,
  };

  try {
    const aluno = await findForName(config);

    res.status(200).json(aluno);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}
