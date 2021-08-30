import React from 'react'

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="section__center">
        <h1>Contact Us</h1>
        <form action="">
          <div className="items">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea placeholder="Write a Message..." name="" id="" cols="30" rows="10"></textarea>
          <button className="btn">SEND</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
