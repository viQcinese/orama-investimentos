import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #dcf5fe;
  padding: 64px 24px 40px;
`;

export const PromptContainer = styled.View`
  margin-bottom: 24px;
`;

export const PromptMain = styled.Text`
  font-size: 26px;
  color: #3d5198;
  font-family: 'Roboto-Regular';
  margin-bottom: 12px;
`;

export const PromptSecondary = styled.Text`
  font-size: 22px;
  color: #3d5198;
  font-family: 'Roboto-Light';
  margin-bottom: 8px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button1 = styled.TouchableOpacity`
  background: #ed8f03;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  border-radius: 16px;
  margin-right: 12px;
`;

export const Button2 = styled.TouchableOpacity`
  background: #8e7efb;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #f5f5f5;
`;

export const Carousel = styled.View`
  flex-direction: row;
  box-shadow: 10px 5px 5px black;
  justify-content: center;
`;

export const Flashcard = styled.View`
  padding: 16px;
  background: #8e7ef8;
  border-radius: 16px;
  box-shadow: 10px 5px 5px black;
  width: 275px;
  height: 320px;
  margin: 0 16px;
  justify-content: space-between;
`;

export const FlashcardTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-family: 'Roboto-Bold';
  color: #f5f5f5;
  margin-bottom: 24px;
`;

export const FlashcardText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto-Regular';
  line-height: 26px;
  color: #f5f5f5;
`;

export const FlashcardButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ed8f03;
  border-radius: 16px;
  padding: 16px 12px;
`;

export const FlashcardButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #483f85;
`;

export const CarouselPrevious = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  top: 120px;
`;

export const CarouselNext = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  top: 120px;
`;
