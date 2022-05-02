export default function GymItem(props) {
  const { id, name, description, image, address } = props;
  return (
    <div>
      <ul key={id}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{image}</p>
      </ul>
    </div>
  );
}
