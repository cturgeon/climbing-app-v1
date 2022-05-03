import ClimbCard from "./ui/climb-card";

export default function ClimbItem(props) {
  const { id, grade, name, description, image } = props;
  return (
    <ClimbCard
      id={id}
      grade={grade}
      name={name}
      description={description}
      image={image}
    />
  );
}
