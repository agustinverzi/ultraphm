import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function RecentVitalsAndLabs() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', minHeight: 140 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 2 }}>
        Recent Vitals & Labs
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>BP</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 18 }}>138/88</Typography>
            <ArrowDownwardIcon sx={{ color: '#12b76a', fontSize: 18 }} />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>A1C</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ color: '#f04438', fontWeight: 500, fontSize: 18 }}>8.2%</Typography>
            <ArrowUpwardIcon sx={{ color: '#f04438', fontSize: 18 }} />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>BM</Typography>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 18 }}>27.4</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#6b7280', fontSize: 14 }}>LDL</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ color: '#f04438', fontWeight: 500, fontSize: 18 }}>142</Typography>
            <ArrowUpwardIcon sx={{ color: '#f04438', fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
