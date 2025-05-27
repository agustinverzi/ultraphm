import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function OpenHCCs() {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, letterSpacing: 1, flex: 1 }}>OPEN HCCS</Typography>
        <Chip label="RAF: 2.43" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22 }} />
      </Box>
      {/* HCC19 */}
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>HCC19</Typography>
          <Chip label="Open" size="small" sx={{ bgcolor: '#FBEAEA', color: '#E24B43', fontWeight: 700, fontSize: 12, height: 22 }} />
        </Box>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 1 }}>Diabetes with Chronic Complications</Typography>
        <Button variant="outlined" sx={{ color: '#4B5E7A', borderColor: '#E3EFFF', fontWeight: 600, fontSize: 13, borderRadius: 1.5, textTransform: 'none', width: '100%', mb: 0.5, bgcolor: '#F6FAFF', '&:hover': { borderColor: '#4B5E7A', bgcolor: '#EEF0FF' } }}>
          Add Documentation
        </Button>
      </Box>
      {/* HCC85 */}
      <Box sx={{ bgcolor: '#fff', border: '1px solid #E3EFFF', borderRadius: 2, p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, flex: 1 }}>HCC85</Typography>
          <Chip label="Documented" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22 }} />
        </Box>
        <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 0.5 }}>Congestive Heart Failure</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon sx={{ color: '#5B8C6A', fontSize: 18, mr: 0.5 }} />
          <Typography sx={{ color: '#A0AEC0', fontSize: 13 }}>Last updated: 03/24/2025</Typography>
        </Box>
      </Box>
    </Box>
  );
}