import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
// Responsive
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 200;
  margin-bottom: 20px;
  color: white;
  ${mobile({ fontSize: '55px' })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: white;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '80%' })}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  cursor: pointer;
  background-color: #1e272e;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Stay up to date with our offer and new collections</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon style={{ color: 'white' }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
