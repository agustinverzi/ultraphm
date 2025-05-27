import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

export default function TCMCare() {
  return (
    <Box sx={{ bgcolor: '#F6FAFF', borderRadius: 2, p: 2, mb: 2, boxShadow: 0, border: '1px solid #E3EFFF' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#1A1A1A', flex: 1 }}>TCM Care</Typography>
        <Chip label="Active" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 24 }} />
      </Box>
      <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 0.5 }}>
        Discharged from Central Hospital on 03/23/2025
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13, flex: 1 }}>Day 5 of 30</Typography>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13 }}>Due: Apr 22</Typography>
      </Box>
      <LinearProgress variant="determinate" value={16.7} sx={{ height: 7, borderRadius: 5, bgcolor: '#E3EFFF', mb: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ color: '#B89B0E', fontSize: 13, fontWeight: 600, flex: 1 }}>5/8 Requirements Met</Typography>
      </Box>
      <Button variant="contained" sx={{ bgcolor: '#4B43E2', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 1.5, textTransform: 'none', width: '100%', boxShadow: 'none', '&:hover': { bgcolor: '#3A36B6' } }}>
        View Program Details
      </Button>
    </Box>
  );
}