import ClimbItem from "./climb-item";

export default function ClimbList(props) {
  const climbingRoutes = props.items;

  const climbs = [];
  for (let key in climbingRoutes) {
    climbs.push({
      id: key,
      ...climbingRoutes[key],
    });
  }

  if (!climbs) {
    <p>Loading routes...</p>;
  }

  return (
    <ul>
      {climbs.map((route) => (
        <ClimbItem
          key={route.id}
          id={route.id}
          image={route.image}
          name={route.name}
          grade={route.grade}
          description={route.description}
        />
      ))}
    </ul>
  );
}
