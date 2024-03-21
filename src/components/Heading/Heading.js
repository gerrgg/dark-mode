import styled from "styled-components";
import { fontSizes, fontFamiles } from "../../constants";

const Root = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => fontSizes[props.level]};
  font-family: ${(props) => fontFamiles[props.family]};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

Root.defaultProps = {
  family: 1,
  margin: "2rem 0 0 0",
  padding: "0 0 0 0",
};

export default function Heading({ level, family, children }) {
  return (
    <Root role="heading" ara-level={level} level={level} family={family}>
      {children}
    </Root>
  );
}
