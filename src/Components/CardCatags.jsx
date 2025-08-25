import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const styles = {
  card: {
    maxWidth: 400,
    boxShadow: 1,
  },
  description: {
    mt: 2,
  },
  buttonBox: {
    mt: 3,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 0,
    textTransform: 'none',
    fontSize: '1rem',
    px: 8, // longer button than CardDataset
    '&:hover': {
      backgroundColor: '#222',
    },
  },
};

export default function CardCatag({
  title = "Category Title",
  description = "This is a medium-weight description paragraph for a category card.",
  href = "#",
}) {
  return (
    <Card sx={styles.card}>
      <CardContent>
        {/* Title */}
        <Typography variant="h4" component="div" gutterBottom>
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={styles.description}>
          {description}
        </Typography>

        {/* Action button */}
        <Box sx={styles.buttonBox}>
          <Button variant="contained" href={href} sx={styles.button}>
            Explore
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
