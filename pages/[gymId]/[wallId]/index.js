import Button from "../../../components/ui/button";
import { useRouter } from "next/router";
import { getGymData } from "../../../gym-data";
import ClimbList from "../../../components/climb-list";
import { Title } from "@mantine/core";

export default function SpecificWall() {
  const router = useRouter();
  const wallId = router.query.wallId;
  const gymId = router.query.gymId;

  const gym = getGymData(gymId);

  if (gym) {
    const wall = gym.walls.find((gymWall) => gymWall.id === wallId);
    return (
      <div>
        {/* TODO need to change to img later */}
        <p>{wall.image}</p>
        <Title order={1} align="center">
          {wall.name}
        </Title>
        <ClimbList items={wall.climbs} />
      </div>
    );
  }

  return <div>wall not found</div>;
}
