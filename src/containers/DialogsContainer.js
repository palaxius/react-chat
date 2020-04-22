import React, { useState } from "react";
import Dialogs from "../components/Dialogs/Dialogs";

const DialogsContainer = ({ items, userId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(items));

  const onChangeInput = (value) => {
    setFiltred(
      items.filter((dialog) => dialog.user.fullname.toLowerCase().indexOf(value) >= 0)
    );
    setValue(value);
  };

  return (
    <Dialogs
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      userId={userId}
    />
  );
};

export default DialogsContainer;
