import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const heroStyles = {
  container: {
    width: '100%',
    p: 4,
    height: '50rem',
    bgcolor: '#E0E0E0',
   
    
  },
  mainContent: {
    mx: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    mt: '3rem',
  },
  headingLarge: {
    fontSize: '8rem',
    background: 'linear-gradient(90deg, #5E5E5E 0%, #000000 96%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
     fontFamily: "'Inria Sans', sans-serif"
  },
  headingMedium: {
    fontSize: '6rem',
    fontFamily: "'Inria Sans', sans-serif"
  },
  paragraph: {
    fontSize: '1.2rem',
    maxWidth: 900,
    mx: 'auto',
    mt: '2rem',
    fontFamily: "'Inria Sans', sans-serif"
  },
  actionSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    mt: 3,
    fontFamily: "'Inria Sans', sans-serif"
  },
  primaryButton: {
    bgcolor: 'black',
    color: 'white',
    width: '13.875rem',
    height: '3.75rem',
    fontSize: '1.25rem',
    fontFamily: "'Inria Sans', sans-serif"
  },
  secondaryButton: {
    bgcolor: 'white',
    color: 'black',
    width: '13.875rem',
    height: '3.75rem',
    fontSize: '1rem',
    border: '2px solid black',
    fontFamily: "'Inria Sans', sans-serif"
  },
};

export default function Hero() {
  return (
    <Box sx={heroStyles.container}>
      <Box id="main-content" sx={heroStyles.mainContent}>
        <Typography sx={heroStyles.headingLarge}>
          Let’s Have Best Dataset
        </Typography>
        <Typography>index of</Typography>
        <Typography sx={heroStyles.headingMedium}>OpenDatasets</Typography>
        <Typography sx={heroStyles.paragraph}>
          It&apos;s a comprehensive collection and index of massive open-source datasets, designed to help researchers, developers, and data scientists easily find the right data they need, ultimately ensuring they can train better-performing and more reliable machine learning models.
        </Typography>
        <Box id="action-section" sx={heroStyles.actionSection}>
          <Button sx={heroStyles.primaryButton}>Go Browse</Button>
          <Typography variant="body1" component="span">
            or
          </Typography>
          <Button sx={heroStyles.secondaryButton}>Add a Dataset</Button>
        </Box>
      </Box>
    </Box>
  );
}
