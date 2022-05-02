import { Fragment } from "react";
import GymItem from "./gym-item";
import Button from "./ui/button";

export default function GymList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((gym) => (
        <Fragment>
          <GymItem
            key={gym.id}
            id={gym.id}
            name={gym.name}
            description={gym.description}
            image={gym.image}
            address={gym.address}
          />
          <Button link={`/${gym.id}`}>Explore Gym</Button>
        </Fragment>
      ))}
    </ul>
  );
}
