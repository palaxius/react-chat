import React from "react";
import "./Message.scss";
import { formatDistanceToNow } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import checkSvg from "../../assets/check.svg";
import notCheckSvg from "../../assets/notCheck.svg";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__content">
        {isMe && isReaded ? (
          <img
            className="message__icon-readed"
            src={checkSvg}
            alt="Message checked"
          />
        ) : (
          <img
            className="message__icon-readed"
            src={notCheckSvg}
            alt="Message didnt checked"
          />
        )}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>

        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>

          <div className="message__date">
            {formatDistanceToNow(
              date,
              { locale: ruLocale, addSuffix: true },
              { addSuffix: true }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

export default Message;
