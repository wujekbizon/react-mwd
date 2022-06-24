import styled from 'styled-components';
import { cards } from '../data';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url('https://images.unsplash.com/photo-1634141737329-6abd9cfb427a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ flexDirection: 'column', height: '100%' })}
`;

const CardContainer = styled.div`
  width: 400px;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 3px black;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin: 0px 30px;
  transition: all 1s ease;

  ${mobile({ width: '300px', margin: '20px 30px', padding: '10px 5px' })}

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 25px;
  ${mobile({ fontSize: '18px' })}
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  ${mobile({ margin: '20px 0px' })}
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ width: '50px', height: '50px', borderRadius: '50%' })}
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Desc = styled.span`
  font-size: 18px;
  ${mobile({ fontSize: '14px' })}
`;

const BottomContainer = styled.div`
  width: 160px;
  height: 50px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
  left: 120px;

  ${mobile({ margin: '30px 0px', left: '75px' })}
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  background-color: black;
  color: white;
  position: absolute;
  right: 10px;
  bottom: 10px;
  backface-visibility: hidden;
  transition: all 0.4s ease;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transform: translate(10px, 10px);
  }
`;

const Welcome = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          {cards.map((card) => (
            <CardContainer key={card.id}>
              <TopContainer>
                <Title>{card.title}</Title>
                <ImgContainer>
                  <Image src={card.img} />
                </ImgContainer>
              </TopContainer>
              <CenterContainer>
                <Desc>{card.desc}</Desc>
              </CenterContainer>
              <BottomContainer>
                <Link to={card.link}>
                  <Button>{card.btnText}</Button>
                </Link>
              </BottomContainer>
            </CardContainer>
          ))}
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Welcome;
