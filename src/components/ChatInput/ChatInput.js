import React, { useState } from "react";
import "./ChatInput.scss";
import { Input, Button } from "antd";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

const ChatInput = ({}) => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <Button shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(event) => setValue(event.target.value)}
        size="large"
        placeholder="Введите текст сообщения…"
      />
      <div className="chat-input__actions">
        <Button shape="circle" icon={<CameraOutlined />} />
        {!value ? (
          <Button shape="circle" icon={<AudioOutlined />} />
        ) : (
          <Button className="send" shape="circle" icon={<SendOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
