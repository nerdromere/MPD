export default function ContactMe({ multiplier }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("form");
    const formData = new FormData(formElement);
    formData.append('multiplier', multiplier);
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
        console.log("Success...")
        //set success and clear all values
      })
      .finally(fin => {

      })

  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="skills-section--heading">Join Me on This Adventure!</h1>
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
              required
            />
          </label>
          <label htmlFor="multiplier" className="contact--label">
            <span className="text-md">Multiplier (changeable)</span>
            <input
              disabled
              value={`${multiplier}x`}
              type="text"
              className="multiplier--input text-md"
              name="multiplier"
              id="multiplier"
              required
            />
          </label>
        </div>
        <label htmlFor="saintOrReferrer" className="contact--label">
          <span className="text-md">Saint name on the card I provided or whoever referred you</span>
          <input
            type="text"
            className="contact--input text-md"
            name="saintOrReferrer"
            id="saintOrReferrer"
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
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <p style={{ fontSize: "2vh", textAlign: "center" }}>(For security purposes, dashboard access will be provided only to those who I talk to in person, or get referred by someone who has already signed up)</p>
        <div>
          <input className="btn btn-primary contact--form--btn" type="submit" />
        </div>

      </form>
    </section>
  );
}
