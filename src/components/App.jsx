// import React, { useState, useEffect, useCallback } from 'react';

// export function App() {
//   const [advice, setAdvice] = useState(null);
//   const [slipId, setSlipId] = useState(1);

//   const fetchAdvice = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `https://api.adviceslip.com/advice/${slipId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data); // Виводимо вміст відповіді у консоль
//         setAdvice(data.slip);
//       } else {
//         console.error('Помилка при отриманні поради');
//       }
//     } catch (error) {
//       console.error('Помилка при взаємодії з API', error);
//     }
//   }, [slipId]);

//   useEffect(() => {
//     fetchAdvice();
//   }, [fetchAdvice]);

//   const handleNextAdviceClick = () => {
//     setSlipId(slipId + 1);
//   };

//   return (
//     <div className="App">
//       <h1>Порада № {advice ? advice.id : '...'}</h1>

//       {advice && (
//         <div>
//           <p>{advice.advice}</p>
//         </div>
//       )}
//       <button onClick={handleNextAdviceClick}>Наступна порада</button>
//     </div>
//   );
// }

// App.jsx
import React from 'react';
import { useAdviceAPI } from './API';
import { Button } from './Button';

export function App() {
  const { advice, handleNextAdviceClick } = useAdviceAPI();

  return (
    <div className="App">
      <h1>Порада № {advice ? advice.id : '...'}</h1>

      {advice && (
        <div>
          <p>{advice.advice}</p>
        </div>
      )}
      <Button onClick={handleNextAdviceClick} />
    </div>
  );
}
