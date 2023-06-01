import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
    {
        name: 'Bank',
        uv: 4567890.12,
        fill: '#F3BA2F',
    },
    {
        name: 'Token',
        uv: 1567890.12,
        fill: '#54C2C1',
    },
    {
        name: 'Stock',
        uv: 567890.12,
        fill: '#0F0F3F',
    },
    {
        name: 'Cash',
        uv: 678900.12,
        fill: '#9020E9',
    },

];

const style = {
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    lineHeight: '24px',

};
const CustomizedLegend = (value, entry) => {
    return (
        <>
            <div>
                <span style={{ color: '#5f5F76', marginLeft: '10px', marginRight: '30px' }}>{entry.payload.name}</span>
                <span style={{ color: '#0F0F3F', fontWeight: 700 }}>${entry.payload.uv.toFixed(2)}</span>
            </div>
        </>
    );
};

export const Chart2 = () => {

    return (
        <>
            <p
                style={{
                    color: "#4A4A65",
                    fontWeight: 700,
                    fontSize: "32px",
                }}
            >
                Money Allocation
            </p>
            <RadialBarChart startAngle={90} endAngle={450} width={537} height={541} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend iconType='circle' width={"50%"} iconSize={24} layout="horizontal" verticalAlign='middle' wrapperStyle={style} formatter={CustomizedLegend} />
            </RadialBarChart>
        </>
    );
};

export default Chart2;