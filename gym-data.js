const gymData = [
  {
    id: "gym1",
    name: "Climb Nashville East",
    image: "To be added",
    address: "East Nashville Nashville, TN",
    description: "There is a lot of fun bouldering here!",
    walls: [
      {
        id: "wall1",
        name: "vertical wall",
        image: "to be added wall",
        climbs: [
          {
            id: "route1",
            name: "the pink one",
            grade: "v1",
            image: "to be added route",
          },
          {
            id: "route2",
            name: "the blue one",
            grade: "v2",
            image: "to be added route",
          },
          {
            id: "route3",
            name: "the red one",
            grade: "v6",
            image: "to be added route",
          },
        ],
      },
      {
        id: "wall2",
        name: "Overhang wall",
        image: "to be added wall",
        climbs: [
          {
            id: "route1",
            name: "the blue one",
            grade: "v7",
            image: "to be added route",
          },
          {
            id: "route2",
            name: "the green one",
            grade: "v6",
            image: "to be added route",
          },
          {
            id: "route3",
            name: "the orange one",
            grade: "v7",
            image: "to be added route",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
        ],
      },
    ],
  },
  {
    id: "gym2",
    name: "Climb Nashville West",
    image: "To be added",
    address: "West Nashville Nashville, TN",
    description: "You can do all kinds of climbing here!",
    walls: [],
  },
  {
    id: "gym3",
    name: "The other Nashville Gym",
    image: "To be added",
    address: "Somewhere South Nashville, TN",
    description: "Let's find out what we can do here!",
    walls: [],
  },
];

export function getAllGymData() {
  return gymData;
}

export function getGymData(gymId) {
  return gymData.find((gym) => gym.id === gymId);
}
