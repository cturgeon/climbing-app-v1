import { getAllGymData } from "../gym-data";
import GymList from "../components/gym-list";

export default function Home() {
  const gymData = getAllGymData();

  return (
    <div>
      <h1>Welcome to the climbing app</h1>
      <p>You can begin by selecting a gym below</p>
      <GymList items={gymData} />
    </div>
  );
}
