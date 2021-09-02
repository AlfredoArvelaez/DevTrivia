// https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple

export const getQuestions = async ({ category, difficulty }) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
  const data = response.json()

  return data
}