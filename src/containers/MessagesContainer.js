import React, { useEffect, useRef } from "react";
import Messages from "../components/Messages/Messages";
import actions from "../redux/actions/messages";
import { connect } from "react-redux";

const MessagesContainer = ({
  items,
  currentDialogId,
  fetchMessages,
  isLoading,
}) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTo(0, 99999);
    }
  }, [items]);

  return <Messages blockRef={messageRef} items={items} isLoading={isLoading} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  actions
)(MessagesContainer);
