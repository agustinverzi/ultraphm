import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import LanguageIcon from '@mui/icons-material/Language';

export default function Demographics() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, mb: 1, letterSpacing: 1 }}>DEMOGRAPHICS</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Avatar sx={{ bgcolor: '#E3EFFF', color: '#4B5E7A', width: 28, height: 28, mr: 1 }}>
          <CakeIcon sx={{ fontSize: 18 }} />
        </Avatar>
        <Typography sx={{ color: '#4B5E7A', fontSize: 14, mr: 0.5 }}>Age</Typography>
        <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: 15 }}>59 years</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Avatar sx={{ bgcolor: '#E3EFFF', color: '#4B5E7A', width: 28, height: 28, mr: 1 }}>
          <PersonIcon sx={{ fontSize: 18 }} />
        </Avatar>
        <Typography sx={{ color: '#4B5E7A', fontSize: 14, mr: 0.5 }}>Gender</Typography>
        <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: 15 }}>Male</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: '#E3EFFF', color: '#4B5E7A', width: 28, height: 28, mr: 1 }}>
          <LanguageIcon sx={{ fontSize: 18 }} />
        </Avatar>
        <Typography sx={{ color: '#4B5E7A', fontSize: 14, mr: 0.5 }}>Languaje</Typography>
        <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: 15 }}>English</Typography>
      </Box>
    </Box>
  );
}