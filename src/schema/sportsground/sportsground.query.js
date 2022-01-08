import Sportsground from "./sportsground.models";
import { getAddress } from "../index.models";

async function getSportsground(_, args, { db }) {
  const { username } = args;
  const sportsground = await Sportsground.getByUsername(username, db);

  return sportsground;
}

async function getSportsgrounds(_, args, { db }) {
  const sportsgrounds = await Sportsground.getAll(db);
  const publishedSportsgrounds = sportsgrounds.filter((sportsground) => sportsground.published);
  const sportsgroundsFull = publishedSportsgrounds.map(async (sportsground) => {
    if (sportsground.published) {
      const address = await getAddress(sportsground.address_id, db);
      const reviews = Sportsground.getReviews(sportsground.id, db);
      const tags = Sportsground.getTags(sportsground.id, db);

      return {
        ...sportsground,
        tags: tags,
        address: address,
        rating: reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length || null,
      };
    }
  });
  return sportsgroundsFull;
}

export default {
  getSportsground,
  getSportsgrounds,
};
