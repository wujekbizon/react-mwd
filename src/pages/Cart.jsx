import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
// Responsive
import { mobile, mobileS } from '../responsive';

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

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Hr />
      <Wrapper>
        <Title>SHOPPING CART</Title>
        <Top>
          <TopButton bg="white">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(3)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://img.muji.net/img/item/4550182583199_1260.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SMALL DESK
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 1#989898980
                  </ProductId>
                  <ProductColor color="white" />

                  <ProductSize>
                    <b>Material:</b> Beech
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: 'pointer' }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ cursor: 'pointer' }} />
                </ProductAmountContainer>
                <ProductPrice>$ 239.99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cdn.pixabay.com/photo/2015/11/06/13/28/table-1027888_960_720.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> OAK TABLE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 3#369696960
                  </ProductId>
                  <ProductColor color="rgba(0,0,0,0.1)" />
                  <ProductSize>
                    <b>Material:</b> Oak
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: 'pointer' }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ cursor: 'pointer' }} />
                </ProductAmountContainer>
                <ProductPrice>$ 1499.99</ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://image.architonic.com/img_pro2-4/126/9419/ritz-2-b.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> WALNUT TABLE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 54#36954569650
                  </ProductId>
                  <ProductColor color="rgba(0,0,0,0.6)" />
                  <ProductSize>
                    <b>Material:</b> Walnut
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ cursor: 'pointer' }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ cursor: 'pointer' }} />
                </ProductAmountContainer>
                <ProductPrice>$ 11499.99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ 1740</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 9.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>$ -9.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$ 12849.99</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
