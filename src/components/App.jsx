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
import {
  Wrapper,
  Title,
  AdviceWrapper,
  Advice,
  Divider,
  Line,
  Icon,
} from './Components.styled';
export function App() {
  const { advice, handleNextAdviceClick } = useAdviceAPI();

  return (
    <Wrapper className="App">
      <Title>ADVICE # {advice ? advice.id : '...'}</Title>

      {advice && (
        <AdviceWrapper>
          <Advice>{advice.advice}</Advice>
        </AdviceWrapper>
      )}
      <Divider>
        <Line></Line>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <rect width="6" height="16" rx="3" fill="#CEE3E9" />
            <rect x="14" width="6" height="16" rx="3" fill="#CEE3E9" />
          </svg>
        </Icon>
        <Line></Line>
      </Divider>
      <Button onClick={handleNextAdviceClick} />
    </Wrapper>
  );
}
