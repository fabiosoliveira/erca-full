import { MongoClient, ObjectId } from "mongodb";
const bd_name = "sistema_matricula";
const bd_collection = "alunos";

const uri = process.env.MONGODB_CONNNECTION || "";

const client = new MongoClient(uri);

const convertQuery = (query: string) =>
  Object.entries(query).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: parseInt(value) }),
    {}
  );

export async function count(config: any) {
  try {
    await client.connect();

    const quantidade = await client
      .db(bd_name)
      .collection(bd_collection)
      .countDocuments(config);

    return quantidade;
  } finally {
    await client.close();
  }
}

export async function findAll(config: any) {
  try {
    await client.connect();

    const alunos = await client
      .db(bd_name)
      .collection(bd_collection)
      .find({})
      .project(convertQuery(config.query))
      .skip(config.skip)
      .limit(config.limit)
      .sort({ _id: -1 })
      .toArray();

    return alunos;
  } finally {
    await client.close();
  }
}

export async function findForName(config: any) {
  try {
    await client.connect();

    const alunos = await client
      .db(bd_name)
      .collection(bd_collection)
      .find({ [config.campo]: new RegExp(config.search) })
      .project(convertQuery(config.query))
      .skip(config.skip)
      .limit(config.limit)
      .toArray();

    return alunos;
  } finally {
    await client.close();
  }
}

export async function insert(aluno: any) {
  try {
    await client.connect();

    await client.db(bd_name).collection(bd_collection).insertOne(aluno);
  } finally {
    await client.close();
  }
}

export async function findOne(id: string) {
  try {
    await client.connect();

    const aluno = await client
      .db(bd_name)
      .collection(bd_collection)
      .findOne(new ObjectId(id));

    return aluno;
  } finally {
    await client.close();
  }
}

export async function findUser(email: string) {
  try {
    await client.connect();

    const aluno = await client
      .db(bd_name)
      .collection(bd_collection)
      .findOne({ email });

    return aluno;
  } finally {
    await client.close();
  }
}

export async function update(id: string, aluno: any) {
  try {
    await client.connect();

    await client
      .db(bd_name)
      .collection(bd_collection)
      .updateOne({ _id: new ObjectId(id) }, { $set: aluno });
  } finally {
    await client.close();
  }
}

export async function deleteOne(id: string) {
  try {
    await client.connect();

    await client
      .db(bd_name)
      .collection(bd_collection)
      .deleteOne({ _id: new ObjectId(id) });
  } finally {
    await client.close();
  }
}
