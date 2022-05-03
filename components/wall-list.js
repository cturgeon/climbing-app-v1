import WallItem from "./wall-item";

export default function WallList(props) {
  const walls = props.items;
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
