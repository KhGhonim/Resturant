import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function CardItem({ city, imageLink, category, name }) {
  const navigate = useNavigate();

  return (
    <Card

      sx={{
        maxWidth:350,
        color: "whitesmoke",
        ":hover": { cursor: "pointer" },

      }}
      className="flex justify-between flex-col bg-whitesmoke"
    >
      <CardHeader title={name} subheader={category} />
      <CardMedia
        component="img"
        sx={{objectFit:"cover"}}
        image={imageLink}
        alt={name}
        onClick={() => {
          navigate(`/FoodArticles/${name}`);
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        disableSpacing
      >
        <IconButton
          sx={{ "&:hover": { color: "#ca1c31" } }}
          aria-label="Add to Favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" color="inherit">
          This Meal is available at {city}
        </Typography>
        <IconButton
          sx={{ "&:hover": { color: "#85b8e5" } }}
          aria-label="Add to Cart"
        >
          <ShoppingBag />
        </IconButton>
      </CardActions>
    </Card>
  );
}
