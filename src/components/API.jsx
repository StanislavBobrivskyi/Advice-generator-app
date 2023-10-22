// api.jsx
import React, { useState, useEffect, useCallback } from 'react';

export function useAdviceAPI() {
  const [advice, setAdvice] = useState(null);
  const [slipId, setSlipId] = useState(1);

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice/${slipId}`
      );
      if (response.ok) {
        const data = await response.json();
        setAdvice(data.slip);
      } else {
        console.error('Помилка при отриманні поради');
      }
    } catch (error) {
      console.error('Помилка при взаємодії з API', error);
    }
  }, [slipId]);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  const handleNextAdviceClick = () => {
    setSlipId(slipId + 1);
  };

  return {
    advice,
    handleNextAdviceClick,
  };
}
