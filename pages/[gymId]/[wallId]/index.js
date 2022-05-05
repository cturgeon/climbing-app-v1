import { getAllGyms, getGymById } from "../../../helpers/api-util";
import ClimbList from "../../../components/climb-list";
import { Title } from "@mantine/core";

// we don't care to pre-render these walls, the data is not that important
// so lets use SWR instead.
export default function SpecificWall(props) {
  const { wall } = props;

  if (wall) {
    return (
      <div>
        <Title order={1} align="center">
          {wall.name}
        </Title>
        <ClimbList items={wall.climbs} />
      </div>
    );
  }

  return <div>wall not found</div>;
}

export async function getServerSideProps(context) {
  const gym = await getGymById(context.params.gymId);
  const wallsData = gym.walls;
  const walls = [];
  for (let key in wallsData) {
    walls.push({
      id: key,
      ...wallsData[key],
    });
  }
  const wallId = context.params.wallId;
  const wall = walls.find((wall) => wall.id === wallId);
  if (!wall) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      wall: wall,
    },
  };
}
