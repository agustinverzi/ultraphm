'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

const stats = [
  { label: 'New Dischanges', count: 3 },
  { label: 'In Progress', count: 1 },
  { label: 'Completed', count: 10 },
  { label: 'Reports & Analytics' },
];

export default function StatSelector() {
  const [selected, setSelected] = useState('New Dischanges');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f8fafc',
        borderRadius: '8px',
        p: '4px',
        width: 'fit-content',
      }}
    >
      {stats.map((stat, idx) => {
        const isSelected = selected === stat.label;
        const badgeSx = {
          '& .MuiBadge-badge': {
            bgcolor:
              stat.label === 'In Progress'
                ? '#a78bfa'
                : '#111827',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14,
            minWidth: 26,
            height: 26,
            px: 1.25,
            borderRadius: '7px',
            ml: 2,
            boxShadow:
              stat.label === 'New Dischanges' || stat.label === 'Completed'
                ? '0 1px 2px 0 rgba(16,24,40,0.05)'
                : undefined,
          },
        };
        if (isSelected) {
          return (
            <Button
              key={stat.label}
              disableElevation
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: 16,
                minWidth: 0,
                px: 2.5,
                py: 1.2,
                boxShadow: 'none',
                mr: idx < stats.length - 1 ? 1.5 : 0,
                ml: 0,
                '&:hover': { boxShadow: 'none', bgcolor: 'primary.main' },
                position: 'relative',
                zIndex: 1,
              }}
              onClick={() => setSelected(stat.label)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: 200, justifyContent: 'space-between' }}>
                {stat.label}
                {stat.count !== undefined && (
                  <Badge badgeContent={stat.count} sx={badgeSx} />
                )}
              </Box>
            </Button>
          );
        }
        return (
          <Box
            key={stat.label}
            component="a"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              justifyContent: 'space-between',
              color: '#7c7c8a',
              fontWeight: 500,
              fontSize: 16,
              px: 2.5,
              py: 1.2,
              borderRadius: '8px',
              mr: idx < stats.length - 1 ? 1.5 : 0,
              cursor: 'pointer',
              '&:hover': { bgcolor: '#f1f5f9', color: '#111827' },
              transition: 'background 0.15s, color 0.15s',
              width: 200,
            }}
            onClick={() => setSelected(stat.label)}
            tabIndex={0}
            role="button"
          >
            {stat.label}
            {stat.count !== undefined && <Badge badgeContent={stat.count} sx={badgeSx} />}
          </Box>
        );
      })}
    </Box>
  );
}