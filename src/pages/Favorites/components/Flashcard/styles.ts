import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isVisible: boolean }>`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 10px;
  margin: 4px;
  flex-grow: 1;
  flex-basis: 0;
  border: 1px solid #eee;

  ${(props) =>
    !props.isVisible &&
    css`
      background: transparent;
      border: none;
    `}
`;

export const GraphicContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ExpectedGainsText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 24px;
  color: #444;
`;

export const MinInvestmentText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20px;
  color: #444;
`;

export const InvestmentType = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #666;
`;

interface IRiskTextProps {
  risk: number;
}

export const RiskText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;

  ${props =>
    props.risk >= 8
    && css`
      color: #fd635e;
    `}

  ${props =>
    props.risk < 8
    && css`
      color: #ffb15e;
    `}

    ${props =>
    props.risk < 4
    && css`
      color: #129d9f;
    `}
`;
