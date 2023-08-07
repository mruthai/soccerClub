import React from 'react'
import { useState } from 'react';
import './RecGameSch.css'

const RecGameSch = () => {
    const teams = [
        'U6 Black',
        'U6 Red',
        'U6 Purple',
        'U6 Green',
        'U6 Gray',
      ]
    
      const generateGameSchedule = () => {
        const numTeams = teams.length;
        const schedule = [];
    
        // Round-robin algorithm to generate the game schedule
        for (let i = 0; i < numTeams - 1; i++) {
          for (let j = i + 1; j < numTeams; j++) {
            schedule.push([teams[i], teams[j]]);
            
          }
        }
    
        return schedule;
      };
    
      const gameSchedule = generateGameSchedule();
    
      return (
        <div className="game__schedule">
          <h2>Game Schedule</h2>
          <ul className="match__day">
            {gameSchedule.map((match, index) => (
              <li className="match__day-who" key={index}>
                {match[0]} vs. {match[1]}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default RecGameSch

