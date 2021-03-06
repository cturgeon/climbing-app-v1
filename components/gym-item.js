import GymCard from "./ui/gym-card";

export default function GymItem(props) {
  const { id, name, description, image, address } = props;
  return (
    <div>
      <GymCard
        id={id}
        name={name}
        description={description}
        image={image}
        address={address}
      />
    </div>
  );
}
