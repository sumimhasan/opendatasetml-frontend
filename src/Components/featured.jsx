import SearchBox from "./searchBox.jsx";
import { Box, Typography, Grid } from "@mui/material";
import CardDataset from "./CardDataSet.jsx";

const styles = {
  main: {
    width: "100%",
    height: "max-content",
    bgcolor: "#E0E0E0",
    padding: "3rem"
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: "2rem"
  },
  searchContainer: {
    flex: "1 1 250px",
    maxWidth: "400px"
  },
  cardSection: {
    marginTop: "3rem",
  },
  card: {
    height: "18rem", // just for layout preview
    borderRadius: "1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    bgcolor: "white",
    width:"28rem",
  }
};

export default function Featured() {
  return (
    <Box sx={styles.main}>
      <Box data-id="maincontenthere">
        {/* Header */}
        <Box data-id="placefortitleandsearchbox" sx={styles.headerRow}>
          <Typography variant="h5" sx={styles.title}>
            Featured
          </Typography>
          <Box sx={styles.searchContainer}>
            <SearchBox />
          </Box>
        </Box>

        {/* Card section */}
       <Box sx={styles.cardSection}>
  <Grid container spacing={8} justifyContent="center">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
        <CardDataset sx={styles.card}></CardDataset>
      </Grid>
    ))}
  </Grid>
</Box>
      </Box>
    </Box>
  );
}
