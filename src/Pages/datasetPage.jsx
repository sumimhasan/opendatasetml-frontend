import Navbar from '../Components/navbar.jsx';
import CardDataset from '../Components/CardDataSet.jsx';
import { Box, Grid } from '@mui/material';

const styles = {
  container: {
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    backgroundColor: '#E0E0E0', // light grey background
  },
};

export default function DatasetPage() {
  return (
    <div>
      <Navbar />
      <Box sx={styles.container}>
        <CardDataset />
        <CardDataset />
        <CardDataset />
        {/* Add more CardDataset components as needed */}
      </Box>
    </div>
  );
}
