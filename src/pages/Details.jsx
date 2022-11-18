import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: item } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(item);
  const { id, context, imageUrl, date, email, title } = item;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginTop: "2rem" }}>
        ──── DETAILS ────
      </Typography>
      <Card
        sx={{
          width: "70%",
          marginTop: "2rem",
        }}
      >
        <CardMedia component="img" height="300" image={imageUrl} alt="" />
        <CardContent>
          <CardHeader title={title} subheader={date} />
          <Typography variant="body2" color="text.secondary">
            {context}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
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
    </Box>
  );
};

export default Details;
