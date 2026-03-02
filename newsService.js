export const getNewsSentiment = async () => {
  const sentiments = ["Bullish", "Bearish", "Neutral"];
  return sentiments[Math.floor(Math.random() * 3)];
};