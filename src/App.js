import styled from "styled-components";
import "./App.css";
import RequestTitle from "./components/RequestTitle";
import RequestDetails from "./components/RequestDetails";
import RequestActions from "./components/RequestActions";
import FullDetails from "./components/FullDetails";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <div>
          <RequestTitle />
          <RequestDetails />
        </div>
        <div>
          <RequestActions />
          <FullDetails />
        </div>
      </StyledSection>
    </div>
  );
}

export default App;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
