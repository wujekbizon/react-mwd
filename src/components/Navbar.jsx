import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Responsive
import { mobile, mobileS } from '../responsive';
import { logout } from '../redux/apiCalls';
import { clearCart } from '../redux/cartRedux';

const Container = styled.div`
  height: 80px;
  border: 1px solid black;
  ${mobile({ height: '60px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: 'none' })}
  ${mobileS({ display: 'none' })}
`;

const Input = styled.input`
  border: none;
  font-style: italic;
  ${mobile({ width: '40px' })}

  &.active,&:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-style: italic;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 1px;
  ${mobile({ fontSize: '30px', marginRight: '10px' })}
  ${mobileS({ marginRight: '20px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center', flex: 2 })}
  ${mobileS({ marginRight: '20px' })}
`;

const NavItem = styled.div`
  margin-left: 30px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '15px' })}
`;

const NavLogoutButton = styled.button`
  font-size: 12px;
  color: white;
  background-color: black;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '15px' })}

  &:hover {
    color: red;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
    dispatch(clearCart());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchSharpIcon style={{ color: 'black', fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link className="link" to="/">
            <Logo>MWD.store</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <NavLogoutButton onClick={handleLogout}>LOGOUT</NavLogoutButton>
          ) : (
            <>
              <Link className="link" to="/register">
                <NavItem>REGISTER</NavItem>
              </Link>
              <Link className="link" to="/login">
                <NavItem>SIGN IN</NavItem>
              </Link>
            </>
          )}

          <Link className="link" to="/cart">
            <NavItem>
              <Badge badgeContent={quantity} color="success" />
              <AddShoppingCartSharpIcon style={{ marginRight: '20px' }} />
            </NavItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
