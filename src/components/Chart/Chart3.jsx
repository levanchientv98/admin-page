import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


const StyleChart3 = styled.div`
    display: flex;
    flex-direction: column;

    .BarStyle{
        border-radius: 10px 10px 0 0;
    }


`;


const data = [
    {
        name: "06 March",
        uv: 110000,
    },
    {
        name: "07 March",
        uv: -120000,
    },
    {
        name: "08 March",
        uv: 230000,
    },
    {
        name: "09 March",
        uv: -20000,
    },
    {
        name: "10 March",
        uv: -10000,
    },
    {
        name: "11 March",
        uv: 15000,
    },
    {
        name: "12 March",
        uv: 150000,
    },
];



const Chart3 = () => {
    return (
        <>
            <StyleChart3>
                <p
                    style={{
                        color: "#4A4A65",
                        fontWeight: 700,
                        fontSize: "32px",
                        margin: 0,
                        marginBottom: 30,
                    }}
                >
                    Profit
                </p>
                <ResponsiveContainer width={825} height={541}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" >{data.map((datum, entry, index) => (
                            <Cell radius={[10, 10, 0, 0]} key={`cell-${index}`}
                                fill={datum.uv > 0 ? "#4FB5C9" : "#F05D5E"} />
                        ))}</Bar>
                    </BarChart>
                </ResponsiveContainer>
            </StyleChart3>
        </>
    );
};

export default Chart3;