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
import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DeleteBlog } from "../helpers/functions";
import { BlogContext } from "../contexts/BlogContext";

const Details = () => {
  const { blogInfo, setBlogInfo } = useContext(BlogContext);
  const { state: item } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { id, context, imageUrl, date, email, title } = item;

  const handleDeleteBlog = () => {
    DeleteBlog(id);
    navigate("/");
  };
  const handleUpdateBlog = () => {
    setBlogInfo({
      ...blogInfo,
      id: item.id,
      context: item.context,
      title: item.title,
      imageUrl: item.imageUrl,
      date: new Date().toDateString(),
      email: item.email,
    });
    navigate(`updateblog/${id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Typography variant="h4" align="center">
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "15px",
            marginBottom: "15px",
          }}
        >
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment">
              <ChatBubbleTwoToneIcon />
            </IconButton>
          </CardActions>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ReplyIcon />}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Box>
      </Card>

      {currentUser.email === email && (
        <Box
          sx={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" onClick={handleUpdateBlog}>
            Update
          </Button>
          <Button variant="contained" onClick={handleDeleteBlog}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Details;
