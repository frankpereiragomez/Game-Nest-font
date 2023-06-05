import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { VideogamesDataStructure } from "../../../types";

const videogamesFactory = Factory.define<VideogamesDataStructure>(() => ({
  name: faker.person.firstName(),
  id: faker.database.mongodbObjectId().toString(),
  price: faker.number.float(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  developers: faker.company.name(),
  genre: faker.commerce.productDescription(),
}));

export const getVideogamesDataMock = (
  number: number,
  data?: VideogamesDataStructure
) => {
  return videogamesFactory.buildList(number, data);
};
