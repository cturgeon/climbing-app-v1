import WallItem from "./wall-item";
import { Grid, Space } from "@mantine/core";

export default function WallList(props) {
  const wallsData = props.items;
  const walls = [];
  for (let key in wallsData) {
    walls.push({
      id: key,
      ...wallsData[key],
    });
  }
  if (!walls) {
    return <p>loading... </p>;
  }
  return (
    <div>
      <Grid justify="center" spacing="md">
        {walls.map((wall) => (
          <WallItem
            key={wall.id}
            id={wall.id}
            image={wall.image}
            name={wall.name}
          />
        ))}
      </Grid>
    </div>
  );
}
