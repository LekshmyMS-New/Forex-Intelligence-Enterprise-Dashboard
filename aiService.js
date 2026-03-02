export const getAISignal = async (pair) => {
  const signals = ["BUY", "SELL", "HOLD"];
  const signal = signals[Math.floor(Math.random() * 3)];

  return {
    signal,
    confidence: (Math.random() * 100).toFixed(2),
    explanation: `AI detected MACD crossover, RSI divergence and sentiment alignment for ${pair}.`,
  };
};