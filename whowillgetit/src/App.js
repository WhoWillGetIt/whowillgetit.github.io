import styled from "styled-components";
import CreateUser from "./components/createBtn";
import UsersContainer from "./components/user";
import GetItCounter from "./components/getitCounter";
import { useCallback, useRef, useState } from "react";
import userImage1 from "./assets/images/users/user1.svg";
import userImage2 from "./assets/images/users/user2.svg";
import userImage3 from "./assets/images/users/user3.svg";
import backGroundText from "./assets/images/backgroundtext.svg";
console.log("app is running!!");

const BackGround = styled.div`
  /* 화면 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 크기 */
  width: 100vw;
  height: 100vh;
  background: #6768a6;

  animation: color-change-2x 2s linear infinite alternate both;
  @keyframes color-change-2x {
    0% {
      background: #6768a6;
    }
    100% {
      background: #b22cff;
    }
  }
`;

const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Marquee = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BackGroundMarqueeLeft = styled.marquee`
  z-index: 1;
`;
const BackGroundText = styled.img``;

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "default",
      img: `${userImage1}`,
    },
  ]);

  const images = [userImage1, userImage2, userImage3];

  const nextId = useRef(1);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const makeIamge = useCallback(() => {
    const randomNumber = rand(0, 2);
    return images[randomNumber];
  }, [images]);

  const createUser = useCallback(
    (name) => {
      const user = {
        id: nextId.current,
        name,
        img: makeIamge(),
      };
      setUsers([...users, user]);
      nextId.current++;
    },
    [users, makeIamge]
  );

  return (
    <>
      <BackGround className="container">
        <Marquee>
          <BackGroundMarqueeLeft>
            <BackGroundText src={backGroundText} />.
          </BackGroundMarqueeLeft>
          <BackGroundMarqueeLeft>
            <BackGroundText src={backGroundText} />.
          </BackGroundMarqueeLeft>
        </Marquee>
        <Content>
          <CreateUser className="btn" createUser={createUser}></CreateUser>
          <UsersContainer users={users}></UsersContainer>
          <GetItCounter></GetItCounter>
        </Content>
      </BackGround>
    </>
  );
}

export default App;