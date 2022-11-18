import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const BlogCards = ({ item }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(item);
  const { id, context, imageUrl, date, email, title } = item;
  return (
    <Card
      sx={{ width: 300, marginTop: "2rem" }}
      onClick={() => navigate(`details/${id}`, { state: item })}
    >
      <CardMedia
        component="img"
        height="170"
        image={imageUrl}
        alt=""
        onClick={() => {
          navigate("details");
          !currentUser && alert("please log in to see details");
        }}
      />
      <CardContent sx={{ padding: "0" }}>
        <Box sx={{ bgcolor: "#EFEEFE", padding: "1rem" }}>
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              height: "4.7rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              fontWeight: "bold",
              lineHeight: "1.5rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "2rem",
              fontWeight: "bold",
              lineHeight: "1.5rem",
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "2.7rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {context}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <AccountCircleIcon />
          <Typography>{email}</Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default BlogCards;
