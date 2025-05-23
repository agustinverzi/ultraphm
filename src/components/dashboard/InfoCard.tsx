import { Box, Typography } from '@mui/material';

type InfoCardProps = {
  note: string;
  title: string;
  value: number;
};

export default function InfoCard({ note, title, value }: InfoCardProps) {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderLeft: '6px solid #4f46e5',
        borderRadius: 3,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: 220,
        overflow: 'hidden',
        paddingLeft: 3,
        position: 'relative',
      }}
    >
      <Typography
        sx={{
          color: 'grey.700',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.1,
          mb: 0.5,
          mt: 2.5,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '90%',
        }}
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'black',
          fontSize: 40,
          fontWeight: 700,
          marginY: 5,
        }}
        variant="h1"
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: 'grey.600',
          fontSize: 16,
          fontWeight: 400,
        }}
        variant="body2"
      >
        {note}
      </Typography>
    </Box>
  );
}
