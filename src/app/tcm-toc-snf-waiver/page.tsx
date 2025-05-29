import { Box } from '@mui/material';

import HighRiskPatientAlert from '@/components/tcm-toc-snf-waiver/HighRiskPatientAlert';
import InfoCards from '@/components/tcm-toc-snf-waiver/InfoCards';
import PatientDetails from '@/components/tcm-toc-snf-waiver/PatientDetails';
import SelectedTable from '@/components/tcm-toc-snf-waiver/SelectedTable';
import StatSelector from '@/components/tcm-toc-snf-waiver/StatSelector';

export default function TCMTOCSNFWaiver() {
  // Render
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3 }}>
      <InfoCards />
      <HighRiskPatientAlert />
      <StatSelector />
      <SelectedTable />
      <PatientDetails />
    </Box>
  );
}
