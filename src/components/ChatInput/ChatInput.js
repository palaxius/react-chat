import React, { useState } from "react";
import "./ChatInput.scss";
import { Input, Button } from "antd";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

import { UploadField } from "@navjobs/upload";

import { Picker } from "emoji-mart";

const ChatInput = ({}) => {
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState(false);

  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        {emoji && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <Button
          onClick={() => setEmoji(!emoji)}
          shape="circle"
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={(event) => setValue(event.target.value)}
        size="large"
        placeholder="Введите текст сообщения…"
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn",
          }}
          uploadProps={{
            accept: ".jpg,.jpeg,.png,.gif,.bmp",
            multiple: "multiple",
          }}
        >
          <Button shape="circle" icon={<CameraOutlined />} />
        </UploadField>

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
