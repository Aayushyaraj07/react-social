import React, { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./comments.scss"
import { AuthContext } from "../../context/authContext";
const comments = () => {
    const {currentUser} = useContext(AuthContext)
  const comments = [
    {
      id: 1,
      name: "Shushma Swaraj",
      userId: 101,
      profilePic:
        "https://images.pexels.com/photos/2245222/pexels-photo-2245222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eius autem doloribus rem fugiat eum recusandae cumque iure veniam dolorem atque porro enim corporis sequi accusantium impedit reprehenderit quod. Tempora ad sint eaque consequatur.",
      img: "https://images.pexels.com/photos/2245222/pexels-photo-2245222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Anshuman Bhaodria",
      userId: 102,
      profilePic:
        "https://images.pexels.com/users/avatars/11929/josh-sorenson-170.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eius autem doloribus rem fugiat eum recusandae cumque iure veniam dolorem atque porro enim corporis sequi accusantium impedit reprehenderit quod. Tempora ad sint eaque consequatur.",
      img: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.dp} alt="" />
            <input type="text" placeholder="Write a comment"/>
            <button><SendIcon/></button>
        </div>
      {comments.map((comments) => (
        <div className="comment">
          <img className="dp" src={comments.img} alt="" />
          <div className="info">
            <span>{comments.name}</span>
            <p>{comments.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default comments;
