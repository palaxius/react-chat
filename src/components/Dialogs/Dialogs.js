import React from "react";
import "./Dialogs.scss";
import DialogItem from "../DialogItem/DialogItem";
import orderBy from "lodash/orderBy";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => {
      return (
        <DialogItem
          key={item._id}    
          isMe={item.user._id === userId}
          {...item}
        />
      );
    })}
  </div>
);

export default Dialogs;
