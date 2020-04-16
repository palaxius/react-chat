import React from "react";
import Message from "../../components/Message/Message";

const Home = () => {
  return (
    <section className="home">
      <Message
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
    </section>
  );
};

export default Home;
