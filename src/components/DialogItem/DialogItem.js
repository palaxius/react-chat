import React from "react";
// import Time from "../Time/Time";
import ReadStatus from "../ReadStatus/ReadStatus";
import "./DialogItem.scss";
import classNames from "classnames";
import { format, isToday } from "date-fns";
import Avatar from "../Avatar/Avatar";

const getMessageTime = (created_at) => {
  const newCreated_at = new Date(created_at);
  if (isToday(newCreated_at)) {
    return format(newCreated_at, "HH:mm");
  } else {
    return format(newCreated_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({
  user,
  unreaded,
  isMe,
  created_at,
  text,
  onSelect,
  _id,
  currentDialogId,
}) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline,
        "dialogs__item-selected": currentDialogId === _id,
      })}
      onClick={() => onSelect(_id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>{getMessageTime(created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <ReadStatus isMe={true} isReaded={false} />}
          {unreaded > 0 && (
            <div className="dialogs__item-count">{unreaded}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
