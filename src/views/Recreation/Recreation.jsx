import React from 'react'
import './Recreation.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import FootCalendar from '../../components/Calendar/FootCalendar'
import League from '../../components/League/League'

import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Recreation = () => {
  


  const scheduleData = [
    { time: '8 AM', homeTeam: 'Team A', awayTeam: 'Team B' },
    { time: '9 AM', homeTeam: 'Team C', awayTeam: 'Team D' },
    { time: '11 AM', homeTeam: 'Team E', awayTeam: 'Team F' },
    // ... more game objects
  ];

  return (
    <div className="app__recreation">
      <Navbar />
      <div className="app__recreation section__padding" id="recreation">
        <div className="app__recreaction-content">

          <h1 className="headtext__playfair text__competitive flex__center"> Recreation </h1>
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Enim consequatur aspernatur unde, voluptatibus beatae non porro libero odit perspiciatis 
        sint deserunt architecto ullam dolorum? Ad porro magni perspiciatis expedita blanditiis voluptas, 
        nesciunt voluptatem ea quaerat voluptate sapiente rerum hic vitae!</p>
        </div>
        <div>
      <h1>League Schedule App</h1>
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>U6</Tab>
          <Tab>U8</Tab>
          <Tab>U9</Tab>
          <Tab>U10</Tab>
          {/* Add more tabs as needed */}
        </TabList>

        <TabPanel>
          {/* Content for the Home tab */}
          <p>Welcome to the League Schedule App!</p>
        </TabPanel>
        <TabPanel>
          {/* Content for the Schedule tab */}
          <League leagueName="Week1" gameDay="September 9th 2023" scheduleName={scheduleData} />
          <br></br>
          <League leagueName="Week2" gameDay="September 9th 2023" scheduleName={scheduleData} />
        </TabPanel>
        <TabPanel>
          {/* Content for the Schedule tab */}
          <League leagueName="Week1" gameDay="September 9th 2023" scheduleName={scheduleData} />
          <p>laksjdlfkja;skdjf</p>
        </TabPanel>
        <TabPanel>
          {/* Content for the Schedule tab */}
          <League leagueName="Week1" gameDay="September 9th 2023" scheduleName={scheduleData} />
          <p>laksjdlfkja;skdjf</p>
        </TabPanel>
   
      </Tabs>
    </div>
        <div>
      <FootCalendar
      events=''
      />
       </div>
      </div>
      <Footer />
    </div>
  )
}

export default Recreation