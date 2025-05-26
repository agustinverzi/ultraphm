import { Box, Button, FormControl, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      bgcolor: '#fff',
      p: 3,
      m: 0,
      boxShadow: 'none',
      border: 'none',
    }}>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#1A2233',
            fontSize: 28,
            lineHeight: 1.2,
            mb: 0.5,
          }}
        >
          Dashboard
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 400,
            color: '#7B849B',
            fontSize: 16,
            lineHeight: 1.4,
          }}
        >
          Patients to contact to schedule appointments
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <TextField
          placeholder="Search patients..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ pl: '14px' }}>
                <SearchIcon sx={{ color: '#7B849B', fontSize: 20 }} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: 'transparent',
              borderRadius: '8px',
              height: 40,
              fontWeight: 500,
              color: '#1A2233',
              borderColor: '#B6C1D1',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B6C1D1',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B6C1D1',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B6C1D1',
              },
              '& input::placeholder': {
                color: '#7B849B',
                opacity: 1,
                fontWeight: 400,
              },
              fontSize: 16,
              paddingLeft: 0,
            },
          }}
          sx={{
            width: 260,
            minWidth: 200,
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              height: 40,
              paddingLeft: 0,
              '& input': {
                padding: '10px 0',
                fontSize: 16,
                color: '#1A2233',
              },
            },
          }}
        />
        <FormControl sx={{ minWidth: 120, height: 40 }} size="small" variant="outlined">
          <Select
            value={''}
            displayEmpty
            sx={{
              height: 40,
              borderRadius: '8px',
              fontWeight: 500,
              bgcolor: '#fff',
              fontSize: 16,
              color: '#1A2233',
              '& .MuiSelect-select': {
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
              },
            }}
            inputProps={{
              'aria-label': 'Provider',
            }}
            renderValue={() => 'Provider'}
          >
            <MenuItem value={1}>Provider 1</MenuItem>
            <MenuItem value={2}>Provider 2</MenuItem>
            <MenuItem value={3}>Provider 3</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            height: 40,
            borderRadius: '8px',
            fontWeight: 500,
            bgcolor: '#fff',
            color: '#1A2233',
            fontSize: 16,
            minWidth: 48,
            px: 2,
            boxShadow: 'none',
            border: '1px solid #B6C1D1',
            '&:hover': {
              bgcolor: '#F8F9FB',
              color: '#1A2233',
              boxShadow: 'none',
              border: '1px solid #B6C1D1',
            },
          }}
        >
          DR
        </Button>
      </Box>
    </Box>
  );
}