import styled from "styled-components";
import Button from "../shared/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPrint } from "@fortawesome/free-solid-svg-icons";

function RequestTitle() {
  return (
    <StyledSection>
      <StyledDiv>
        <FontAwesomeIcon icon={faFile} />
        <Separator />
        <FontAwesomeIcon icon={faPrint} />
      </StyledDiv>
      <Button variant="tertiary">Reject</Button>
      <Button variant="secondary">Authorise</Button>
    </StyledSection>
  );
}

export default RequestTitle;

const StyledSection = styled.section`
  margin-bottom: 18px;
  display: flex;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const Separator = styled.span`
  height: 60%;
  display: block;
  border: solid 1px #252525;
  width: 0;
  margin: 5px 15px;
`;
