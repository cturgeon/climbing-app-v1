import GymHeader from "../../components/ui/gym-header";
import { useRouter } from "next/router";
import { getGymData } from "../../gym-data";
import { Fragment } from "react";
import WallList from "../../components/wall-list";

export default function SpecificGym(props) {
  const router = useRouter();
  const gymId = router.query.gymId;
  const gym = getGymData(gymId);
  if (!gym) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <Fragment>
        <GymHeader
          key={gym.id}
          id={gym.id}
          name={gym.name}
          description={gym.description}
          image={gym.image}
          address={gym.address}
        />
        <WallList items={gym.walls} />
      </Fragment>
    </div>
  );
}
