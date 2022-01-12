import Coach from "./coach.models";
import Sportsman from "../sportsman/sportsman.models";
import { getPhoto } from "../index.models";

async function getCoach(_, args, { db }) {
  const { username } = args;
  const coach = await Coach.getByUsername(username, db);
  const reviews = await Coach.getReviews(coach.id, db);
  const profile_photo = await getPhoto(coach.profile_photo_id, db);

  const reviewsWithSportsman = reviews.map(async (review) => {
    const sportsman = await Sportsman.get(review.sportsman_id, db);
    return {
      ...review,
      sportsman,
    };
  });
  const rating =
    Math.round((reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length) * 10) /
      10 || 0;

  return {
    ...coach,
    reviews: [...reviewsWithSportsman],
    rating,
    profile_photo,
  };
}

async function getCoaches(_, args, { db }) {
  const coaches = await Coach.getAll(db);

  const coachesFull = coaches.map(async (coach) => {
    if (coach.published) {
      const reviews = await Coach.getReviews(coach.id, db);
      const rating =
        Math.round((reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length) * 10) /
          10 || 0;

      const profile_photo = await getPhoto(coach.profile_photo_id, db);

      return {
        ...coach,
        rating,
        profile_photo,
      };
    }
  });

  return coachesFull;
}

export default {
  getCoach,
  getCoaches,
};
