import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid black;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Banner = styled.div`
  width: 160px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  margin: 20px 0px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  width: 30%;
  text-align: center;
`;

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        setOrderId(response.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    if (data) {
      createOrder();
    }
  }, [cart, data, currentUser]);

  return (
    <Container>
      <Logo>MWD</Logo>
      <Banner>Successfull.</Banner>
      <TextContainer>
        <Text>
          {orderId
            ? `Order has been created successfully. Your order number is ${orderId}`
            : `Successfull. Your order is being prepared...`}
        </Text>
        <Button onClick={() => navigate('/')}>Go to Homepage</Button>
      </TextContainer>
    </Container>
  );
};

export default Success;
