import BarChartIcon from '@mui/icons-material/BarChart';
import { Box, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
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
      <IconButton color="inherit"><ElectricBoltIcon /></IconButton>
      <IconButton color="inherit"><PeopleAltIcon /></IconButton>
      <IconButton color="inherit"><StarBorderIcon /></IconButton>
      <IconButton color="inherit"><CalendarTodayIcon /></IconButton>
      <IconButton color="inherit"><DescriptionIcon /></IconButton>
      <IconButton color="inherit"><BarChartIcon /></IconButton>
      <IconButton color="inherit"><SettingsIcon /></IconButton>
    </Box>
  );
}