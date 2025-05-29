'use client';

import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const patients = [
  {
    id: 1,
    name: 'James Wilson',
    age: 72,
    number: '#1',
    avatar: 'J',
    avatarColor: '#E3EFFF',
    avatarTextColor: '#4B5E7A',
    hospital: 'Memorial Hospital',
    dischargeDate: 'Mar 3, 2025',
    diagnosis: 'STEMI',
    icd: '211.0',
    risk: 'High Risk',
    riskColor: '#FBEAEA',
    riskTextColor: '#E24B43',
    riskLabel: 'High Risk',
    riskLabelColor: '#FBEAEA',
    riskLabelTextColor: '#E24B43',
    readmission: 'Readmission risk: 42%',
    readmissionColor: '#E24B43',
    readmissionFontWeight: 500,
    readmissionFontSize: 14,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    age: 65,
    number: '#2',
    avatar: 'M',
    avatarColor: '#E3EFFF',
    avatarTextColor: '#4B5E7A',
    hospital: "St Luke's Medical Center",
    dischargeDate: 'Mar 2, 2025',
    diagnosis: 'COPD',
    icd: '144.5',
    risk: 'Medium Risk',
    riskColor: '#FFF7E3',
    riskTextColor: '#B89B0E',
    riskLabel: 'Medium Risk',
    riskLabelColor: '#FFF7E3',
    riskLabelTextColor: '#B89B0E',
    readmission: null,
    readmissionColor: null,
    readmissionFontWeight: null,
    readmissionFontSize: null,
  },
];

export default function SelectedTable() {
  return (
    <Paper sx={{
      borderRadius: 2,
      boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)',
      p: 0,
      overflow: 'hidden',
      bgcolor: '#fff',
    }}>
      <Box sx={{ p: 3, pb: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 22, color: '#23293b', lineHeight: 1.2 }}>
          Recently Discharged Patients
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: 15, mt: 0.5 }}>
          Patients requiring initial contact within 48 hours of discharge
        </Typography>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650, background: '#fff' }}>
          <TableHead>
            <TableRow sx={{ background: '#F8F9FB' }}>
              <TableCell sx={{ color: '#7B849B', fontWeight: 700, fontSize: 13, border: 0 }}>PATIENT</TableCell>
              <TableCell sx={{ color: '#7B849B', fontWeight: 700, fontSize: 13, border: 0 }}>DISCHARGE INFO</TableCell>
              <TableCell sx={{ color: '#7B849B', fontWeight: 700, fontSize: 13, border: 0 }}>RISK</TableCell>
              <TableCell sx={{ color: '#7B849B', fontWeight: 700, fontSize: 13, border: 0 }}>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {/* PATIENT */}
                <TableCell sx={{ border: 0, py: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: p.avatarColor, color: p.avatarTextColor, width: 44, height: 44, fontWeight: 600, fontSize: 20 }}>
                      {p.avatar}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#23293b', lineHeight: 1 }}>{p.name}</Typography>
                      <Typography sx={{ color: '#6b7280', fontSize: 14, fontWeight: 400, lineHeight: 1.2 }}>{p.age} yrs</Typography>
                      <Typography sx={{ color: '#A0AEC0', fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>{p.number}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                {/* DISCHARGE INFO */}
                <TableCell sx={{ border: 0, py: 2.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: 15, color: '#23293b', lineHeight: 1 }}>{p.hospital}</Typography>
                    <Typography sx={{ color: '#6b7280', fontSize: 14, fontWeight: 400, lineHeight: 1.2 }}>{p.dischargeDate}</Typography>
                    <Typography sx={{ color: '#6b7280', fontSize: 14, fontWeight: 400, lineHeight: 1.2 }}>{p.diagnosis}</Typography>
                    <Typography sx={{ color: '#A0AEC0', fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>({p.icd})</Typography>
                  </Box>
                </TableCell>
                {/* RISK */}
                <TableCell sx={{ border: 0, py: 2.5, minWidth: 180 }}>
                  <Stack direction="column" spacing={0.5} alignItems="flex-start">
                    <Chip
                      label={p.riskLabel}
                      size="small"
                      sx={{
                        bgcolor: p.riskLabelColor,
                        color: p.riskLabelTextColor,
                        fontWeight: 600,
                        fontSize: 14,
                        height: 28,
                        borderRadius: 2,
                        px: 1.5,
                        mb: p.readmission ? 0.5 : 0,
                      }}
                    />
                    {p.readmission && (
                      <Typography sx={{ color: p.readmissionColor, fontWeight: p.readmissionFontWeight, fontSize: p.readmissionFontSize, ml: 0.5 }}>
                        {p.readmission}
                      </Typography>
                    )}
                  </Stack>
                </TableCell>
                {/* ACTIONS */}
                <TableCell sx={{ border: 0, py: 2.5, minWidth: 220 }}>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<PhoneInTalkIcon sx={{ color: '#eab308' }} />}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: 15,
                        color: '#23293b',
                        borderColor: '#E5E7EB',
                        bgcolor: '#fff',
                        px: 2.5,
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: '#F8F9FB',
                          borderColor: '#E5E7EB',
                        },
                      }}
                    >
                      Record Contact
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<InsertDriveFileIcon sx={{ color: '#4B5E7A' }} />}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: 15,
                        color: '#23293b',
                        borderColor: '#E5E7EB',
                        bgcolor: '#fff',
                        px: 2.5,
                        boxShadow: 'none',
                        '&:hover': {
                          bgcolor: '#F8F9FB',
                          borderColor: '#E5E7EB',
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}