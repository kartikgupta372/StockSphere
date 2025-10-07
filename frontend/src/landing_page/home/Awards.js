import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
          <div className='row'>
            <div className='col-6 p-5'>
              <img src='media\images\largestBroker.svg' alt="Largest Brokerage"/>
            </div>
            <div className='col-6 p-5 mt-5'>
              <h1>Largest Broker in India</h1>
              <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              <div className='row'>
                <div className='col-6'> 
                <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Best Customer Service</p>
                </li>
                <li>
                  <p>Largest Brokerage</p>
                </li>
                <li>
                  <p>Many Joined</p>
                </li>
              </ul>
                </div>
                <div className='col-6'>
                <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Best Customer Service</p>
                </li>
                <li>
                  <p>Largest Brokerage</p>
                </li>
                <li>
                  <p>Many Joined</p>
                </li>
              </ul> </div>


              </div>
              <img src='media\images\pressLogos.png' style={{width:"90%"}} alt="Award" />
              

            </div>
          </div>
        </div>
      );
}

export default Awards;