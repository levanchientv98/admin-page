import { ChartBar, ChartLine, ChartRadianBar } from "components/Chart";
import React from "react";
import styled from "styled-components";


const StyleDashBoard = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #fff; 
  
  .ChartGroup{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .recharts-default-legend{
    display: grid;
    grid-template-columns: auto auto;
    
    width: 400px;
    gap: 20px;
  }

  .recharts-legend-item{
    display: flex !important;
    
  }
`;

const DashBoard = () => {
  return (
    <StyleDashBoard>
      <ChartLine></ChartLine>
      <div className="ChartGroup">
        <ChartRadianBar></ChartRadianBar>
        <ChartBar></ChartBar>
      </div>
    </StyleDashBoard>

  );
};

export default DashBoard;