import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// Responsive
import { mobile, mobileS } from '../responsive';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import {
  calculateTotals,
  decrease,
  deleteProduct,
  increase,
} from '../redux/cartRedux';
import { openModal } from '../redux/modalRedux';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Hr = styled.hr`
  opacity: 0.2;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  width: 180px;
  height: 45px;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ padding: '5px', width: '120px' })}
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  ${mobile({ width: '200px' })}
  ${mobileS({ width: '150px', height: '150px' })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: '5px', fontSize: '14px' })}
`;

const ProductName = styled.span`
  letter-spacing: 1px;
`;

const ProductId = styled.span`
  letter-spacing: 1px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  letter-spacing: 1px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 15px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span`
  letter-spacing: 1px;
`;

const SummaryItemPrice = styled.span`
  letter-spacing: 1px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const CartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ClearCartButton = styled.button`
  padding: 7px 10px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart.products);
  const { isOpen } = useSelector((state) => state.modal);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success', {
          state: { stripeData: response.data, products: cart },
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken && cart.total >= 1) {
      makeRequest();
    }
  }, [stripeToken, cart, navigate]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleOpen = () => {
    dispatch(openModal());
  };

  return (
    <Container>
      {isOpen && <Modal />}
      <Navbar />
      <Hr />
      <Wrapper>
        <Title>SHOPPING CART</Title>
        <Top>
          <Link to="/">
            <TopButton bg="white">CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Cart({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />

                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(increase(product._id))}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        if (product.quantity === 1) {
                          dispatch(deleteProduct(product._id));
                          return;
                        }
                        dispatch(decrease(product._id));
                      }}
                    />
                    <DeleteOutlineOutlinedIcon
                      style={{
                        marginLeft: '30px',
                        cursor: 'pointer',
                        color: 'red',
                      }}
                      onClick={() => handleDelete(product._id)}
                    />
                  </ProductAmountContainer>

                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {cart.products.length === 0 ? (
              ''
            ) : (
              <>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping:</SummaryItemText>
                  <SummaryItemPrice>$ 9.99</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount:</SummaryItemText>
                  <SummaryItemPrice>$ -9.99</SummaryItemPrice>
                </SummaryItem>
              </>
            )}
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {stripeToken ? (
              <span>Processing. Please wait...</span>
            ) : (
              <StripeCheckout
                name="MWD.store"
                billingAddress
                shippingAddress
                description={`Your total is $ ${cart.total}`}
                amount={23000}
                token={onToken}
                stripeKey={KEY}
              >
                <Button style={{ cursor: 'pointer' }}>Pay Now</Button>
              </StripeCheckout>
            )}
          </Summary>
        </Bottom>
        <CartButtonContainer>
          <ClearCartButton onClick={handleOpen}>CLEAR CART</ClearCartButton>
        </CartButtonContainer>
        <Hr />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
