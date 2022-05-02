import Button from "../components/ui/button";
import { useRouter } from "next/router";

// would it be better to query to get the wallId or to have gym:{wall:{gymId}} -- the gymId nested inside the wall
// should a wall always be tied to a gym?
export default function WallItem(props) {
  const { id, image, name } = props;
  const router = useRouter();
  const gym = router.query.gymId;
  return (
    <div>
      <div>
        <p>{image}</p>
        <h1>{name}</h1>
        <Button link={`/${gym}/${id}`}>See Climbs</Button>
      </div>
    </div>
  );
}
