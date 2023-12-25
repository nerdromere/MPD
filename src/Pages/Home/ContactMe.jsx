import { useState } from "react";

export default function ContactMe({ multiplierParent }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cantDonate, setCantDonate] = useState(false);
  const [saintOrReferrer, setSaintOrReferrer] = useState('');

  const [clickedButton, setClickedButton] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    setClickedButton(true);
    e.preventDefault();
    const formElement = document.getElementById("form");
    const formData = new FormData(formElement);
    formData.append('multiplier', cantDonate ? '0' : multiplierParent);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    fetch("https://script.google.com/macros/s/AKfycbwY0T3HATY0UCapR3oI-mO7nd4A4PvBe3T9eSrrLBbnhioDVARuwVganE3fxih60E67/exec", {
      method: "POST",
      body: formData
    })
      .catch(e => {
        console.log("Error...")
      })
      .then(res => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setZipCode('');
        setSaintOrReferrer('');
        setSubmitted(true);
        //set success and clear all values
      })
      .finally(fin => {

      })

  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="skills-section--heading">Join Me on This Mission!</h1>
      </div>
      <form id="form" className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="firstName" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="lastName" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phoneNumber" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <label htmlFor="zipCode" className="contact--label">
            <span className="text-md">Zip Code</span>
            <input
              type="text"
              className="contact--input text-md"
              name="zipCode"
              id="zipCode"
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              required
            />
          </label>
          <label htmlFor="multiplier" className="contact--label">
            <span className="text-md" style={{ textDecoration: cantDonate ? "line-through" : "none" }}>Multiplier</span>
            <input
              disabled
              value={cantDonate ? '0x' : `${multiplierParent}x`}
              type="text"
              className="multiplier--input text-md"
              name="multiplier"
              id="multiplier"
              required
            />
          </label>
        </div>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" name="checkbox" id="checkbox" checked={cantDonate} onChange={e => setCantDonate(!cantDonate)} />
          <span className="text-sm">Can't financially support at this time, but I want to help.</span>
        </label>
        <label htmlFor="saintOrReferrer" className="contact--label">
          <span className="text-md">Saint name on the card I provided or whoever referred you</span>
          <input
            type="text"
            className="contact--input text-md"
            name="saintOrReferrer"
            id="saintOrReferrer"
            value={saintOrReferrer}
            onChange={e => setSaintOrReferrer(e.target.value)}
            required
          />
        </label>
        {/* <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label> */}
        <p style={{ fontSize: "2vh", textAlign: "center" }}>(For security purposes, dashboard access will be provided only to those who I talk to in person, or get referred by someone who has already signed up)</p>
        <div>
          <input className="btn btn-primary contact--form--btn" type="submit" disabled={clickedButton} value={submitted ? "Successfully Submitted!" : "Submit"} />
        </div>

      </form>
    </section>
  );
}
