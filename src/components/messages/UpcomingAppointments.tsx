import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function UpcomingAppointments() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, mb: 1, letterSpacing: 1 }}>UPCOMING APPOINTMENTS</Typography>
      {/* Cardiology Follow-up */}
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>Cardiology Follow-up</Typography>
          <Chip label="Pending" size="small" sx={{ bgcolor: '#FFF7E3', color: '#B89B0E', fontWeight: 700, fontSize: 12, height: 22 }} />
        </Box>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 0.5 }}>Dr. Rodriguez</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <CalendarTodayIcon sx={{ color: '#4B5E7A', fontSize: 16, mr: 0.5 }} />
          <Typography sx={{ color: '#4B5E7A', fontSize: 13, mr: 1 }}>Apr 2, 2025 at 10:30 AM</Typography>
        </Box>
        <Chip label="TCM Requirement" size="small" sx={{ bgcolor: '#FBEAEA', color: '#E24B43', fontWeight: 700, fontSize: 12, height: 22 }} />
      </Box>
      {/* Primary Care */}
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>Primary Care</Typography>
          <Chip label="Confirmed" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22 }} />
        </Box>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 0.5 }}>Dr. Wilson</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalendarTodayIcon sx={{ color: '#4B5E7A', fontSize: 16, mr: 0.5 }} />
          <Typography sx={{ color: '#4B5E7A', fontSize: 13 }}>Apr 15,2025 at 9:00 AM</Typography>
        </Box>
      </Box>
    </Box>
  );
}