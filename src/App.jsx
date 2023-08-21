import playerData from "./playerData";
import { useState } from "react";

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true);
  function toggleCard() {
    setShowPicture(!showPicture);
  };

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  } else {
    const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
      <p key={statName}>
        {statName}: {statValue}
      </p>
    ));

    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>
        {statsDisplay}
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => <BaseballCard
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    key={player.cardId} />
  );

  return <>
    {cards}
  </>;
}

export default App;

// destructuring const cards
// const cards = playerData.map(({ name, team, position, stats, imgUrl, cardId }) => (
// <BaseballCard 
// name={name}
// team={team}
// position={position}
// stats={stats}
// imgUrl={imgUrl}
// key={cardId}
// />
// ));

// this works too:
// const cards = playerData.map((player) => (
// <BaseballCard {...player} key={player.cardId />}
// ))