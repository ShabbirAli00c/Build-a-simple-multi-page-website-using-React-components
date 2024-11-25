import React from 'react'

function Contact() {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
          <input type="text" placeholder='Full Name' required/>
        <form>
          <input type="email" placeholder='Email Adress' required/>
          <input type="text" placeholder='Phone Number' />
          <textarea placeholder='Your Message' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
