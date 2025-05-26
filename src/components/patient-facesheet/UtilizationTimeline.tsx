import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const COLORS = {
  office: '#2563eb',
  ed: '#f04438',
  ip: '#a259f7',
  upcoming: '#e5e7eb',
};

// Each month can have up to two events (row1, row2)
const timeline = [
  { month: 'Jun', row1: null, row2: null },
  { month: 'Jul', row1: { type: 'ip', count: 1 }, row2: { type: 'office', count: 1 } },
  { month: 'Aug', row1: { type: 'ed', count: 2 }, row2: null },
  { month: 'Sep', row1: { type: 'ed', count: 3 }, row2: null },
  { month: 'Oct', row1: { type: 'ed', count: 2 }, row2: null },
  { month: 'Nov', row1: { type: 'ip', count: 1 }, row2: { type: 'ed', count: 1 } },
  { month: 'Dec', row1: { type: 'ed', count: 1 }, row2: { type: 'office', count: 1 } },
  { month: 'Jan', row1: { type: 'ip', count: 1 }, row2: { type: 'ed', count: 1 } },
  { month: 'Feb', row1: { type: 'ip', count: 1 }, row2: { type: 'ed', count: 1 } },
  { month: 'Mar', row1: { type: 'office', count: 1 }, row2: { type: 'ip', count: 1 } },
  { month: 'Apr', row1: { type: 'office', count: 1 }, row2: null },
  { month: 'May', row1: { type: 'upcoming', count: 1 }, row2: null },
];

function Dot({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <Box sx={{ width: 32, height: 32, bgcolor: color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16, boxShadow: '0 1px 2px 0 rgba(16,24,40,0.04)' }}>
      {children}
    </Box>
  );
}

export default function UtilizationTimeline() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 1px 4px 0 rgba(16,24,40,0.04)', minHeight: 180 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: '#23293b', mb: 2 }}>
        Utilization Timeline
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, mb: 2, mt: 2 }}>
        {timeline.map((item) => (
          <Box key={item.month} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 40 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minHeight: 70 }}>
              <Box sx={{ height: 32 }}>
                {item.row1 && <Dot color={COLORS[item.row1.type as keyof typeof COLORS]}>{item.row1.count}</Dot>}
              </Box>
              <Box sx={{ height: 32 }}>
                {item.row2 && <Dot color={COLORS[item.row2.type as keyof typeof COLORS]}>{item.row2.count}</Dot>}
              </Box>
            </Box>
            <Typography sx={{ color: '#6b7280', fontSize: 14, mt: 1 }}>{item.month}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Dot color={COLORS.office}> </Dot>
          <Typography sx={{ color: '#23293b', fontSize: 15 }}>Office</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Dot color={COLORS.ed}> </Dot>
          <Typography sx={{ color: '#23293b', fontSize: 15 }}>ED</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Dot color={COLORS.ip}> </Dot>
          <Typography sx={{ color: '#23293b', fontSize: 15 }}>IP</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Dot color={COLORS.upcoming}> </Dot>
          <Typography sx={{ color: '#23293b', fontSize: 15 }}>Upcoming</Typography>
        </Box>
      </Box>
    </Box>
  );
}
