import { Grid } from '@mui/material';

import Chat from '@/components/messages/Chat';
import Conversations from '@/components/messages/Conversations';
import PatientInformation from '@/components/messages/PatientInformation';

export default function Messages() {
  // Render
  return (
    <Grid container spacing={2} sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      <Grid size={{ xs: 3 }}>
        <Conversations />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Chat />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <PatientInformation />
      </Grid>
    </Grid>
  );
}
