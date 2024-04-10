import React, {useContext} from 'react'
import { useApp, AppContext } from './App'

const Info = () => {
  const {name, email, phone, setName, setEmail, setPhone} = useContext(AppContext)

  const handleSubmit = () => {
    console.log(name)
    console.log(email)
    console.log(phone)
  }


  return (
    <div className="content">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <fieldset className='grid-items'>
          <div>
            <legend htmlFor="name">Name</legend>
            <input type="text" value={name} name="name" id="name" placeholder='e.g. Stephen King'
            onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div>
            <legend htmlFor="email">Email Address</legend>
            <input type="email"value={email} name="email" id="email" placeholder='e.g. stephenking@lorem.com'
            onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div>
            <legend htmlFor="phone">Phone Number</legend>
            <input type="text" value={phone} name="phone" id="phone" placeholder='e.g. +1 234 567 890'
            onChange={(e) => {setPhone(e.target.value)}}/>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Info
