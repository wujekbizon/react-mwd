import styled from 'styled-components';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { addProduct, calculateTotals, increase } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { add, remove } from '../redux/wishListRedux';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  z-index: 2;
  object-fit: contain;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.2);
    color: white;
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const { wishProducts } = useSelector((state) => state.wishList);
  const [isWish, setIsWish] = useState(false);
  const quantity = 1;
  const color = item.color[0];
  const size = item.size[0];

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  const handleClick = () => {
    const sameProduct = products.find((i) => i._id === item._id);
    if (sameProduct && sameProduct._id === item._id) {
      dispatch(increase(item._id));
    } else {
      dispatch(
        addProduct({
          ...item,
          quantity,
          color,
          size,
        })
      );
    }
  };

  const handleWish = () => {
    setIsWish(!isWish);
    if (!isWish) {
      dispatch(
        add({
          ...item,
          quantity,
          color,
          size,
        })
      );
    } else {
      const product = wishProducts.find((i) => i._id === item._id);
      dispatch(remove(product._id));
      setIsWish(false);
    }
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon onClick={handleClick} />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} className="link">
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          {isWish ? (
            <FavoriteBorderOutlinedIcon
              onClick={handleWish}
              style={{ color: 'red' }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={handleWish} />
          )}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
