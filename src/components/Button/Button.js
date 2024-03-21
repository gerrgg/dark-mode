import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.bodyColor};
  background: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  font: 400 20px/1 "Stylish", serif;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.primary};
    position: absolute;
    left: ${(props) => (props.align === "left" ? "-0.35em" : "0.35em")};
    top: ${(props) => (props.align === "left" ? "-0.35em" : "0.35em")};
    z-index: 0;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    &::after {
      left: 0em;
      top: 0em;
    }
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${(props) => props.theme.secondary};
  border: 2px solid ${(props) => props.theme.secondary};

  &::after {
    border: 2px solid ${(props) => props.theme.secondary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

ButtonGroup.defaultProps = {
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row",
  margin: "2rem 0",
  padding: "0",
  gap: "1.5em",
};
