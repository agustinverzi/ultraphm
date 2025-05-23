'use client';

import { Box, Button } from '@mui/material';
import { useCallback, useState } from 'react';

type SelectedPatientsTableProps = {
  onTableSelect: (selectedTable: string) => void;
};

export default function SelectedPatientsTable({ onTableSelect }: SelectedPatientsTableProps) {
  // State
  const [selectedTable, setSelectedTable] = useState<string>('all');

  // Handlers
  const handleTableSelect = useCallback((selectedTable: string) => {
    setSelectedTable(selectedTable);
    onTableSelect(selectedTable);
  }, [onTableSelect]);

  // Render
  return (
    <Box sx={{
      bgcolor: 'white',
      borderColor: 'grey.300',
      borderRadius: 2,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'inline-flex',
      gap: 1,
      my: 3,
      p: 1,
    }}>
      <Button color="primary" onClick={() => handleTableSelect('all')} variant={selectedTable === 'all' ? "contained" : "text"}>All Patients</Button>
      <Button color="primary" onClick={() => handleTableSelect('wawc')} variant={selectedTable === 'wawc' ? "contained" : "text"}>Patients without AWC</Button>
      <Button color="primary" onClick={() => handleTableSelect('hrp')} variant={selectedTable === 'hrp' ? "contained" : "text"}>High Risk Patients</Button>
      <Button color="primary" onClick={() => handleTableSelect('hcc')} variant={selectedTable === 'hcc' ? "contained" : "text"}>HCC Gap Patients</Button>
      <Button color="primary" onClick={() => handleTableSelect('cgp')} variant={selectedTable === 'cgp' ? "contained" : "text"}>Care Gap Patients</Button>
    </Box>
  )
}
