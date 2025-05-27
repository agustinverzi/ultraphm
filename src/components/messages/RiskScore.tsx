import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

export default function RiskScore() {
  return (
    <Box sx={{ mb: 0 }}>
      <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, mb: 1, letterSpacing: 1 }}>RISK SCORE</Typography>
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LinearProgress variant="determinate" value={78} sx={{ height: 7, borderRadius: 5, bgcolor: '#FBEAEA', flex: 1, mr: 1, '& .MuiLinearProgress-bar': { bgcolor: '#EF4444' } }} />
          <Typography sx={{ color: '#E24B43', fontWeight: 700, fontSize: 13, minWidth: 70, textAlign: 'right' }}>High Risk (78%)</Typography>
        </Box>
        <Alert severity="warning" sx={{ bgcolor: '#FFF7E3', color: '#B89B0E', fontWeight: 600, fontSize: 13, borderRadius: 1.5, p: 1, mb: 1, border: '1px solid #FFF7E3' }}>
          Care Opportunity Alert
        </Alert>
        <Alert icon={false} sx={{ bgcolor: '#FFFBEA', color: '#B89B0E', fontWeight: 500, fontSize: 13, borderRadius: 1.5, p: 1, border: '1px solid #FFF7E3' }}>
          Patient shows risk factors for readmission. Address CHF and diabetes management during TCM follow-up.
        </Alert>
      </Box>
    </Box>
  );
}