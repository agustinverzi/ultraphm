import { Box } from '@mui/material';

import AIInsights from '@/components/ccm/AIInsights';
import Filters from '@/components/ccm/Filters';
import Header from '@/components/ccm/Header';
import InfoCards from '@/components/ccm/InfoCards';
import PatientsTable from '@/components/ccm/PatientsTable';
import TableSelector from '@/components/ccm/TableSelector';

export default function CCM() {
  // Render
  return (
    <Box>
      <Header />
      <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', p: 3 }}>
        <InfoCards />
        <Filters />
        <TableSelector />
        <AIInsights />
        <PatientsTable />
      </Box>
    </Box>
  );
}
