import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.bodyColor};
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 8px;
  font: 400 20px/1 "arial";
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Button;
