import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function HighRiskPatientAlert() {
  return (
    <Alert
      icon={<InfoOutlinedIcon sx={{ color: '#d32f2f', fontSize: 20, mt: 0.5 }} />}
      sx={{
        bgcolor: '#fdf3f3',
        color: '#d32f2f',
        border: '1px solid #d32f2f',
        borderRadius: '6px',
        boxShadow: 'none',
        py: 1,
        px: 1.5,
        alignItems: 'flex-start',
        fontSize: 16,
        minHeight: 40,
        '& .MuiAlert-icon': {
          mt: 0.5,
        },
        '& .MuiAlert-message': {
          width: '100%',
        },
      }}
      elevation={0}
    >
      <AlertTitle sx={{
        color: '#d32f2f',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.2,
        mb: 0.5,
        display: 'flex',
        alignItems: 'center',
      }}>
        High Risk Patient Alert
      </AlertTitle>
      James Wilson has a high readmission risk score. Prioritize contact within 24 hours.
    </Alert>
  );
}