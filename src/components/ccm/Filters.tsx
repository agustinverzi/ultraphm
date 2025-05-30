'use client';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Filters() {
  const [condition, setCondition] = useState('all');
  const [sort, setSort] = useState('name');

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={{ xs: 12, md: 5 }}>
        <TextField
          fullWidth
          placeholder="Search patients by name or condition..."
          variant="outlined"
          size="small"
          InputProps={{
            sx: {
              borderRadius: '10px',
              bgcolor: '#fff',
              fontSize: '1rem',
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" tabIndex={-1} sx={{ color: '#6b7280' }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Select
          fullWidth
          value={condition}
          onChange={e => setCondition(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            borderRadius: '10px',
            bgcolor: '#fff',
            fontSize: '1rem',
            height: 40,
          }}
          displayEmpty
        >
          <MenuItem value="all">All Conditions</MenuItem>
          <MenuItem value="diabetes">Diabetes</MenuItem>
          <MenuItem value="hypertension">Hypertension</MenuItem>
        </Select>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Select
          fullWidth
          value={sort}
          onChange={e => setSort(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            borderRadius: '10px',
            bgcolor: '#fff',
            fontSize: '1rem',
            height: 40,
          }}
          displayEmpty
        >
          <MenuItem value="name">Sort by Name</MenuItem>
          <MenuItem value="date">Sort by Date</MenuItem>
        </Select>
      </Grid>
      <Grid size={{ xs: 12, md: 1 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#2563eb',
            color: '#fff',
            borderRadius: '10px',
            fontWeight: 600,
            boxShadow: 'none',
            height: 40,
            '&:hover': { bgcolor: '#1746b3' },
          }}
        >
          Export List
        </Button>
      </Grid>
    </Grid>
  );
}