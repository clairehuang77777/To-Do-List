import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-bottom: 2px solid black;
`;
const StyledLabel = styled.label`
  font-size: 14;
  color: '#696974';
  text-align: start;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
`;

const AuthInput = ({label, placeholder, type, value, onChange}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type || "text"} //如果沒有傳入任何props就顯示'text'
        placeholder={placeholder || ""} //如果沒有傳入任何props就顯示空字串
        value={value || ""} //如果沒有傳入任何props就顯示''
        onChange={(event) => onChange(event)}
      />
    </StyledContainer>
  );
};

export default AuthInput;
