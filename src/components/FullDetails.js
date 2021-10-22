import styled from "styled-components";
import { MediumText } from "../shared/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FullDetails() {
  return (
    <StyledSection>
      <StyledText variant="medium">Full Details</StyledText>
      <FontAwesomeIcon icon={faChevronDown} />
    </StyledSection>
  );
}

export default FullDetails;

const StyledSection = styled.section`
  padding: 18px;
  text-align: right;
`;

const StyledText = styled(MediumText)`
  margin-right: 5px;
`;
