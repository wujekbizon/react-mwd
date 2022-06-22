import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
// Responsive
import { mobile } from '../responsive';
import { useState } from 'react';
import { useRef } from 'react';

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
  margin-bottom: 20px;
  justify-content: space-between;
  ${mobile({ width: '80%' })}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;

  &.active,
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 2;
  border: none;
  cursor: pointer;
  background-color: #1e272e;

  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const Span = styled.span`
  color: white;
  font-weight: 200;
  opacity: 0;
  animation: zoomOut 5s 2s backwards;
`;

const ErrorContainer = styled.div`
  margin: 20px 0px;
`;

const SpanError = styled.span`
  color: red;
  font-weight: 200;
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(true);
  const [newsletter, setNewsletter] = useState(null);
  const ref = useRef();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(false);
    }

    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    if (!email) {
      setError('Please enter email');
    }
    if (!error) {
      e.preventDefault();
      setNewsletter(true);
      setTimeout(() => {
        setNewsletter(false);
        setError(true);
        ref.current.value = '';
      }, 3000);
    }
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Stay up to date with our offer and new collections</Desc>
      <InputContainer>
        <Input
          type="email"
          placeholder="Your email"
          ref={ref}
          onChange={handleChange}
        />

        <Button onClick={handleClick} disabled={newsletter}>
          <SendIcon style={{ color: 'white' }} />
        </Button>
      </InputContainer>
      {newsletter && <Span>Thank You for registering to our newsletter</Span>}
      <ErrorContainer>
        {error ? <SpanError>{error}</SpanError> : ''}
      </ErrorContainer>
    </Container>
  );
};

export default Newsletter;
