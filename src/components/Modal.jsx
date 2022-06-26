import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearCart } from '../redux/cartRedux';
import { closeModal } from '../redux/modalRedux';

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: white;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 40px 15px;
  text-align: center;
`;

const Title = styled.h4`
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ButtonConfirm = styled.button`
  padding: 5px 25px;
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: all 0.4s ease;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const ButtonCancel = styled.button`
  padding: 5px 25px;
  background-color: white;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Modal = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <Container>
      <Wrapper>
        <Title>Remove All items From Your Shopping Cart?</Title>
        <ButtonContainer>
          <ButtonConfirm onClick={handleClearCart}>CONFIRM</ButtonConfirm>
          <ButtonCancel onClick={() => dispatch(closeModal())}>
            CANCEL
          </ButtonCancel>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Modal;
