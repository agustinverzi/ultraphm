'use client';

import React from 'react';
import { Box, InputBase, Paper, Tabs, Tab, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Badge, Typography, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const conversations = [
  {
    id: 1,
    avatar: { label: 'P', color: '#E9FDF2', textColor: '#5B8C6A' },
    name: 'John Smith',
    subtitle: 'Main Street Primary · Dr. Wilson',
    time: '10 m',
    unread: 3,
    selected: true,
  },
  {
    id: 2,
    avatar: { label: 'T', color: '#E3EFFF', textColor: '#4B5E7A' },
    name: 'Care Coordination',
    subtitle: 'Team · CCM',
    time: '1h',
    unread: 0,
    selected: false,
  },
  {
    id: 3,
    avatar: { label: 'C', color: '#F3F0FD', textColor: '#7B5BA8' },
    name: 'Central Medical Clinic',
    subtitle: 'Clinic staff',
    time: '3h',
    unread: 1,
    selected: false,
  },
  {
    id: 4,
    avatar: { label: 'P', color: '#E9FDF2', textColor: '#5B8C6A' },
    name: 'Maria Garcia',
    subtitle: 'Westside Family · Dr. Martinez',
    time: '1d',
    unread: 0,
    selected: false,
  },
  {
    id: 5,
    avatar: { label: 'S', color: '#F2F2F2', textColor: '#7B7B7B' },
    name: 'Sarah Johnson',
    subtitle: 'Care Manager',
    time: '2d',
    unread: 2,
    selected: false,
  },
];

const tabStyles = {
  minWidth: 0,
  px: 2.5,
  py: 0.5,
  borderRadius: 2,
  fontWeight: 600,
  fontSize: 15,
  textTransform: 'none',
  boxShadow: 'none',
};

export default function Conversations() {
  const [tab, setTab] = React.useState(0);
  return (
    <Box sx={{ width: 370, bgcolor: '#fff', color: '#1A1A1A', minHeight: '100vh', borderRight: '1px solid #E5E7EB', fontFamily: 'Inter, sans-serif' }}>
      {/* Search */}
      <Paper
        sx={{ m: 2, mb: 1.5, bgcolor: '#fff', border: '1px solid #E5E7EB', borderRadius: 1.5, boxShadow: 'none', display: 'flex', alignItems: 'center', height: 44 }}
      >
        <InputBase
          sx={{ ml: 1.5, flex: 1, color: '#1A1A1A', fontSize: 16, '::placeholder': { color: '#A0AEC0', opacity: 1 } }}
          placeholder="Search message..."
          inputProps={{ 'aria-label': 'search message' }}
        />
      </Paper>
      {/* Tabs and filter */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, mb: 1 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{ minHeight: 0 }}
        >
          <Tab label="All" sx={{ ...tabStyles, bgcolor: tab === 0 ? '#EEF0FF' : 'transparent', color: tab === 0 ? '#4B5E7A' : '#1A1A1A' }} />
          <Tab label="Unread" sx={{ ...tabStyles, color: tab === 1 ? '#4B5E7A' : '#1A1A1A' }} />
          <Tab label="Flagged" sx={{ ...tabStyles, color: tab === 2 ? '#4B5E7A' : '#1A1A1A' }} />
        </Tabs>
        <Box sx={{ flex: 1 }} />
        <IconButton sx={{ color: '#A0AEC0', ml: 1 }} size="small" aria-label="filter">
          <FilterListIcon />
        </IconButton>
      </Box>
      {/* List */}
      <List sx={{ p: 0 }}>
        {conversations.map((conv, idx) => (
          <React.Fragment key={conv.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                bgcolor: conv.selected ? '#EEF0FF' : '#fff',
                color: conv.selected ? '#1A1A1A' : '#1A1A1A',
                px: 2,
                py: 2,
                minHeight: 72,
                borderBottom: idx !== conversations.length - 1 ? '1px solid #E5E7EB' : 'none',
                position: 'relative',
                transition: 'background 0.2s',
              }}
              disableGutters
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: conv.avatar.color, color: conv.avatar.textColor, width: 44, height: 44, fontWeight: 600, fontSize: 20 }}>
                  {conv.avatar.label}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 600, fontSize: 17, color: '#1A1A1A', mb: 0.2 }}>
                    {conv.name}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: 14, color: '#A0AEC0', fontWeight: 500 }}>
                    {conv.subtitle}
                  </Typography>
                }
                sx={{ mr: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 48 }}>
                <Typography sx={{ fontSize: 14, color: '#A0AEC0', fontWeight: 500, mb: 0.5 }}>
                  {conv.time}
                </Typography>
                {conv.unread > 0 && (
                  <Badge
                    badgeContent={conv.unread}
                    sx={{
                      '& .MuiBadge-badge': {
                        bgcolor: '#4B43E2',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 13,
                        minWidth: 22,
                        height: 22,
                        borderRadius: '50%',
                        boxShadow: '0 1px 2px #0001',
                      },
                    }}
                  />
                )}
              </Box>
            </ListItem>
            {conv.selected && <Divider sx={{ bgcolor: '#EEF0FF', height: 2, m: 0 }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}