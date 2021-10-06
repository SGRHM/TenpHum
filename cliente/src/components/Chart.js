import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 18),
  createData('05:00', 19),
  createData('10:00', 22),
  createData('12:00', 30),
  createData('14:00', 27),
  createData('15:00', 28),
  createData('16:00', 30),
  createData('17:00', 20),
  createData('18:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
       <Typography component="h1" variant="h5">
         Dia de Hoje
        </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Temperatura
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}