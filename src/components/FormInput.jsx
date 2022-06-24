import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, handleChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <input
        className="inputForm"
        {...inputProps}
        onChange={handleChange}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="spanErrorForm">{errorMessage}</span>
    </Container>
  );
};

export default FormInput;
