export async function getAllGyms() {
  const response = await fetch(
    "https://nextjs-course-cc72c-default-rtdb.firebaseio.com/gymData.json"
  );
  const data = await response.json();
  const gymData = [];
  for (const key in data) {
    gymData.push({
      id: key,
      ...data[key],
    });
  }
  return gymData;
}