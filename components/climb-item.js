export default function ClimbItem(props) {
  const { id, name, image, grade } = props;
  return (
    <ul>
      <div>{image}</div>
      <div>{name}</div>
      <div>{grade}</div>
    </ul>
  );
}
