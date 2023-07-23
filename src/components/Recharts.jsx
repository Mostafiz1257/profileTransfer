
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Recharts = () => {
    const data = [
        {
            name: 'Page A',
            uv: 1000,
            pv: 500,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 1500,
            pv:1000,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 3000,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2000,
            pv: 4008,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 2000,
            pv: 5800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2000,
            pv: 6800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 2000,
            pv: 7300,
            amt: 2100,
        },
    ];

    return (
        <>

            
                <BarChart
                    width={350}
                    height={200}
                    data={data}
                  
                >
             
                    <XAxis dataKey="uv" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#4B89A8" />
                    <Bar dataKey="uv" stackId="a" fill="#A2BCCA" />
                    <Bar dataKey="atm" stackId="a" fill="#E7E9F3" />
                </BarChart>
           
        </>
    );
};

export default Recharts;