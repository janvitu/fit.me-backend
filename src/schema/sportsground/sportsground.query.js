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
  console.log(sportsground);
  const details = [
    {
      title: "Sporty",
      value: tags.map((tag) => tag.name).join(", "),
    },
    {
      title: "Adresa",
      value: `${address.street} ${address.no}, ${address.city} ${address.zip_code}`,
    },
    {
      title: "Web",
      value: sportsground.web,
    },
    {
      title: "Telefon",
      value: sportsground.phone,
    },
  ];

  return {
    ...sportsground,
    tags,
    address,
    reviews: [...reviewsWithSportsman],
    rating,
    details,
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
