'use client';

import { Box, Typography } from '@mui/material';
import { Gauge as MuiGauge, gaugeClasses } from '@mui/x-charts/Gauge';
import type { Theme } from '@mui/material/styles';

type GaugeProps = {
  target: number;
  title: string;
  value: number;
};

export default function Gauge({ title, value, target }: GaugeProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        borderRadius: 3,
        boxShadow: 1,
        height: 220,
        borderLeft: '6px solid #4f46e5',
        overflow: 'hidden',
        p: 0,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
          color: 'grey.700',
          textAlign: 'center',
          mt: 2.5,
          mb: 0.5,
          fontSize: 20,
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '90%',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          mt: 2.5,
        }}
      >
        <MuiGauge
          width={150}
          height={100}
          value={value}
          valueMin={0}
          valueMax={100}
          startAngle={-110}
          endAngle={110}
          innerRadius="80%"
          outerRadius="100%"
          text={({ value }: { value: number | null }) =>
            value == null ? '--%' : `${value.toFixed(1)}%`
          }
          sx={(theme: Theme) => ({
            [`& .${gaugeClasses.valueArc}`]: {
              fill: theme.palette.error.main,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.grey[200],
            },
            [`& .${gaugeClasses.valueText}`]: {
              fontWeight: 700,
              fontSize: 28,
              fill: theme.palette.text.primary,
              dominantBaseline: 'middle',
              textAnchor: 'middle',
              transform: 'translate(0, 8px)',
            },
          })}
        />
        <Typography
          variant="body2"
          sx={{
            color: 'grey.600',
            fontWeight: 400,
            fontSize: 16,
            mt: 2.5,
            textAlign: 'center',
          }}
        >
          Target: {target.toFixed(1)}%
        </Typography>
      </Box>
    </Box>
  );
}
