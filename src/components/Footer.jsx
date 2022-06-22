import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
// Responsive
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  opacity: 0.5;
  ${mobile({ opacity: 1 })}
  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.h1`
  font-size: 45px;
  font-weight: 500;
  font-style: italic;
  ${mobile({ textAlign: 'center' })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 400;
  font-size: 18px;
  ${mobile({ textAlign: 'center' })}
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: 'center' })}
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 20%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #d2dae2;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({ textAlign: 'center' })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
`;

const ListItem = styled.li`
  width: 150px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  opacity: 0.4;
  ${mobile({ opacity: 1 })}

  &:hover {
    opacity: 1;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
`;

const Payment = styled.img`
  width: 60%;
  ${mobile({ width: '80%' })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MWD.store</Logo>
        <Desc>
          Master Wood Design - creating and designing for you since 2005. We are
          a small family business , our motto is : "Wood is our passion ,
          Carpentry shop is our second home!"
        </Desc>
        <SocialContainer>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Pracownia-Stolarska-MWD-751357234913485"
          >
            <SocialIcon color="#3B5998">
              <FacebookIcon />
            </SocialIcon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/home?lang=en"
          >
            <SocialIcon color="#1DA1F2">
              <TwitterIcon />
            </SocialIcon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
          >
            <SocialIcon color="#0E76A8">
              <LinkedInIcon />
            </SocialIcon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/wujekbizon"
          >
            <SocialIcon color="#000000">
              <GitHubIcon />
            </SocialIcon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pinterest.co.uk/pin/513762269996339046/"
          >
            <SocialIcon color="#E60023">
              <PinterestIcon />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link className="link" to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link className="link" to="/cart">
            <ListItem>Cart</ListItem>
          </Link>
          <Link className="link" to="/products/art">
            <ListItem>Wooden Art</ListItem>
          </Link>
          <Link className="link" to="/products/table">
            <ListItem>Dining Furnitures</ListItem>
          </Link>
          <Link className="link" to="/">
            <ListItem>My Account</ListItem>
          </Link>
          <Link className="link" to="/">
            <ListItem>Orders</ListItem>
          </Link>
          <Link className="link" to="/">
            <ListItem>Wishlist</ListItem>
          </Link>
          <Link className="link" to="/">
            <ListItem>Terms</ListItem>
          </Link>
          <Link className="link" to="/">
            <ListItem>About</ListItem>
          </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: '10px' }} />
          ul. Krakowska 1 , Krakow , Poland
        </ContactItem>
        <ContactItem>
          <PhoneOutlinedIcon style={{ marginRight: '10px' }} />
          +48 111111111
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: '10px' }} />
          contact@mwd_store.com
        </ContactItem>
        <Payment src="https://ecoheater.ie/wp-content/uploads/2018/10/cards-.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
