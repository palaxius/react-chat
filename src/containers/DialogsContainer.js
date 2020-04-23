import React, { useState, useEffect } from "react";
import Dialogs from "../components/Dialogs/Dialogs";
import actions from "../redux/actions/dialogs";
import { connect } from "react-redux";

const DialogsContainer = ({
  items,
  userId,
  fetchDialogs,
  setDialog,
  currentDialogId,
}) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(items));

  const onChangeInput = (value) => {
    setFiltred(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltred(items);
    }
  }, [items]);

  return (
    <Dialogs
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      userId={userId}
      onSelectDialog={setDialog}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, actions)(DialogsContainer);
