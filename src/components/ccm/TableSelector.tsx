'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const tabs = [
  'All Patients',
  'High Risk',
  'Contact Due',
  'Enrolled',
  'Not Enrolled',
];

export default function TableSelector() {
  const [selected, setSelected] = useState('All Patients');

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        p: '4px 12px',
        width: 'fit-content',
        boxShadow: '0 0 0 1px #e5e7eb',
        gap: 1.5,
      }}
    >
      {tabs.map((tab) =>
        tab === selected ? (
          <Button
            key={tab}
            variant="contained"
            disableElevation
            sx={{
              bgcolor: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '8px',
              px: 2.5,
              py: 0.5,
              minWidth: 0,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': { bgcolor: '#1746b3' },
            }}
          >
            {tab}
          </Button>
        ) : (
          <Link
            key={tab}
            underline="none"
            sx={{
              color: '#6b7280',
              fontWeight: 500,
              fontSize: '1rem',
              borderRadius: '8px',
              px: 2.5,
              py: 0.5,
              cursor: 'pointer',
              minWidth: 0,
              transition: 'background 0.2s',
              '&:hover': {
                bgcolor: '#f3f4f6',
                color: '#2563eb',
              },
              display: 'inline-block',
            }}
            onClick={() => setSelected(tab)}
          >
            {tab}
          </Link>
        )
      )}
    </Box>
  );
}