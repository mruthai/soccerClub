import React from 'react'
import './League.css'
const League = ({ leagueName, gameDay, scheduleName}) => {
    return (
        <div>
          <h2>{leagueName} </h2>
          <h3>{gameDay}</h3>
          <ul className="schedule__team-st">
            {scheduleName.map((game, index) => (
              <li className="schedule__team" key={index}>
                <strong>{game.time}</strong> - {game.homeTeam} vs {game.awayTeam}
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default League