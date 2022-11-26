// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findAll, insert } from "../../lib/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await get(req, res);
  }

  if (req.method === "POST") {
    await post(req, res);
  }
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const aluno = { ...req.body };

  try {
    await insert(aluno);

    res.status(200).json(aluno);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const skip = limit * (page - 1);

  const config = {
    query: req.query,
    limit,
    skip,
  };

  try {
    const docs = await findAll(config);

    res.status(200).json(docs);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}
