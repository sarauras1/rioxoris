import { Container } from "react-bootstrap";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const StyledContainer = styled(Container)`
  background-color: #444;
  color: white;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledMediaBackground = styled.div`
  width: 50px;
  height: 50px;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  &:hover {
    background-color: #c1a35f;
  }
`;
export default function RioFooter() {
  return (
    <>
      <StyledContainer fluid>
        <StyledMediaBackground>
          <Link to="https://www.facebook.com/agriturismorioxoris/">
            <Icon.Facebook color="white" size="20" />
          </Link>
        </StyledMediaBackground>
        <StyledMediaBackground>
          <Link to="https://www.instagram.com/agriturismo_rioxioris/">
            <Icon.Instagram color="white" size="20" />
          </Link>
        </StyledMediaBackground>
      </StyledContainer>
      <Container className="admin-container" fluid>
        <Link className="admin-link" to="/login">
          Admin
        </Link>
      </Container>
    </>
  );
}
