import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FilterListIcon from '@mui/icons-material/FilterList';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import React, { useState } from 'react';

import { Patient } from '@/types/patient';

// Custom color mapping for flag reasons
const flagColorMap: Record<string, string> = {
  yellow: '#FFE066',
  blue: '#E0ECFF',
  red: '#FFD6D6',
  green: '#E6F4EA',
};
const flagTextColorMap: Record<string, string> = {
  yellow: '#A68B00',
  blue: '#1976D2',
  red: '#D32F2F',
  green: '#388E3C',
};

export type PatientListProps = {
  patients: Patient[];
};

const columns = [
  'Patient Name',
  'Gender',
  'Insurance',
  'Attributed Clinic',
  'Attributed Physician',
  'Last AWV',
  'CCM Eleg',
  'Chronic Conditions',
  'PMPM Cost',
  'RAF YTD (Var)',
  'HCC Gaps',
  'Care Gaps',
  'Flag Reason',
  'Actions',
];

const ROWS_PER_PAGE = 10;

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('raf');

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Sorting logic (mock, only by raf for now)
  const sortedPatients = [...patients].sort((a, b) => {
    if (sort === 'raf') return b.rafYtd - a.rafYtd;
    return 0;
  });

  const paginatedPatients = sortedPatients.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  return (
    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          Patient List
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <Select
              value={sort}
              onChange={e => setSort(e.target.value)}
              displayEmpty
              size="small"
              sx={{ fontWeight: 500 }}
            >
              <MenuItem value="raf">Sort by: Raf Score</MenuItem>
              {/* Add more sort options as needed */}
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Filter
          </Button>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Export
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col} sx={{ fontWeight: 600, background: '#F8F9FB', fontSize: 14 }}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPatients.map(patient => (
              <TableRow key={patient.id} hover>
                <TableCell>
                  <Typography fontWeight={500}>{patient.name}</Typography>
                </TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.insurance}</TableCell>
                <TableCell>{patient.attributedClinic}</TableCell>
                <TableCell>{patient.attributedPhysician}</TableCell>
                <TableCell>{patient.lastAWV}</TableCell>
                <TableCell>{patient.ccmEleg ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  {patient.chronicConditions.join(', ')}
                </TableCell>
                <TableCell>
                  ${patient.pmpmCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography component="span" fontWeight={500}>
                      {patient.rafYtd.toFixed(3)}
                    </Typography>
                    <Typography component="span" color="text.secondary" sx={{ ml: 0.5 }}>
                      ({patient.rafVar > 0 ? '+' : ''}{patient.rafVar.toFixed(2)})
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{patient.hccGaps}</TableCell>
                <TableCell>{patient.careGaps}</TableCell>
                <TableCell>
                  <Stack direction="column" spacing={0.5}>
                    {patient.flagReasons.map((flag, idx) => (
                      <Chip
                        key={flag.label + idx}
                        label={flag.label}
                        size="small"
                        sx={{
                          background: flagColorMap[flag.color],
                          color: flagTextColorMap[flag.color],
                          fontWeight: 500,
                          fontSize: 13,
                          height: 24,
                        }}
                      />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" aria-label="email">
                      <EmailIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="chart">
                      <InsertChartIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="calendar">
                      <CalendarMonthIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
        <Typography variant="body2" color="text.secondary">
          Showing {Math.min((page - 1) * ROWS_PER_PAGE + 1, patients.length)}-
          {Math.min(page * ROWS_PER_PAGE, patients.length)} of {patients.length} patients
        </Typography>
        <Pagination
          count={Math.ceil(patients.length / ROWS_PER_PAGE)}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          color="primary"
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
    </Paper>
  );
};

export default PatientList; 