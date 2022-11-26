// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findOne, update, deleteOne } from "../../../lib/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await get(req, res);
  }

  if (req.method === "PUT") {
    await put(req, res);
  }

  if (req.method === "DELETE") {
    await fn_delete(req, res);
  }
}

async function fn_delete(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);

  try {
    await deleteOne(id);

    res.status(200).json({ id });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}

async function put(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);
  const aluno = { ...req.body };

  try {
    await update(id, aluno);

    res.status(200).json(aluno);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);

  try {
    const aluno = await findOne(id);

    res.status(200).json(aluno);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}
