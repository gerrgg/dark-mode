import styled from "styled-components";
import { Wrap } from "../../constants";

const Root = styled.header`
  padding: 2rem 0;
  width: 100%;
  background: ${(props) => props.theme.secondary};
`;

function Header() {
  return (
    <Root>
      <Wrap>Header</Wrap>
    </Root>
  );
}
export default Header;
