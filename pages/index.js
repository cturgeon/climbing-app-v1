import { Text } from "@mantine/core";

import { getAllGyms } from "../helpers/api-util";

import GymList from "../components/gym-list";

export default function Home(props) {
  const { gymData } = props;
  return (
    <div>
      <Text size="md" align="center" transform="capitalize">
        You can begin by selecting a gym below
      </Text>
      <GymList items={gymData} />
    </div>
  );
}

// pre-render since there aren't many gyms to show and they don't change very often
export async function getStaticProps() {
  const gymData = await getAllGyms();
  return {
    props: {
      gymData: gymData,
    },
  };
}
