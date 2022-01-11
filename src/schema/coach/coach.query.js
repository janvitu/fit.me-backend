import Coach from "./coach.models";
import Sportsman from "../sportsman/sportsman.models";

async function getCoach(_, args, { db }) {
  const { username } = args;
  const coach = await Coach.getByUsername(username, db);
  const reviews = await Coach.getReviews(coach.id, db);

  const reviewsWithSportsman = reviews.map(async (review) => {
    const sportsman = await Sportsman.get(review.sportsman_id, db);
    return {
      ...review,
      sportsman,
    };
  });
  const rating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;

  return {
    ...coach,
    reviews: [...reviewsWithSportsman],
    rating,
  };
}

async function getCoaches(_, args, { db }) {
  const coaches = await Coach.getAll(db);

  const coachesFull = coaches.map(async (coach) => {
    if (coach.published) {
      const reviews = await Coach.getReviews(coach.id, db);
      console.log(reviews);
      const rating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length || 0;

      return {
        ...coach,
        rating,
      };
    }
  });

  return coachesFull;
}

export default {
  getCoach,
  getCoaches,
};
