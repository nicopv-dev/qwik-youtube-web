import { faker } from "@faker-js/faker";

export const VIDEOS_DATA = Array.from({ length: 20 }, (_, index) => ({
  id: faker.database.mongodbObjectId(),
  title: faker.lorem.words(3),
  url: faker.internet.url(),
}));
