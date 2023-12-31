import React, { useState, useEffect } from 'react';
import { useAdviceAPI } from './API';
import { Grid } from 'react-loader-spinner';
import { Button } from './Button';
import {
  Wrapper,
  Title,
  AdviceWrapper,
  Advice,
  Divider,
  Line,
  Icon,
  LoaderContainer,
} from './Components.styled';
export function App() {
  const { advice, handleNextAdviceClick } = useAdviceAPI();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (advice) {
      setLoading(false); // Дані завантажені, приховуємо лоадер
    }
  }, [advice]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextAdviceClick();
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleNextAdviceClick]);

  return (
    <>
      {loading ? (
        <LoaderContainer>
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </LoaderContainer>
      ) : (
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
      )}
    </>
  );
}
