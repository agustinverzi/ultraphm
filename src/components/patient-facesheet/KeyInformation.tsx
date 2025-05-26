import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function KeyInformation() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', minHeight: 180 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 2 }}>
        Key Information
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>PCP</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>Dr. Jones</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Patient ID</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>1</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Insurance</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>Aetna Commercial</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Location</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>Ogden Clinic Pulmonology</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Care Manager</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>Sarah Smith, RN</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Last Annual Wellness</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>3/15/24</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Next Visit</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>5/19/25</Typography>
        </Box>
      </Box>
    </Box>
  );
}
