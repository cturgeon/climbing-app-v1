import WallItem from "./wall-item";

export default function WallList(props) {
  const wallsData = props.items;
  const walls = [];
  // not quite sure I needed to collect the data here. might be an api thing. TODO look up later
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
      {walls.map((wall) => (
        <WallItem
          key={wall.id}
          id={wall.id}
          image={wall.image}
          name={wall.name}
        />
      ))}
    </div>
  );
}
