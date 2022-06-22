import { useState } from 'react';
import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { sliderItems } from '../data';
// Responsive
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border: 0.5px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.4s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  ${mobile({ flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({ height: '50%' })}
`;

const Image = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ width: '100vw' })}
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
  ${mobile({ padding: '10px ' })}
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 60px;
  ${mobile({ fontSize: '35px', textAlign: 'center' })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: '16px', textAlign: 'center', margin: '25px 0px' })}
`;

const ButtonContainer = styled.div`
  width: 180px;
  height: 60px;
  border: 1px solid black;
  background-color: white;
  position: relative;
  ${mobile({ left: '90px' })}
`;

const Button = styled.button`
  width: 180px;
  height: 60px;
  background-color: black;
  color: white;
  position: absolute;
  right: 10px;
  bottom: 10px;
  backface-visibility: hidden;
  transition: all 0.2s ease;
  font-size: 18px;
  cursor: pointer;
  border: 0.5px solid white;

  &:hover {
    transform: translate(10px, 10px);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else if (direction === 'right') {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <ButtonContainer>
                <Button>{item.buttonTxt}</Button>
              </ButtonContainer>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
