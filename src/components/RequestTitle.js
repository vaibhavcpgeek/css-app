import styled from "styled-components";
import Text from "../shared/Text";

function RequestTitle() {
  return (
    <StyledSection>
      <StyledDiv>
        <Text variant="medium-large">Cancel / recall payment, </Text>
        <Text variant="medium-large">GBP 1,000.00</Text>
      </StyledDiv>
      <StyledDiv>
        <Text variant="medium">1234567890123456 (GB), </Text>
        <Text variant="medium">KUIML Business Company</Text>
      </StyledDiv>
    </StyledSection>
  );
}

export default RequestTitle;

const StyledSection = styled.section`
  margin-bottom: 18px;
`;

const StyledDiv = styled.div`
  margin-bottom: 11px;
`;
