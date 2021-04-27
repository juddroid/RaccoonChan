import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { CAROUSEL, SIZE_MEDIUM } from 'const';
import Card from 'components/card/Card';
import Arrow from 'components/icons/Arrow';

const TempCarousel = ({ detailSection, ITEM_NUMBER }) => {
  const [position, setPosition] = useState(0);
  const outBoxRef = useRef();
  const [cardsNumber, setCardsNumber] = useState(null);
  const dishList =
    detailSection &&
    detailSection.map((item) => (
      <Card
        key={uuidv4()}
        item={item}
        cardSize={SIZE_MEDIUM}
        cardType={CAROUSEL}
      />
    ));

  const handleClickArrowBtn = ({ currentTarget }) => {
    const direction = currentTarget.getAttribute('direction');
    const outBoxWidth = outBoxRef.current.clientWidth;
    if (direction === 'RIGHT') return moveRight(outBoxWidth);
    if (direction === 'LEFT') return moveLeft(outBoxWidth);
  };

  const moveRight = (outBoxWidth) => {
    if (cardsNumber === 0) return;
    if (cardsNumber < ITEM_NUMBER) {
      return setPosition(position - (outBoxWidth / ITEM_NUMBER) * cardsNumber);
    }
    setCardsNumber((cardCount) => cardCount - ITEM_NUMBER);
    setPosition(position - outBoxWidth);
  };

  const moveLeft = (outBoxWidth) => {
    if (position === 0) return;
    if (cardsNumber > dishList.length) {
      const itemToMove = cardsNumber - dishList.length;
      return setPosition(
        position + (outBoxWidth / ITEM_NUMBER) * (ITEM_NUMBER - itemToMove)
      );
    }
    setCardsNumber((cardCount) => cardCount + ITEM_NUMBER);
    setPosition(position + outBoxWidth);
  };

  useEffect(() => {
    if (cardsNumber !== null) return;
    dishList && setCardsNumber(dishList.length - ITEM_NUMBER);
  }, [dishList, ITEM_NUMBER, cardsNumber]);

  return dishList ? (
    <CarouselStyled>
      <OutBox ref={outBoxRef}>
        <CategoryContents position={position}>{dishList}</CategoryContents>
      </OutBox>
      <Arrow
        size={'L'}
        direction={'RIGHT'}
        onClick={(e) => handleClickArrowBtn(e)}
      />
      <Arrow
        size={'L'}
        direction={'LEFT'}
        onClick={(e) => handleClickArrowBtn(e)}
      />
    </CarouselStyled>
  ) : (
    <div>로딩중입니다!!!!!!!</div>
  );
};

export default TempCarousel;

const CarouselStyled = styled.div`
  position: relative;
  width: 100%;
`;

const OutBox = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
`;

const CategoryContents = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: transform 0.5s ease-in-out;
  transform: ${({ position }) => `translateX(${position}px)`};
`;