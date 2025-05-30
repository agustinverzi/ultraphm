'use client';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Pagination from '@mui/material/Pagination';

const patients = [
  {
    avatar: 'J',
    name: 'John Smith',
    dob: '05/12/1945',
    gender: 'Male',
    phone: '(555) 123-4567',
    conditions: ['Hypertension', 'Heart Failure', 'Diabetes', 'COPD'],
    risk: { label: 'High', color: '#fca5a5', text: '#b91c1c' },
    hcc: '3.837',
    lastContact: '3/8/2025',
    nextContact: '4/8/2025',
    status: { label: 'Enrolled', color: '#d1fae5', text: '#059669' },
  },
  {
    avatar: 'M',
    name: 'Linda Anderson',
    dob: '12/30/1951',
    gender: 'Female',
    phone: '(555) 345-6789',
    conditions: ['Hypertension'],
    risk: { label: 'Low', color: '#d1fae5', text: '#059669' },
    hcc: '0.729',
    lastContact: '3/12/20254',
    nextContact: '4/15/2025',
    status: { label: 'Not Enrolled', color: '#f3f4f6', text: '#6b7280' },
  },
  {
    avatar: 'L',
    name: 'Mary Johnson',
    dob: '11/03/1952',
    gender: 'Female',
    phone: '(555) 987-6543',
    conditions: ['Hypertension', 'Diabetes'],
    risk: { label: 'High', color: '#fca5a5', text: '#b91c1c' },
    hcc: '2.2023',
    lastContact: '3/15/2025',
    nextContact: '4/20/2025',
    status: { label: 'Enrolled', color: '#d1fae5', text: '#059669' },
  },
  {
    avatar: 'K',
    name: 'Michael Brown',
    dob: '09/15/1978',
    gender: 'Male',
    phone: '(555) 246-8101',
    conditions: ['Hypertension', 'Heart Failure', 'Diabetes'],
    risk: { label: 'Medium', color: '#fef9c3', text: '#b45309' },
    hcc: '2.928',
    lastContact: '3/20/2025',
    nextContact: '4/25/2025',
    status: { label: 'Enrolled', color: '#d1fae5', text: '#059669' },
  },
  {
    avatar: 'N',
    name: 'James Wilson',
    dob: '11/08/1990',
    gender: 'Male',
    phone: '(555) 135-7924',
    conditions: ['Hypertension', 'COPD'],
    risk: { label: 'Warning', color: '#fef3c7', text: '#b45309' },
    hcc: '3.442',
    lastContact: '3/25/2025',
    nextContact: '4/30/2025',
    status: { label: 'Enrolled', color: '#d1fae5', text: '#059669' },
  },
];

const conditionColors = {
  Hypertension: '#bfdbfe',
  'Heart Failure': '#c7d2fe',
  Diabetes: '#bae6fd',
  COPD: '#fbcfe8',
};

export default function PatientsTable() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(16,24,40,0.08)', p: 0, overflow: 'hidden' }}>
      <TableContainer>
        <Table sx={{ minWidth: 1100, '& th, & td': { border: 0 } }}>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f9fafb' }}>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14, py: 2 }}>PATIENT</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>CONTACT INFO</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>CONDITIONS</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>RISK</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>HCC SCORE</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>LAST CONTACT</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>CCM STATUS</TableCell>
              <TableCell sx={{ fontWeight: 700, color: '#6b7280', fontSize: 14 }}>OPPORTUNITY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.name} sx={{ '&:last-child td': { border: 0 } }}>
                <TableCell sx={{ py: 2, minWidth: 200 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#e0e7ef', color: '#2563eb', fontWeight: 700, width: 40, height: 40, fontSize: 18 }}>{p.avatar}</Avatar>
                    <Box>
                      <Typography sx={{ color: '#2563eb', fontWeight: 600, fontSize: 15, lineHeight: 1 }}>{p.name}</Typography>
                      <Typography sx={{ color: '#6b7280', fontSize: 13, lineHeight: 1.2 }}>{p.dob}</Typography>
                      <Typography sx={{ color: '#6b7280', fontSize: 13, lineHeight: 1.2 }}>{p.gender}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: '#23293b', fontSize: 15, fontWeight: 400, minWidth: 150 }}>{p.phone}</TableCell>
                <TableCell sx={{ minWidth: 220 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {p.conditions.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        sx={{
                          bgcolor: (conditionColors as Record<string, string>)[c] || '#e0e7ef',
                          color: '#2563eb',
                          fontWeight: 500,
                          fontSize: 13,
                          borderRadius: '8px',
                          px: 1.5,
                          height: 26,
                        }}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={p.risk.label}
                    sx={{
                      bgcolor: p.risk.color,
                      color: p.risk.text,
                      fontWeight: 500,
                      fontSize: 13,
                      borderRadius: '8px',
                      px: 1.5,
                      height: 26,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#23293b', fontWeight: 500, fontSize: 15 }}>{p.hcc}</TableCell>
                <TableCell sx={{ minWidth: 120 }}>
                  <Typography sx={{ color: '#23293b', fontWeight: 500, fontSize: 15, lineHeight: 1 }}>{p.lastContact}</Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: 13, lineHeight: 1.2 }}>Next: {p.nextContact}</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={p.status.label}
                    sx={{
                      bgcolor: p.status.color,
                      color: p.status.text,
                      fontWeight: 500,
                      fontSize: 13,
                      borderRadius: '8px',
                      px: 1.5,
                      height: 26,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Opportunity">
                      <IconButton size="small" sx={{ color: '#2563eb' }}>
                        <BarChartIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Calendar">
                      <IconButton size="small" sx={{ color: '#2563eb' }}>
                        <CalendarMonthIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Message">
                      <IconButton size="small" sx={{ color: '#2563eb' }}>
                        <ChatBubbleOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 1.5, bgcolor: '#fff', borderTop: '1px solid #f3f4f6' }}>
        <Typography sx={{ color: '#6b7280', fontSize: 14 }}>Showing 1 to 5 of 5 patients</Typography>
        <Pagination
          count={3}
          page={1}
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#2563eb',
              fontWeight: 500,
              fontSize: 15,
              borderRadius: '8px',
              minWidth: 36,
              height: 36,
            },
            '& .Mui-selected': {
              bgcolor: '#2563eb',
              color: '#fff',
            },
          }}
          renderItem={(item) => (
            <Box component="span" key={item.page || item.type}>
              {item.type === 'previous' && <Typography sx={{ color: '#23293b', fontSize: 18, px: 1 }}>{'<'}</Typography>}
              {item.type === 'next' && <Typography sx={{ color: '#23293b', fontSize: 18, px: 1 }}>{'Next >'}</Typography>}
              {item.type === 'page' && (
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    bgcolor: item.selected ? '#2563eb' : 'transparent',
                    color: item.selected ? '#fff' : '#2563eb',
                    fontWeight: 500,
                    fontSize: 15,
                    borderRadius: '8px',
                    minWidth: 36,
                    height: 36,
                    textAlign: 'center',
                    lineHeight: '36px',
                    mx: 0.5,
                  }}
                >
                  {item.page}
                </Box>
              )}
              {item.type === 'start-ellipsis' && <Typography sx={{ color: '#23293b', fontSize: 18, px: 1 }}>…</Typography>}
              {item.type === 'end-ellipsis' && <Typography sx={{ color: '#23293b', fontSize: 18, px: 1 }}>…</Typography>}
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}