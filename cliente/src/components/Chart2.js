import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 30),
  createData('03:00', 40),
  createData('06:00', 20),
  createData('09:00', 20),
  createData('12:00', 20),
  createData('15:00', 21),
  createData('18:00', 24),
  createData('21:00', 30),
  createData('24:00', undefined),
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
              Humidade
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}