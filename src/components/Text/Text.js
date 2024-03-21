import styled from "styled-components";
import { fontSizes, fontFamiles } from "../../constants";

const Root = styled.p`
  color: ${(props) => props.theme.bodyColor};
  font-size: ${(props) => fontSizes[props.level]};
  margin-top: 0.5em;
  font-family: ${(props) => fontFamiles[props.family]};
`;

Root.defaultProps = {
  family: 0,
  level: 2,
};

export default function Text({ level, children }) {
  return <Root level={level}>{children}</Root>;
}
