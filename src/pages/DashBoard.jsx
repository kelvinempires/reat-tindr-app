import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/chatContainer";
const Dashboard = () => {
  const characters = [
    {
      name: "kelvin luke",
      url: "https://i.pinimg.com/736x/76/7c/dc/767cdcf5baa9dcadfc3e574794a74051.jpg",
    },
    {
      name: "mike luke",
      url: "https://i.pinimg.com/736x/e1/e7/f5/e1e7f5be7e657b0a3a04dfb51feeee1a.jpg",
    },
    {
      name: "john",
      url: "https://i.pinimg.com/736x/3d/93/0d/3d930dacdd4d0df5976dd4cfca3967b0.jpg",
    },
    {
      name: "joy",
      url: "https://i.pinimg.com/736x/f9/17/a8/f917a8e1d9a05c9cd8534596bdf326e3.jpg",
    },
    {
      name: "ada",
      url: "https://i.pinimg.com/736x/ec/aa/a9/ecaaa92b66b82304ac69c304c4a145e0.jpg",
    },
    {
      name: "bob",
      url: "https://i.pinimg.com/736x/97/ea/12/97ea12854ee7fdbc52197a7f99109000.jpg", // Updated to an actual image URL
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
