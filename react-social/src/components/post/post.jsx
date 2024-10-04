import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SendIcon from "@mui/icons-material/Send";
import Comments from "../comments/comments";
import "./post.scss"
import { Link } from "react-router-dom";

const post = ({post}) => {

  const [liked,setLiked] = useState(false)
  const [commentOpen,setcommentOpen] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }
  const toggleComment = () => {
    setcommentOpen(!commentOpen)
  }
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <Link className="user-info" to={"/profile/1"}>
            <img src={post.profilePic} alt="" />
            <div className="user-details">
            <span className="name">{post.name}  </span>
            <span className="date">10 mins ago</span>
            </div>
          </Link>
          <MoreHorizIcon />
        </div>
        <div className="post-img">
          <img src={post.img} alt="" />
        </div>
        <div className="caption">          
            <p><span>{post.name}</span> {post.desc}</p>
          </div>
        <div className="info">
          <div className="likes">
            {!liked ? <FavoriteBorderIcon onClick={toggleLike} /> : <FavoriteIcon onClick={toggleLike} sx={{ color: 'red' }}  />}
            <span>12 likes</span>
          </div>
          <div className="comments" onClick={toggleComment}>
            <TextsmsOutlinedIcon className="menu-icon" />
            <span>12 comments</span>
          </div>
          <div className="share">
            <SendIcon/>
            <span>12 Shares</span>
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default post;
