import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Badge } from '@mui/material';
// Responsive
import { mobile, mobileS } from '../responsive';

const Container = styled.div`
  height: 80px;
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
  ${mobile({ marginLeft: '5px' })}
  ${mobileS({ display: 'none' })}
`;

const Input = styled.input`
  border: none;
  font-style: italic;
  ${mobile({ width: '40px' })}
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
  ${mobile({ fontSize: '22px' })}
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

const Navbar = () => {
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
          <Logo>MWD.store</Logo>
        </Center>
        <Right>
          <NavItem>SIGN UP</NavItem>
          <NavItem>SIGN IN</NavItem>
          <NavItem>
            <Badge badgeContent={4} color="success" />
            <AddShoppingCartSharpIcon />
          </NavItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
