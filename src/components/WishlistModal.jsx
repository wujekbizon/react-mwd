import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeWishModal } from '../redux/modalRedux';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { remove } from '../redux/wishListRedux';
import { addProduct } from '../redux/cartRedux';

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
  background: black;
  width: 80vw;
  max-width: 600px;
  border-radius: 10px;
  padding: 10px 15px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-weight: 300;
`;

const ListItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 20px;
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  color: white;
  margin-right: 20px;
  cursor: pointer;
`;

const WishlistModal = () => {
  const dispatch = useDispatch();
  const { wishProducts } = useSelector((state) => state.wishList);

  const handleClose = () => {
    dispatch(closeWishModal());
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Container>
      <Wrapper>
        <Title>WISHLIST</Title>

        <ListItems>
          {wishProducts.map((item) => (
            <ItemsContainer key={item._id}>
              <ItemContainer>
                <Img src={item.img} />
                <Item>{item.title}</Item>
              </ItemContainer>
              <IconContainer>
                <Icon>
                  <AddShoppingCartOutlinedIcon
                    onClick={() => {
                      dispatch(
                        addProduct({
                          ...item,
                          quantity: 1,
                          color: item.color,
                          size: item.size,
                        })
                      );
                      dispatch(remove(item._id));
                    }}
                  />
                </Icon>
                <Icon>
                  <RemoveCircleOutlinedIcon
                    onClick={() => handleRemove(item._id)}
                  />
                </Icon>
              </IconContainer>
            </ItemsContainer>
          ))}
        </ListItems>
        <Icon>
          <ExitToAppOutlinedIcon onClick={handleClose} />
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default WishlistModal;
