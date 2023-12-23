export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="skills-section--heading">Join Me</h1>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
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
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
          <label htmlFor="zip-code" className="contact--label">
            <span className="text-md">Zip Code</span>
            <input
              type="text"
              className="contact--input text-md"
              name="zip-code"
              id="zip-code"
              required
            />
          </label>
          <label htmlFor="multiplier" className="contact--label">
            <span className="text-md">Multiplier</span>
            <input
              disabled
              type="text"
              className="multiplier--input text-md"
              name="multiplier"
              id="multiplier"
              required
            />
          </label>
        </div>
        <label htmlFor="saint-name" className="contact--label">
          <span className="text-md">Saint name on the card I provided or whoever referred you</span>
          <input
            type="text"
            className="contact--input text-md"
            name="saint-name"
            id="saint-name"
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
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
        <p style={{ fontSize: "2vh", textAlign: "center" }}>(For security purposes, dashboard access will be provided only to those who I talk to in person, or get referred by someone who has already signed up)</p>

      </form>
    </section>
  );
}
