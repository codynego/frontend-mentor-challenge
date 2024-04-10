import React from 'react'

const Addon = () => {
  return (
    <div className="content">
      <h1>Pick Add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="grid-items">
        <div className="grid-item">
          <div className="item">
          <input type="checkbox" name="" id="" />
          <div>
            <p>Arcade</p>
            <p>Access to multiplayer games</p>
          </div>
          </div>
          <p>+1/mo</p>
        </div>
        <div className="grid-item">
          <div className="item">
          <input type="checkbox" name="" id="" />
          <div>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          </div>
          <p>+1/mo</p>
        </div>
        <div className="grid-item">
          <div className="item">
          <input type="checkbox" name="" id="" />
          <div>
            <p>Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </div>
          </div>
          <p>+1/mo</p>
        </div>
    </div>
    </div>
  )
}

export default Addon;
