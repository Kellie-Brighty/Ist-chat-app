import React from 'react';

import './usercontainer.css';

const Usercontainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>Users Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    {/* <img alt="Online Icon" src='logo.png'/> */}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Usercontainer;