import Sportsground from "./sportsground.models";
import { getAddress } from "../index.models";
import Sportsman from "../sportsman/sportsman.models";

async function getSportsground(_, args, { db }) {
  const { username } = args;
  const sportsground = await Sportsground.getByUsername(username, db);
  const address = await getAddress(sportsground.address_id, db);
  const reviews = await Sportsground.getReviews(sportsground.id, db);

  const reviewsWithSportsman = reviews.map(async (review) => {
    const sportsman = await Sportsman.get(review.sportsman_id, db);
    return {
      ...review,
      sportsman,
    };
  });
  console.log(reviewsWithSportsman);
  const tags = await Sportsground.getTags(sportsground.id, db);
  const rating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;

  return {
    ...sportsground,
    tags,
    address,
    reviews: [...reviewsWithSportsman],
    rating,
  };
}

async function getSportsgrounds(_, args, { db }) {
  const sportsgrounds = await Sportsground.getAll(db);
  const publishedSportsgrounds = sportsgrounds.filter((sportsground) => sportsground.published);
  const sportsgroundsFull = publishedSportsgrounds.map(async (sportsground) => {
    if (sportsground.published) {
      const address = await getAddress(sportsground.address_id, db);
      const reviews = await Sportsground.getReviews(sportsground.id, db);
      const tags = await Sportsground.getTags(sportsground.id, db);

      return {
        ...sportsground,
        tags,
        address,
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
