import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { addProduct, calculateTotals, increase } from '../redux/cartRedux';
// Responsive
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 45px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1px;
  ${mobile({ fontSize: '16px' })}
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  position: relative;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 500;
  backface-visibility: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-10px, 10px);
    ${mobile({ transform: 'translateY(-10px)' })}
  }
`;

const Span = styled.div`
  color: red;
  font-size: 16px;
  margin-left: 100px;
`;

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [isValid, setValid] = useState(false);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) {
      getProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (color && size !== null) {
      const sameProduct = products.find((item) => item._id === product._id);

      if (sameProduct && sameProduct._id === product._id) {
        dispatch(increase(product._id));
        setValid(false);
      } else {
        dispatch(
          addProduct({
            ...product,
            quantity,
            color,
            size,
          })
        );
        setValid(false);
      }
    } else {
      setValid(true);
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setQuantity(quantity <= 1 ? quantity : quantity - 1)
                }
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => setQuantity(quantity + 1)}
              />
            </AmountContainer>
            <ButtonContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </ButtonContainer>
          </AddContainer>
          {isValid && <Span>You must choose color and size</Span>}
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
