import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ActionAreaCard.css";

import { useNavigate } from "react-router-dom";

export default function ActionAreaCard(props) {
  const { image, alt, title, description } = props;

  let navigate = useNavigate();

  const handleMenuClick = (pageURL) => {
    // console.log(pageURL);
    if (pageURL == "BarGraphSort") {
      navigate("/barsort");
    } else if (pageURL == "BoxSort") {
      navigate("/boxsort");
    }
  };

  return (
    <Card
      className="homecard"
      sx={{ maxWidth: 345, margin: "20px" }}
      onClick={() => handleMenuClick(alt)}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
