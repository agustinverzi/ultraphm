import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BoltIcon from '@mui/icons-material/Bolt';
import Link from '@mui/material/Link';

export default function AIInsights() {
  return (
    <Box
      sx={{
        bgcolor: '#eef4ff',
        border: '1.5px solid #2563eb',
        borderRadius: '8px',
        p: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
        width: '100%',
      }}
    >
      <BoltIcon sx={{ color: '#2563eb', fontSize: 20, mt: '2px' }} />
      <Box>
        <Typography
          sx={{
            color: '#2563eb',
            fontWeight: 600,
            fontSize: '1rem',
            mb: 0.2,
            lineHeight: 1.2,
          }}
        >
          AI Insights
        </Typography>
        <Typography
          sx={{
            color: '#2563eb',
            fontWeight: 400,
            fontSize: '0.98rem',
            lineHeight: 1.4,
          }}
        >
          3 high-risk patients have missed medication refills in the past 30 days. Consider prioritizing outreach to{' '}
          <Link href="#" underline="hover" sx={{ color: '#2563eb', fontWeight: 500 }}>
            John Smith
          </Link>
          {', '}
          <Link href="#" underline="hover" sx={{ color: '#2563eb', fontWeight: 500 }}>
            Patricia Miller
          </Link>
          {', and '}
          <Link href="#" underline="hover" sx={{ color: '#2563eb', fontWeight: 500 }}>
            Robert Davis
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
}