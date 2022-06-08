import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 45px;
  font-weight: 500;
  font-style: italic;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 400;
  font-size: 18px;
`;

const SocialContainer = styled.div`
  display: flex;
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
  background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const Payment = styled.img`
  width: 60%;
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
          <SocialIcon color="#3B5998">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#0E76A8">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color="#000000">
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Office Furnitures</ListItem>
          <ListItem>Dining Furnitures</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>About</ListItem>
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
