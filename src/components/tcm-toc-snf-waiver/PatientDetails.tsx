import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function PatientDetails() {
  return (
    <Paper
      sx={{
        borderRadius: '12px',
        boxShadow: '0 2px 8px 0 rgba(16,24,40,0.08)',
        p: 0,
        bgcolor: '#fff',
        mx: 'auto',
        mt: 0,
        overflow: 'hidden',
      }}
    >
      {/* Header Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pt: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 22, color: '#23293b' }}>
          Patient Details: James Wilson
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            sx={{
              bgcolor: '#fff',
              color: '#23293b',
              borderColor: '#D0D5DD',
              borderRadius: 2,
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#f5f5f5', borderColor: '#D0D5DD' },
            }}
          >
            Call Patient
          </Button>
          <Button
            variant="contained"
            startIcon={<TaskAltIcon sx={{ fontSize: 18 }} />}
            sx={{
              bgcolor: '#23293b',
              color: '#fff',
              borderRadius: 2,
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#23293b' },
            }}
          >
            Record Contact
          </Button>
        </Stack>
      </Box>
      {/* Info Cards Row */}
      <Grid container spacing={2} sx={{ px: 3, pt: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 2, border: '1px solid #D0D5DD' }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b', mb: 1 }}>
              Patient Information
            </Typography>
            <Stack spacing={0.5}>
              <Typography sx={{ color: '#6b7280', fontSize: 15 }}>
                <span role="img" aria-label="person"><PersonIcon sx={{ fontSize: 16, mr: 0.5, color: '#6b7280' }} /></span> James Wilson | 72 yrs | Male
              </Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15 }}>
                <span role="img" aria-label="phone"><PhoneIcon sx={{ fontSize: 16, mr: 0.5, color: '#6b7280' }} /></span> (555) 523-4587
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 2, border: '1px solid #D0D5DD' }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b', mb: 1 }}>
              Discharge Information
            </Typography>
            <Stack spacing={0.5}>
              <Typography sx={{ color: '#6b7280', fontSize: 15 }}>
                <span role="img" aria-label="hospital"><ApartmentIcon sx={{ fontSize: 16, mr: 0.5, color: '#6b7280' }} /></span> Memorial Hospital
              </Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15 }}>
                <span role="img" aria-label="calendar"><CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5, color: '#6b7280' }} /></span> Discharged: Mar 3, 2025
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 2, border: '1px solid #D0D5DD' }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b', mb: 1 }}>
              TCM Requirements
            </Typography>
            <Stack spacing={0.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#E24B43', fontSize: 15 }}>
                <ErrorOutlineIcon sx={{ fontSize: 18, mr: 0.5 }} />
                Initial Contact Due: Mar 5, 2025
              </Box>
              <Typography sx={{ color: '#6b7280', fontSize: 15 }}>
                <CachedIcon sx={{ fontSize: 16, mr: 0.5, color: '#6b7280' }} />
                7-day Follow-up | Due Mar 13, 2025
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      {/* Discharge Summary */}
      <Box sx={{ px: 3, pt: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 1 }}>
          Discharge Summary
        </Typography>
        <Typography sx={{ color: '#23293b', fontSize: 16, mb: 2 }}>
          72-year-old male admitted for STEMI. Underwent cardiac catheterization with stent placement to LAD. Prescribed dual antiplatelet therapy, beta-blocker, ACE inhibitor, and statin. Patient requires close monitoring for medication adherence and potential complications.
        </Typography>
      </Box>
      {/* Current Medications & Care Plan */}
      <Grid container spacing={2} sx={{ px: 3, pb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 2, height: '100%' }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23293b', mb: 1 }}>
              Current Medications (8)
            </Typography>
            <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, mt: 1, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', border: '1px solid #D0D5DD' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b' }}>
                  Medication Adherence
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: '#fff',
                    color: '#23293b',
                    borderColor: '#D0D5DD',
                    borderRadius: 2,
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 2.5,
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#f5f5f5', borderColor: '#D0D5DD' },
                  }}
                >
                  Call Patient
                </Button>
              </Box>
              <Stack spacing={0.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Aspirin 81 mg</Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: 15 }}>Daily</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Aspirin 81 mg</Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: 15 }}>Daily</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Aspirin 81 mg</Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: 15 }}>Twice daily</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={{ borderRadius: 2, p: 2, height: '100%' }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18, color: '#23293b', mb: 1 }}>
              Care Plan
            </Typography>
            <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, mt: 1, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', border: '1px solid #D0D5DD' }}>
              <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b', mb: 3 }}>
                Post-Discharge Instructions
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: 20, color: '#D0D5DD', mr: 1 }} />
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Daily weight monitoring</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: 20, color: '#D0D5DD', mr: 1 }} />
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Monitor for</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: 20, color: '#D0D5DD', mr: 1 }} />
                  <Typography sx={{ color: '#23293b', fontSize: 15 }}>Medication</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}