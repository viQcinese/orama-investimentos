import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #2d187e;
  padding: 56px 0px 0px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Carousel = styled.View`
  flex-direction: row;
  box-shadow: 10px 5px 5px black;
  justify-content: center;
  flex: 1;
`;

export const Flashcard = styled.View`
  padding: 24px 16px;
  background: #f5f5f5;
  border-radius: 16px;
  width: 320px;
  height: 274px;
  margin: 0 16px;
  justify-content: space-between;
`;

export const FlashcardTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto-Medium';
  color: #444;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FlashcardText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto-Regular';
  line-height: 26px;
  color: #666;
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
  color: #f5f5f5;
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
