import { Box, Typography } from '@mui/material';

export default function Detailbar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '14rem',
        bgcolor: 'black',
        display: 'flex',          // row layout for children
        justifyContent: 'space-around', // spread horizontally with space
        alignItems: 'center',
        mx:"auto",     // vertical align center of children
        p: 1,
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <Box
          key={item}
          sx={{
            width: '20%',           // about 90% total divided by 4 with gaps (adjust as needed)
            height: '0%',          // 80% height of parent
            color: 'white',
            display: 'flex',
            flexDirection: 'column',   // stack contents vertically inside each box
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 1,
            textAlign: 'center',
            px: 1,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            12+
          </Typography>
          <Typography variant="body1">Image dataset</Typography>
        </Box>
      ))}
    </Box>
  );
}
