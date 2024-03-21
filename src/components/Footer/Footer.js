import styled from "styled-components";
import { Wrap } from "../../constants";

const Root = styled.footer`
  padding: 2rem 0;
  width: 100%;
  background: ${(props) => props.theme.secondary};
`;

function Footer() {
  return (
    <Root>
      <Wrap>Footer</Wrap>
    </Root>
  );
}
export default Footer;
