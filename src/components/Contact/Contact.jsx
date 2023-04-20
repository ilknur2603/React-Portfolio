import React from 'react'

const Contact = () => {
  return (
    <div>
    <h3>Contact</h3> 
    <form >
    <div>
    <label htmlFor="">Name:</label><br />
        <input type="text" size="50" placeholder='please enter your name' required />
    </div><br />
    <div>
    <label htmlFor="">Email:</label><br />
        <input type="email" size="50" placeholder='please enter your email' required />
    </div><br />
    <div>
    <label htmlFor="">Note:</label><br />
        <textarea name="" id="" cols="53" rows="10" placeholder='please enter your message' required></textarea><br /><br /><br />
    </div>

    <div>
        <input type="submit" className='btn btn-danger' value="Submit" />
    </div>
    </form><br /><br /><br /><br /><br />
    </div>
  )
}

export default Contact