import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CareGaps() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, mb: 1, letterSpacing: 1 }}>CARE GAPS</Typography>
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>Colorectal Cancer Screening</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 13 }}>Due: May 15, 2025</Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>HbA1c Test</Typography>
          <Typography sx={{ color: '#E24B43', fontWeight: 700, fontSize: 13 }}>Due: Apr 10, 2025</Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>Annual Wellness Visit</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 13 }}>Due: Apr 15, 2025</Typography>
        </Box>
      </Box>
    </Box>
  );
}