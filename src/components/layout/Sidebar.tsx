import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Link from 'next/link';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Sidebar() {
  // Render
  return (
    <Box
      sx={{
        alignItems: 'center',
        bgcolor: '#312E81',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        px: 4,
        py: 2,
        width: 44,
      }}
    >
      <IconButton component={Link} href="/" sx={{ color: 'white' }}>
        <ElectricBoltIcon />
      </IconButton>
      <IconButton component={Link} href="/patient-facesheet" sx={{ color: 'white' }}>
        <PeopleAltIcon />
      </IconButton>
      <IconButton component={Link} href="/messages" sx={{ color: 'white' }}>
        <MessageIcon />
      </IconButton>
      <IconButton component={Link} href="#" sx={{ color: 'white' }}>
        <StarBorderIcon />
      </IconButton>
      <IconButton component={Link} href="#" sx={{ color: 'white' }}>
        <CalendarTodayIcon />
      </IconButton>
      <IconButton component={Link} href="#" sx={{ color: 'white' }}>
        <DescriptionIcon />
      </IconButton>
      <IconButton component={Link} href="#" sx={{ color: 'white' }}>
        <BarChartIcon />
      </IconButton>
      <IconButton component={Link} href="#" sx={{ color: 'white' }}>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
}