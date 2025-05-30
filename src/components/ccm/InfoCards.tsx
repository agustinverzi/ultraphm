import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const cards = [
  {
    title: 'Total CCM Patients',
    value: '6',
    subtitle: 'New Dischanges',
    color: '#2563eb', // blue-600
    bg: '#f1f5fe', // very light blue
    subtitleColor: '#2563eb',
  },
  {
    title: 'High Risk Patients',
    value: '3',
    subtitle: '50% of Total',
    color: '#b91c1c', // red-700
    bg: '#fdf3f4', // very light red
    subtitleColor: '#b91c1c',
  },
  {
    title: 'Contact Due',
    value: '6',
    subtitle: '100% Need Contact',
    color: '#92400e', // amber-800
    bg: '#fefbe9', // very light yellow
    subtitleColor: '#92400e',
  },
  {
    title: 'No-Shows This Month',
    value: '0',
    subtitle: '0% Missed Appts',
    color: '#7c3aed', // purple-600
    bg: '#f7f3fd', // very light purple
    subtitleColor: '#7c3aed',
  },
  {
    title: 'Average HCC Score',
    value: '2.63',
    subtitle: 'Regional Avg: 1.85',
    color: '#166534', // green-800
    bg: '#eafaf1', // very light green
    subtitleColor: '#166534',
  },
];

export default function InfoCards() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {cards.map((card, idx) => (
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={card.title} sx={{ display: 'flex' }}>
          <Box
            sx={{
              flex: 1,
              bgcolor: card.bg,
              borderRadius: 2,
              boxShadow: '0 2px 6px 0 rgba(0,0,0,0.07)',
              p: 2.5,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography
              sx={{
                color: card.color,
                fontWeight: 500,
                fontSize: '1rem',
                mb: 1,
                lineHeight: 1.2,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                color: card.color,
                fontWeight: 700,
                fontSize: '2rem',
                lineHeight: 1.1,
                mb: 0.5,
              }}
            >
              {card.value}
            </Typography>
            <Typography
              sx={{
                color: card.subtitleColor,
                fontWeight: 400,
                fontSize: '0.95rem',
                textDecoration: idx === 0 ? 'underline' : 'none',
                cursor: idx === 0 ? 'pointer' : 'default',
              }}
            >
              {card.subtitle}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}