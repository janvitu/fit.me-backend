import Coach from "./coach.models";
import Sportsman from "../sportsman/sportsman.models";
import { getPhoto } from "../index.models";
import { roundNumber } from "../../utils/roundNumber";
import { averageRating } from "../../utils/getAvarageRating";

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
  const ratingsStars = reviews.map((review) => review.stars);
  const rating = roundNumber(averageRating(ratingsStars), 1) || 0;
  const details = [
    {
      title: "Specializace",
      value: coach.specialization,
    },
    {
      title: "Telefon",
      value: coach.phone,
    },
  ];

  return {
    ...coach,
    reviews: [...reviewsWithSportsman],
    rating,
    details,
  };
}

async function getCoaches(_, args, { db }) {
  const coaches = await Coach.getAll(db);

  const coachesFull = coaches.map(async (coach) => {
    if (coach.published) {
      const reviews = await Coach.getReviews(coach.id, db);
      const ratingsStars = reviews.map((review) => review.stars);
      const rating = roundNumber(averageRating(ratingsStars), 1) || 0;
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
