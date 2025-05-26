import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

export default function OpenHCCs() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', minHeight: 180 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 2 }}>
        Open HCCs (8)
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>COPD</Typography>
            <Typography sx={{ color: '#6b7280', fontSize: 13 }}>ICD: J44.9 | Last Coded: 4/21/24</Typography>
            <Link href="#" underline="hover" sx={{ color: '#2563eb', fontSize: 13 }}>
              Last PFT: FEV1 65% (3/1/24)
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Checkbox sx={{ color: '#2563eb', p: 0.5 }} />
            <Typography sx={{ color: '#23293b', fontSize: 15 }}>Agree</Typography>
            <Checkbox sx={{ color: '#2563eb', p: 0.5 }} />
            <Typography sx={{ color: '#23293b', fontSize: 15 }}>Deny</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16 }}>CKD Stage 3</Typography>
            <Typography sx={{ color: '#6b7280', fontSize: 13 }}>ICD: N18.3 | Last Coded: 4/21/24</Typography>
            <Link href="#" underline="hover" sx={{ color: '#2563eb', fontSize: 13 }}>
              Last GFR: 48 (2/15/24)
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Checkbox sx={{ color: '#2563eb', p: 0.5 }} />
            <Typography sx={{ color: '#23293b', fontSize: 15 }}>Agree</Typography>
            <Checkbox sx={{ color: '#2563eb', p: 0.5 }} />
            <Typography sx={{ color: '#23293b', fontSize: 15 }}>Deny</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
