import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Typography } from '@mui/material';
import { StyledChartContainer } from './styles';

const settings = {
  width: 200,
  height: 200,
  value: 60,
};


const ArcDesign = () => {
  return (
    <StyledChartContainer>
        <Typography className='title' variant='h4' sx={{fontWeight: 700, color: '#636e72'}}>Gauge</Typography>
        <Gauge
        {...settings}
        cornerRadius="0%" // borda do valor do arco
        className='gauge-chart'
        sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
            fill: '#1e90ff',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
            fill: '#dfe4ea',
            },
        })}
        text={
            ({ value, valueMax }) => `${value}%`
         }
        />
    </StyledChartContainer>
  );
}

export default ArcDesign;