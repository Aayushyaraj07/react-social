import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const stories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/27489977/pexels-photo-27489977/free-photo-of-milky-way.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/23014699/pexels-photo-23014699/free-photo-of-modern-building-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Doe",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/18935891/pexels-photo-18935891/free-photo-of-a-hugging-couple-on-the-escalator-in-a-book-store.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "John Doe",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/27255224/pexels-photo-27255224/free-photo-of-a-mountain-with-snow-on-it-and-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "John Doe",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.dp} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
