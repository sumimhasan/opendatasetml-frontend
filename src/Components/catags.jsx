import { Box, Typography, Grid } from "@mui/material";
import CardCatag from "./CardCatags";
const styles = {
  main: {
    width: "100%",
    height: "max-content",
    bgcolor: "#CACACA",
    padding: "3rem"
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: "1.8rem"
  },
  cardSection: {
    marginTop: "2rem"
  },
  card: {
    height: "14rem", // slightly smaller
    borderRadius: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    bgcolor: "white",
    width: "20rem"
  }
};

export default function Categories() {
  return (
    <Box sx={styles.main}>
      <Box data-id="maincontenthere">
        {/* Header */}
        <Box data-id="category-header" sx={styles.headerRow}>
          <Typography variant="h5" sx={styles.title}>
            Categories
          </Typography>
        </Box>

        {/* Card section */}
        <Box sx={styles.cardSection}>
          <Grid container spacing={6} justifyContent="center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                <CardCatag sx={styles.card}></CardCatag>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
