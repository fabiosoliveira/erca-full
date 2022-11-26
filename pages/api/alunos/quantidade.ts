// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { count } from "../../../lib/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const search = String(req.query.search);
  const campo = String(req.query.campo);

  // console.log({ search, campo });

  let config = {};

  if (req.query.search) {
    config = { [campo]: new RegExp(search.toUpperCase()) };
  }

  try {
    const quantidade = await count(config);

    res.status(200).json({ quantidade });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}
