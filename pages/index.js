import { getAllGymData } from "../gym-data";
import GymList from "../components/gym-list";
import { Text } from "@mantine/core";

export default function Home() {
  const gymData = getAllGymData();

  return (
    <div>
      <Text size="md" align="center" transform="capitalize">
        You can begin by selecting a gym below
      </Text>
      <GymList items={gymData} />
    </div>
  );
}
