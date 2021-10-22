import styled from "styled-components";
import Text, { RegularLightText } from "../shared/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function RequestDetails() {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledText variant="regular-light">Request reference</StyledText>
        <Text variant="medium">SET29383ABCH</Text>
      </StyledDiv>
      <StyledDiv>
        <StyledText variant="regular-light">Category</StyledText>
        <Text variant="medium">Payment</Text>
      </StyledDiv>
      <StyledDiv>
        <StyledText variant="regular-light">Request status</StyledText>
        <Text variant="medium">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="warning-icon"
          />
          Pending authorization
        </Text>
      </StyledDiv>
    </StyledSection>
  );
}

export default RequestDetails;

const StyledSection = styled.section`
  display: flex;
`;

const StyledText = styled(RegularLightText)`
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-right: solid 2px #252525;
  margin-right: 20px;
  padding-right: 20px;
  &:last-child {
    border: none;
  }
  & .warning-icon {
    color: #f1b20b;
    margin-right: 4px;
    background-color: #000;
    border-radius: 50%;
  }
`;
