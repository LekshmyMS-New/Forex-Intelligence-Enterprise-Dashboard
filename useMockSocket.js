import { useEffect, useState } from "react";

export const useMockSocket = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockRates = [
        { pair: "EUR/USD", price: (1.05 + Math.random() * 0.01).toFixed(4) },
        { pair: "GBP/USD", price: (1.25 + Math.random() * 0.01).toFixed(4) },
        { pair: "USD/JPY", price: (150 + Math.random() * 1).toFixed(2) },
      ];

      setData(mockRates);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return data;
};