import React, { useContext } from "react";
import "./rightbar.scss";
import { AuthContext } from "../../context/authContext";

const rightbar = () => {



  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe </span>
                    changed their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe </span>
                    liked a post
              </p>
            </div>
            <span>10 mins ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe </span>
                    added a story
              </p>
            </div>
            <span>20 mins ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>John Doe </span>
                    added a new post
              </p>
            </div>
            <span>53 mins ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
};

export default rightbar;
