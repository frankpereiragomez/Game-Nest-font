import { VideogamesDataStructure } from "../types";

export const videogamesCollectionMock: VideogamesDataStructure[] = [
  {
    id: "6474c186f583d0a4152044af",
    description: "An epic adventure awaits in the mystical kingdom of Hyrule.",
    developers: "Nintendo",
    genre: "Adventure",
    name: "The Legend of Zelda: Tears of the Kingdom",
    price: 59.99,
    image:
      "https://static.xtralife.com/conversions/QJC9-8D4Q413478-fullhd_w1920_h1080_q75-switchthelegendofxelda2-1663083706.webp",
    user: "646fa078f583d0a4152044a8",
  },
  {
    id: "6474c186f583d0a4152044wf",
    description:
      "Join Samus Aran in her mission to eliminate the Metroid threat.",
    developers: "Nintendo",
    genre: "Action, Adventure",
    name: "Metroid Prime Remastered",
    price: 49.99,
    image:
      "https://static.xtralife.com/conversions/98CX-MQ73451000-fullhd_w1920_h1080_q75-metroidprimeremastered-1684480350.webp",
    user: "646fa078f583d0a4152044a8",
  },
  {
    id: "6474c186f583a0a4152044af",
    description:
      "Help Luigi rescue his friends from the haunted Last Resort hotel.",
    developers: "Next Level Games",
    genre: "Action, Adventure",
    name: "Luigi Mansion 3",
    price: 59.99,
    image:
      "https://static.xtralife.com/conversions/KXC7-NNY6234623-fullhd_w1920_h1080_q75-luigismansion3sw-1560331702.webp",
    user: "646fa078f583d0a4152044a8",
  },
];

export const videogameWithoutIdAndUser = {
  description: "An epic adventure awaits in the mystical kingdom of Hyrule.",
  developers: "Nintendo",
  genre: "Adventure",
  name: "The Legend of Zelda: Tears of the Kingdom",
  price: "59.99",
  image:
    "https://static.xtralife.com/conversions/QJC9-8D4Q413478-fullhd_w1920_h1080_q75-switchthelegendofxelda2-1663083706.webp",
};
