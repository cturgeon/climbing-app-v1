import GymItem from "../../components/gym-item";
import { useRouter } from "next/router";
import { getGymData } from "../../gym-data";

export default function SpecificGym(props) {
  const router = useRouter();
  const gymId = router.query.gymId;
  const gym = getGymData(gymId);
  return (
    <div>
      <GymItem
        key={gym.id}
        id={gym.id}
        name={gym.name}
        description={gym.description}
        image={gym.image}
        address={gym.address}
      />
    </div>
  );
}
