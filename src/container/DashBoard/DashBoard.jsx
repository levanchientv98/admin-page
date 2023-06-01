import { Chart, Chart2 } from "components/Chart";
import React from "react";
import styled from "styled-components";


const StyleDashBoard = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #fff;  
  
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
        <StyleDashBoard> <Chart></Chart>
            <Chart2></Chart2>
        </StyleDashBoard>

    );
};

export default DashBoard;