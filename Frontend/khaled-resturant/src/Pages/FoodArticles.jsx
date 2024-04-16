import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function FoodArticles() {
  return (
    <div>
      <Helmet>
        <title>Food Articles</title>
      </Helmet>
      <Box>
        <h1>Food Article</h1>
      </Box>
    </div>
  );
}
