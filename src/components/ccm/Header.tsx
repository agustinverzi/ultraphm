import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ bgcolor: '#fff', p: 3 }}>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          color: 'text.primary',
          lineHeight: 1.2,
          mb: 0.5,
        }}
      >
        CCM (Chronic Care Management)
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'grey.600',
          fontWeight: 400,
          fontSize: { xs: '0.95rem', sm: '1rem' },
        }}
      >
        List of patients based on polychronic, and high utilization.
      </Typography>
    </Box>
  );
}