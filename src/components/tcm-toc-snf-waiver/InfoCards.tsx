'use client';

import { Grid, Box, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const cardData = [
  {
    label: 'New Dischanges',
    value: 2,
    icon: <ApartmentIcon sx={{ color: '#2563eb', fontSize: 32 }} />, // blue
  },
  {
    label: 'Pending Initial Contact',
    value: 2,
    icon: <PhoneInTalkIcon sx={{ color: '#eab308', fontSize: 32 }} />, // yellow
  },
  {
    label: 'Pending Follow-up',
    value: 1,
    icon: <CalendarMonthIcon sx={{ color: '#a21caf', fontSize: 32 }} />, // purple
  },
  {
    label: 'TCM Renueve Opportunity',
    value: '$4,825',
    icon: <AutorenewIcon sx={{ color: '#22c55e', fontSize: 32 }} />, // green
  },
];

export default function InfoCards() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card) => (
        <Grid key={card.label} size={{ xs: 12, sm: 12, md: 3 }}>
          <Box
            sx={{
              alignItems: 'center',
              bgcolor: 'white',
              borderRadius: 2,
              display: 'flex',
              height: 110,
              justifyContent: 'space-between',
              p: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#6b7280',
                  fontSize: 15,
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                {card.label}
              </Typography>
              <Typography
                sx={{
                  color: '#111827',
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {card.value}
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
              }}
            >
              {card.icon}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
