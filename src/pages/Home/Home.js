import React from "react";
// import Dialogs from "../../components/Dialogs/Dialogs";
import Message from "../../components/Message/Message";
import "./Home.scss";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import Status from "../../components/Status/Status";
import ChatInput from "../../components/ChatInput/ChatInput";
import Dialogs from "../../containers/DialogsContainer";
import Messages from "../../Messages/Messages";
import dialogsJSON from "../../dialogs.json";

const { Search } = Input;

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <i>
                <Button shape="circle" icon={<TeamOutlined />} />
              </i>

              <span>Список диалогов</span>
            </div>
            <Button shape="circle" icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} items={dialogsJSON} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-username">Гай Юлий Цезарь</b>
              <div className="chat__dialog-status">
                <Status online />
              </div>
            </div>
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
      {/* <Dialogs
        userId={0}
        items={[
          {
            _id: "60ce646a7132365bc10198c3a47407db",
            text:
              "Я ща стрепсилс тебе куплю, потом заеду домой, покушаю, немного поботаю, и сяду наверно в доту играть",
            // isReaded: false,
            // created_at: new Date(),
            created_at: new Date("Sun May 12 2018 21:16:55"),
            user: {
              _id: "99f38414663ebf0e1846cc3292ffead3",
              fullname: "Jack the Ripper",
              avatar: null,
            },
          },
          {
            _id: "443ea0dc347e651a18721c9911a38149",
            text: "Привет, красотка, как дела?",
            // created_at: new Date(),
            created_at: new Date(),
            user: {
              _id: "7c9c44af8012eeca752c27c1a259f057",
              fullname: "Pocan Rovniy",
              avatar:
                "https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1",
            },
          },
          {
            _id: "3678e096d41e3cf02e6b76b7aac62d54",
            text: "Привет, красотка, как дела?",
            // created_at: new Date(),
            created_at: new Date(),
            user: {
              _id: "3678e096d41e3cf02e6b76b7aac62d54",
              fullname: "Автушнеко Андрей",
            },
          },
          {
            _id: "c725b22c3b6f708882dd48c1c802b0b9",
            text: "Привет, красотка, как дела?",
            // created_at: new Date(),
            created_at: new Date(),
            user: {
              _id: "c725b22c3b6f708882dd48c1c802b0b9",
              fullname: "Федор Михайлович",
            },
          },
        ]}
      /> */}

      {/* <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        date={new Date()}
        audio={
          "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
        }
        isReaded={false}
      /> */}
      {/* <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date()}
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
          {
            filename: "image2.jpg",
            url:
              "https://sun1-30.userapi.com/c857524/v857524759/1bb9bb/FthkHEUo2Hw.jpg?ava=1",
          },
          {
            filename: "image3.jpg",
            url:
              "https://sun1-89.userapi.com/c858332/v858332270/1a74df/RP8095QLc1s.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Hello, World!"
        date={new Date()}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        isTyping
      /> */}
    </section>
  );
};

export default Home;
