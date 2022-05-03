import ClimbItem from "./climb-item";

export default function ClimbList(props) {
  const climbingRoutes = props.items;
  if (!climbingRoutes) {
    <p>Loading routes...</p>;
  }

  return (
    <ul>
      {climbingRoutes.map((route) => (
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
