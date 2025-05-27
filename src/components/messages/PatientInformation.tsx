import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TCMCare from './TCMCare';
import Demographics from './Demographics';
import UpcomingAppointments from './UpcomingAppointments';
import CareGaps from './CareGaps';
import OpenHCCs from './OpenHCCs';
import RiskScore from './RiskScore';

export default function PatientInformation() {
  return (
    <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 2, boxShadow: 0, width: 350 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 16, color: '#1A1A1A', mb: 1.5 }}>Patient Information</Typography>
      <TCMCare />
      <Demographics />
      <UpcomingAppointments />
      <CareGaps />
      <OpenHCCs />
      <RiskScore />
    </Box>
  );
}