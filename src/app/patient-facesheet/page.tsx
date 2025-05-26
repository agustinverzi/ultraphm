import { Box, Grid } from '@mui/material';

import Header from '@/components/patient-facesheet/Header';
import KeyInformation from '@/components/patient-facesheet/KeyInformation';
import MedicationAdherence from '@/components/patient-facesheet/MedicationAdherence';
import UtilizationTimeline from '@/components/patient-facesheet/UtilizationTimeline';
import RecentVitalsAndLabs from '@/components/patient-facesheet/RecentVitalsAndLabs';
import OpenHCCs from '@/components/patient-facesheet/OpenHCCs';
import OpenQualityGaps from '@/components/patient-facesheet/OpenQualityGaps';

export default function PatientFacesheet() {
  return (
    <Box sx={{ bgcolor: '#f6f7fb', minHeight: '100vh' }}>
      <Header />
      <Grid container spacing={2} p={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <KeyInformation />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UtilizationTimeline />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MedicationAdherence />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentVitalsAndLabs />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <OpenHCCs />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <OpenQualityGaps />
        </Grid>
      </Grid>
    </Box>
  );
}
