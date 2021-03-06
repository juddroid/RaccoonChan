import styled from 'styled-components';

const OrderButton = ({ handleClickOrderButton, orderButtonState }) => {
  const buttonName = orderButtonState ? '임시품절' : '주문하기';
  return (
    <OrderButtonBox
      onClick={handleClickOrderButton}
      disabled={orderButtonState}
    >
      {buttonName}
    </OrderButtonBox>
  );
};

export default OrderButton;

const OrderButtonBox = styled.button`
  width: 440px;
  height: 58px;
  background: #82d32d;
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  margin: 16px 0;
  cursor: pointer;
  border: none;

  &:hover {
    background: #9ad857;
    transition: 0.4s;
  }
  &:active {
    background: #82d32d;
    transition: 0.4s;
  }
  &:disabled {
    background: #cdcdcd;
    cursor: default;
  }
`;
