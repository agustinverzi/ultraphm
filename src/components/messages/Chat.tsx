import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import TagIcon from '@mui/icons-material/Tag';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';

export default function Chat() {
  return (
    <Box sx={{ bgcolor: '#F6F7F9', minHeight: '100vh', p: 0, fontFamily: 'Inter, sans-serif' }}>
      {/* Patient Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pb: 1.5, bgcolor: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <Avatar sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', width: 48, height: 48, fontWeight: 600, fontSize: 24, mr: 2 }}>P</Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 17, color: '#1A1A1A' }}>John Smith</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 14, fontWeight: 500 }}>
            DOB: 05/12/1965 · MRN: 1038293 · Medicare
          </Typography>
        </Box>
      </Box>
      {/* TCM Care Program Timeline */}
      <Box sx={{ bgcolor: '#fff', borderBottom: '1px solid #E5E7EB', p: 2, pt: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 15, color: '#1A1A1A', flex: 1 }}>TCM Care Program Timeline</Typography>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 14 }}>5 of 8 requirements met</Typography>
          <IconButton size="small" sx={{ ml: 1, color: '#A0AEC0' }}>
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', height: 6, bgcolor: '#E5E7EB', borderRadius: 3, mb: 2 }}>
          <Box sx={{ width: '62.5%', height: '100%', bgcolor: '#4B5E7A', borderRadius: 3 }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <CheckCircleIcon sx={{ color: '#5B8C6A', fontSize: 28, mb: 0.5 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13 }}>Initial Contact</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 12 }}>Completed</Typography>
          </Box>
          <Box sx={{ flex: 0.1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <CheckCircleIcon sx={{ color: '#5B8C6A', fontSize: 28, mb: 0.5 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13 }}>Medication Review</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 12 }}>Completed</Typography>
          </Box>
          <Box sx={{ flex: 0.1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <WarningAmberIcon sx={{ color: '#E24B43', fontSize: 28, mb: 0.5 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13 }}>Follow-up Visit</Typography>
            <Typography sx={{ color: '#E24B43', fontSize: 12 }}>Due in 3 days</Typography>
          </Box>
          <Box sx={{ flex: 0.1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <CheckCircleIcon sx={{ color: '#A0AEC0', fontSize: 28, mb: 0.5 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13 }}>Care Plan Review</Typography>
            <Typography sx={{ color: '#A0AEC0', fontSize: 12 }}>Pending</Typography>
          </Box>
        </Box>
        <Alert icon={false} sx={{ bgcolor: '#FFF7E3', color: '#B89B0E', fontWeight: 500, fontSize: 13, borderRadius: 1.5, p: 1, border: '1px solid #FFF7E3', mb: 1 }}>
          TCM billing requires a complete follow-up visit within 7 days of discharge. Schedule visit by Apr 2 to meet requirements.
        </Alert>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Chip label="TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mr: 1 }} />
          <Typography sx={{ color: '#4B5E7A', fontSize: 14, fontWeight: 500, mr: 1 }}>· Active care management</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 14, fontWeight: 500, mr: 1 }}>Assigned to:</Typography>
          <Chip label="Sarah Johnson" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22 }} />
        </Box>
      </Box>
      {/* Chat Timeline */}
      <Box sx={{ p: 2, pb: 0, bgcolor: '#F6F7F9' }}>
        <Typography sx={{ color: '#A0AEC0', fontWeight: 700, fontSize: 12, mb: 1, letterSpacing: 1 }}>TODAY</Typography>
        {/* Dr. Wilson message */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 0, p: 1.5, mb: 1, border: '1px solid #E5E7EB' }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, mb: 0.5 }}>Dr. Wilson</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 13, mb: 0.5 }}>10:42 AM</Typography>
          <Typography sx={{ color: '#1A1A1A', fontSize: 14, mb: 0.5 }}>
            Just reviewed labs for <Chip label="@p John Smith" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" />
            Potassium is low at 3.2. Please adjust supplements per the <Chip label="@c TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> protocol.
          </Typography>
        </Box>
        {/* User message (blue bubble) */}
        <Box sx={{ bgcolor: '#4B5E7A', borderRadius: 2, p: 1.5, mb: 1, color: '#fff', maxWidth: '90%', ml: 'auto' }}>
          <Typography sx={{ fontSize: 14, mb: 0.5 }}>
            I&apos;ll follow up with <Chip label="@p John Smith" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> today about the potassium supplement.<br />
            <Chip label="@s Sarah Johnson" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> could you arrange home health visits under the <Chip label="@c TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> plan?
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#C7D0E1', fontWeight: 500 }}>#TCM</Typography>
        </Box>
        {/* Sarah Johnson message */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 0, p: 1.5, mb: 1, border: '1px solid #E5E7EB' }}>
          <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 15, mb: 0.5 }}>Sarah Johnson</Typography>
          <Typography sx={{ color: '#A0AEC0', fontSize: 13, mb: 0.5 }}>11:15 AM</Typography>
          <Typography sx={{ color: '#1A1A1A', fontSize: 14, mb: 0.5 }}>
            I&apos;ve scheduled home health visits for <Chip label="@p John Smith" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> starting tomorrow. Also,<br />
            <Chip label="@d Dr. Rodriguez" size="small" sx={{ bgcolor: '#E3EFFF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> requested a cardiology follow-up as part of the <Chip label="@c TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> care plan.
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#C7D0E1', fontWeight: 500 }}>#TCM</Typography>
        </Box>
        {/* Clinical Insight alert */}
        <Alert icon={false} sx={{ bgcolor: '#FFF7E3', color: '#B89B0E', fontWeight: 500, fontSize: 13, borderRadius: 1.5, p: 1.5, border: '1px solid #FFF7E3', mb: 1, display: 'flex', alignItems: 'center' }}>
          <WarningAmberIcon sx={{ color: '#B89B0E', mr: 1 }} />
          <Box>
            <Typography sx={{ color: '#B89B0E', fontWeight: 600, fontSize: 14, mb: 0.5 }}>Clinical Insight</Typography>
            <Typography sx={{ color: '#B89B0E', fontSize: 13 }}>
              Patient has risk factors for heart failure exacerbation. Consider checking for edema, weight gain, and medication adherence at the next TCM visit. This aligns with HCC85 documentation requirements.
            </Typography>
            <Button variant="text" sx={{ color: '#B89B0E', fontWeight: 600, fontSize: 13, textTransform: 'none', p: 0, minHeight: 0, minWidth: 0 }}>Add to Note</Button>
          </Box>
        </Alert>
        {/* System message */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 0, p: 1.5, mb: 1, border: '1px solid #E5E7EB' }}>
          <Typography sx={{ color: '#A0AEC0', fontSize: 13, mb: 0.5 }}>
            <Chip label="@p John Smith" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" />
            Has been scheduled for a cardiology appointment with <Chip label="@d Dr. Rodriguez" size="small" sx={{ bgcolor: '#E3EFFF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> on Apr 2, 2025, at 10:30 AM.
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#C7D0E1', fontWeight: 500 }}>#System</Typography>
        </Box>
        {/* TCM Milestone Completed */}
        <Alert icon={false} sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 500, fontSize: 13, borderRadius: 1.5, p: 1.5, border: '1px solid #E9FDF2', mb: 1, display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon sx={{ color: '#5B8C6A', mr: 1 }} />
          <Box>
            <Typography sx={{ color: '#5B8C6A', fontWeight: 600, fontSize: 14, mb: 0.5 }}>TCM Milestone Completed</Typography>
            <Typography sx={{ color: '#5B8C6A', fontSize: 13 }}>
              Medication reconciliation requirement completed. 5 of 8 TCM requirements have been met. Schedule a face-to-face visit within the next 3 days to ensure TCM billing eligibility.
            </Typography>
            <Button variant="text" sx={{ color: '#5B8C6A', fontWeight: 600, fontSize: 13, textTransform: 'none', p: 0, minHeight: 0, minWidth: 0 }}>View Progress</Button>
          </Box>
        </Alert>
        {/* User message (blue bubble) with file */}
        <Box sx={{ bgcolor: '#4B5E7A', borderRadius: 2, p: 1.5, mb: 1, color: '#fff', maxWidth: '90%', ml: 'auto' }}>
          <Typography sx={{ fontSize: 14, mb: 0.5 }}>
            I noticed <Chip label="@p John Smith" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> also qualifies for <Chip label="@c TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> Should we enroll him after completing the <Chip label="@c TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mx: 0.5 }} component="span" /> requirements?
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#EEF0FF', borderRadius: 1, p: 1, mt: 1, mb: 1 }}>
            <InsertDriveFileIcon sx={{ color: '#4B5E7A', fontSize: 20, mr: 1 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13, flex: 1 }}>CCM_Eligibility_Checklist.pdf</Typography>
          </Box>
          <Typography sx={{ fontSize: 12, color: '#C7D0E1', fontWeight: 500 }}>#CCM</Typography>
        </Box>
        {/* Care Plan Recommendation */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 0, p: 1.5, mb: 1, border: '1px solid #4B5E7A' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <TagIcon sx={{ color: '#4B5E7A', fontSize: 20, mr: 1 }} />
            <Typography sx={{ color: '#4B5E7A', fontWeight: 700, fontSize: 14, flex: 1 }}>Care Plan Recommendation</Typography>
          </Box>
          <Typography sx={{ color: '#4B5E7A', fontSize: 13, mb: 1 }}>
            Based on recent conversation, patient may benefit from adding a low-sodium diet and daily weight monitoring to care plan. This would address HCC85 (CHF) management.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#4B5E7A', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 1.5, textTransform: 'none', width: 'fit-content', boxShadow: 'none', '&:hover': { bgcolor: '#3A36B6' } }}>
            View Guidelines
          </Button>
        </Box>
        {/* Tag bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
          <Chip label="#TCM" size="small" sx={{ bgcolor: '#EEF0FF', color: '#4B5E7A', fontWeight: 700, fontSize: 12, height: 22, mr: 1 }} />
          <Chip label="#CCM" size="small" sx={{ bgcolor: '#E9FDF2', color: '#5B8C6A', fontWeight: 700, fontSize: 12, height: 22, mr: 1 }} />
          <Chip label="#General" size="small" sx={{ bgcolor: '#FBEAEA', color: '#E24B43', fontWeight: 700, fontSize: 12, height: 22, mr: 1 }} />
          <Button startIcon={<AddIcon />} sx={{ color: '#4B5E7A', fontWeight: 600, fontSize: 13, textTransform: 'none', minWidth: 0, p: 0.5, ml: 1 }}>
            Add Tag
          </Button>
        </Box>
        {/* Message input */}
        <Paper sx={{ display: 'flex', alignItems: 'center', p: 1, borderRadius: 2, boxShadow: 0, border: '1px solid #E5E7EB', bgcolor: '#fff' }}>
          <TextField
            variant="standard"
            placeholder="Type a message... Use @d for doctors, @s for staff, @p for patients, @c for care programs"
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: 15, color: '#1A1A1A', flex: 1 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: '#4B5E7A' }}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Paper>
      </Box>
    </Box>
  );
}