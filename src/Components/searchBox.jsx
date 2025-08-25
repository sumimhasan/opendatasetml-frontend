import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
     <TextField
  variant="outlined"
  placeholder="Search..."
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon color="action" />
        </InputAdornment>
      ),
    },
  }}
/>

    </Box>
  );
}
