import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const RISK_COLOR = '#fff9db';
const RISK_TEXT_COLOR = '#6d5c00';
const EXPENSE_COLOR = '#ffeaea';
const EXPENSE_TEXT_COLOR = '#a13d3d';
const ALERT_BG = '#fff9ed';
const ALERT_ICON_COLOR = '#e6a100';
const ALERT_TEXT_COLOR = '#7a4f01';

export default function Header() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', p: 0, borderRadius: 0 }}>
      {/* Top Row: Patient ID and Chips */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', px: 3, pt: 2, justifyContent: 'space-between', width: '100%' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 22, color: '#23293b', lineHeight: 1.2 }}>
            Patient-DMOplc9G
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: 14, mt: 0.2 }}>
            DOB: Mon Apr 20 1970
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
          <Chip
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <span>Risk: Moderate</span>
                <span style={{ fontWeight: 400, color: '#6d5c00', marginLeft: 2 }}>(0.523)</span>
              </Box>
            }
            sx={{
              bgcolor: RISK_COLOR,
              color: RISK_TEXT_COLOR,
              fontWeight: 500,
              fontSize: 15,
              height: 28,
              borderRadius: 2,
              px: 1.5,
              boxShadow: 'none',
              '.MuiChip-label': { p: 0, display: 'flex', alignItems: 'center' },
            }}
            size="medium"
          />
          <Chip
            label={<span>Expense: High ($8567)</span>}
            sx={{
              bgcolor: EXPENSE_COLOR,
              color: EXPENSE_TEXT_COLOR,
              fontWeight: 500,
              fontSize: 15,
              height: 28,
              borderRadius: 2,
              px: 1.5,
              boxShadow: 'none',
              '.MuiChip-label': { p: 0, display: 'flex', alignItems: 'center' },
            }}
            size="medium"
          />
        </Box>
      </Box>
      {/* Alert Row */}
      <Box sx={{ mt: 2 }}>
        <Alert
          icon={<WarningAmberRoundedIcon sx={{ color: ALERT_ICON_COLOR, fontSize: 22, mt: 0.2 }} />}
          sx={{
            bgcolor: ALERT_BG,
            color: ALERT_TEXT_COLOR,
            border: 'none',
            boxShadow: 'none',
            fontSize: 15,
            py: 0.5,
            px: 2,
            alignItems: 'center',
            '.MuiAlert-icon': { mt: 0.2 },
            '.MuiAlert-message': { display: 'flex', alignItems: 'center', gap: 1 },
          }}
          iconMapping={{ warning: <WarningAmberRoundedIcon sx={{ color: ALERT_ICON_COLOR, fontSize: 22 }} /> }}
          severity="warning"
        >
          <Typography component="span" sx={{ fontWeight: 700, color: ALERT_TEXT_COLOR, fontSize: 15, mr: 0.5 }}>
            Critical Alerts:
          </Typography>
          <Typography component="span" sx={{ color: ALERT_TEXT_COLOR, fontSize: 15, fontWeight: 400 }}>
            2 ED visits in last 30 days
          </Typography>
          <span style={{ color: '#bfa14a', margin: '0 8px' }}>|</span>
          <Typography component="span" sx={{ color: ALERT_TEXT_COLOR, fontSize: 15, fontWeight: 400 }}>
            Medication adherence below 80%
          </Typography>
          <span style={{ color: '#bfa14a', margin: '0 8px' }}>|</span>
          <Typography component="span" sx={{ color: ALERT_TEXT_COLOR, fontSize: 15, fontWeight: 400 }}>
            Last A1C: 8.2
          </Typography>
        </Alert>
      </Box>
    </Box>
  );
}
