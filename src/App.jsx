
import React from 'react';
import Navbar from './components/Navbar';
import FirstSidebar from './components/FirstSidebar';
import SecondSlider from './components/SecondSlider';
import ThirdSlidebar from './components/ThirdSlidebar';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='grid lg:grid-cols-3 '>
        <div className=''>
          <FirstSidebar></FirstSidebar>
        </div>
        <div className=''> 
          <SecondSlider></SecondSlider>
        </div>
        <div className=''>
          <ThirdSlidebar></ThirdSlidebar>
        </div>
      </div>
    </>
  );
};

export default App;