import styled from "styled-components";
import Text, { RegularLightText } from "../shared/Text";

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
        <Text variant="medium">Pending authorization</Text>
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
  border-right: solid 2px #000;
  margin-right: 20px;
  padding-right: 20px;
`;
