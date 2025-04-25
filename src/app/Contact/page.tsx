import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='Contact-form'>
        <form>
        <h2 className='fade-in'>Contact Us</h2>
          <input type="text"placeholder='Full Name'required />
          <input type="email"placeholder='Email'required />
          <input type="text"placeholder='Pasword'required />
          <textarea placeholder='Message' rows={4}required />
          <button type="submit">Submit</button>

        </form>
      </section>

    </div>
  )
}

export default Contact
