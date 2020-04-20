import React from "react";
import generateAvatar from "../../utility/helpers/generateAvatar";
import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`${user.fullname} avatar`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatar(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 80.52%)`,
        }}
        className="avatar avatar--default"
      >
        {firstChar}
      </div>
    );
  }
};

export default Avatar;
