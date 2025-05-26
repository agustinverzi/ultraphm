import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ADHERENCE_COLORS = {
  red: '#F04438',
  green: '#12B76A',
  yellow: '#FDB022',
};

export default function MedicationAdherence() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', minHeight: 140 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 2 }}>
        Medication Adherence
      </Typography>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16, flex: 1 }}>COPD inhalers</Typography>
          <Typography sx={{ color: ADHERENCE_COLORS.red, fontWeight: 500, fontSize: 16 }}>76% adherent</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16, flex: 1 }}>ACE Inhibitor</Typography>
          <Typography sx={{ color: ADHERENCE_COLORS.green, fontWeight: 500, fontSize: 16 }}>92% adherent</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 16, flex: 1 }}>Statins</Typography>
          <Typography sx={{ color: ADHERENCE_COLORS.yellow, fontWeight: 500, fontSize: 16 }}>85% adherent</Typography>
        </Box>
        <Typography sx={{ color: '#6b7280', fontSize: 13, mt: 1 }}>
          Based on last 90 days of claims data
        </Typography>
      </Box>
    </Box>
  );
}
