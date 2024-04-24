import "./FlipCard.css"
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";


const FlipCard = ({ imageUrl, name, weight }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  //function that handles the click event
  const handleClick = () => {
    setIsFlipped(!isFlipped); // Toggle the state of isflipped
  };

  return (
    <div className="pokemon-card" >
      <ReactCardFlip //manage the flipping of the card
      isFlipped={isFlipped} //checking if the card is flipped
      flipDirection="horizontal">
        
        {/* Front side of the card */}
        <div
          className="card-front"
          onClick={handleClick} // click event handler
          style={{
            cursor: "pointer", // Styling to change the cursor to a pointer
          }}
        >
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
        </div>
        {/* Back side of the card*/}
        <div
          className="card-back"
          onClick={handleClick}
        >
          <h2>{name}</h2>
          

        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
