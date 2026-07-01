import { MongoClient, type Db, type MongoClientOptions } from "mongodb"

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const clientOptions: MongoClientOptions = {
  // Avoids TLS handshake failures on some serverless hosts (e.g. Vercel).
  autoSelectFamily: false,
  serverSelectionTimeoutMS: 10000,
}

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable")
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, clientOptions)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  }

  const client = new MongoClient(uri, clientOptions)
  return client.connect()
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise()
  const dbName = process.env.MONGODB_DB_NAME || "prime_funding"
  return client.db(dbName)
}
