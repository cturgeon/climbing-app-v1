import { connectToDatabase } from "./db";

export async function getAllGyms() {
  const client = connectToDatabase();
  const db = (await client).db();

  const data = await db.collection("gym-data").find().toArray();

  const gymData = [];
  for (const key in data) {
    gymData.push({
      id: key,
      ...data[key],
    });
  }
  return gymData;
}

export async function getGymById(id) {
  let gymData = await getAllGyms();
  return gymData.find((gym) => gym.id === id);
}
