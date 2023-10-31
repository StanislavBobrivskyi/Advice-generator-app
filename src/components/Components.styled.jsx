import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  max-width: 80%;
  height: 462px;
  flex-shrink: 0;
  background: var(--Dark-Grayish-Blue, #313a48);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
`;
export const StartWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-shrink: 0;
  background: var(--Dark-Grayish-Blue, #313a48);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  height: 104px;
`;

export const Title = styled.h1`
  color: var(--Neon-Green, #53ffaa);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 4.086px;
`;

export const AdviceWrapper = styled.div`
  max-width: 80%;
`;

export const Advice = styled.p`
  color: var(--Light-Cyan, #cee3e9);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Quote */
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 80%;
  height: 1px;
  flex-shrink: 0;
  background: var(--Grayish-Blue, #4f5d74);
  margin: 0 16px; /* Встановіть бажаний відступ між лініями */
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const SVG = styled.svg`
  border-radius: 50%;
`;

export const StartBtn = styled.button`
  width: 150px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  & :hover {
    box-shadow: 0 0 10px #53ffaa; /* Додамо тінь при наведенні */
  }
  & :active {
    transform: scale(1.01);
  }
`;

export const ButtonAdvice = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  transform: translate(0%, 355%);
  transition: box-shadow 0.3s, transform 0.3s;
  border-radius: 50%;

  & :hover {
    box-shadow: 0 0 10px #53ffaa; /* Додамо тінь при наведенні */
  }
  & :active {
    transform: scale(1.01);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
