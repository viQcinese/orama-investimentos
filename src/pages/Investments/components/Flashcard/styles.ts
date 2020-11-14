import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-bottom: 24px;
  flex: 1;
  background: #fff;
  height: 520px;
  width: 300px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  border-radius: 10px;
  border: 1px solid #b3b0bc;
`;

export const Graphics = styled.View`
  /* background: #aaa; */
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin: 0;
`;

export const TextContainer = styled.View`
  padding: 8px 16px;
  display: flex;
  height: 260px;
  justify-content: space-between;
`;

export const ExpectedAndMinContainer = styled.View`
  display: flex;
`;

export const ExpectedGainsLabel = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #666;
`;

export const ExpectedGainsText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 40px;
  color: #444;
  margin-bottom: 16px;
`;

export const MinInvestmentLabel = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #666;
`;

export const MinInvestmentText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 32px;
  color: #444;
  margin-bottom: 16px;
`;

export const RiskAndTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Type = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: #666;
`;

interface IRiskTextProps {
  risk: number;
}

export const RiskText = styled.Text<IRiskTextProps>`
  font-family: 'Roboto-Bold';
  font-size: 24px;

  ${(props) => props.risk >= 8 &&
    css`
      color: #fd635e;
    `}

  ${(props) => props.risk < 8 &&
    css`
      color: #ffb15e;
    `}

    ${(props) => props.risk < 4 &&
    css`
      color: #129d9f;
    `}
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  z-index: 1;
  border: 0px solid #eee;
  border-top-width: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
