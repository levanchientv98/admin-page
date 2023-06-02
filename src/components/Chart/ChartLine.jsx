import React from 'react';
import { LineChart, Tooltip, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


const data = [
    {
        name: "12:00",
        price: 48,
    },
    {
        name: "1:00",
        price: 65,
    },
    {
        name: "2:00",
        price: 5,
    },
    {
        name: "3:00",
        price: 62,
    },
    {
        name: "4:00",
        price: 45,
    },
    {
        name: "5:00",
        price: 62,
    },
    {
        name: "6:00",
        price: 75,
    },
    {
        name: "7:00",
        price: 78,
    },
    {
        name: "8:00",
        price: 30,
    },
    {
        name: "9:00",
        price: 65,
    },
    {
        name: "10:00",
        price: 45,
    },
    {
        name: "11:00",
        price: 38,
    },
];

export const ChartLine = () => {
    const HiddenDot = () => (
        <circle cx={0} cy={0} r={0} fill="transparent" stroke="none" />
    );
    return (
        <>
            <p
                style={{
                    color: "#4A4A65",
                    fontWeight: 700,
                    fontSize: "32px",
                }}
            >
                Token Price
            </p>
            <div style={{ backgroundcolor: "#fff" }}>
                <LineChart
                    width={1057}
                    height={425}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} stroke="#DEDEE7" />
                    <XAxis axisLine={false} dataKey="name" tick={{ fill: "#A4A4B2" }} tickLine={false} />
                    <YAxis axisLine={false} domain={[0, 80]} tick={{ fill: "#A4A4B2" }} tickLine={false} />
                    <Tooltip />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9747FF" />
                            <stop offset="100%" stopColor="#14F4C9" />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="url(#gradient)"
                        strokeWidth={2}
                        dot={<HiddenDot />}
                    />
                </LineChart>
            </div >
        </>
    );
};

export default ChartLine;