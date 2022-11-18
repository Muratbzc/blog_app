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

const BlogCards = ({ item }) => {
  console.log(item);
  const { context, imageUrl, date, email, title } = item;
  return (
    <Card sx={{ width: 300, marginTop: "2rem" }}>
      <CardMedia component="img" height="170" image={imageUrl} alt="" />
      <CardContent>
        <CardHeader title={title} subheader={date} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "2rem",
            overflow: "hidden",
          }}
        >
          {context}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "3px",
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
