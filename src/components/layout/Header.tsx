import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Breadcrumb from '@/components/Breadcrumb';

export default function Header() {
  // Render
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white', color: 'text.primary' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Breadcrumb />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton><ChatBubbleOutlineIcon /></IconButton>
          <Avatar alt="CN" sx={{ bgcolor: '#E2E8F0' }}>CN</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}