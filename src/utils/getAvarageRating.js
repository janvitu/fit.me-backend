export function averageRating(ratings) {
  const sum = ratings.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / ratings.length;
  return avg;
}
