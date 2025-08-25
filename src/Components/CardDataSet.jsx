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
    '&:hover': {
      backgroundColor: '#222',
    },
  },
};

export default function CardDataset({
  title = "Primary Title",
  subtitle = "Secondary Title",
  description = "This is a medium-weight description paragraph that explains the content of the card in a concise way.",
  href = "#",
}) {
  return (
    <Card sx={styles.card}>
      <CardContent>
        {/* Titles */}
        <Typography variant="h4" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          {subtitle}
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={styles.description}>
          {description}
        </Typography>

        {/* Go to button */}
        <Box sx={styles.buttonBox}>
          <Button variant="contained" href={href} sx={styles.button}>
            Go to
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
