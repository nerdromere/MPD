export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Marathon a Day</span>{" "}
            {/* <br />
            Developer */}
          </h1>
          <p className="section--title">Greetings! I'm Illarion Eremenko</p>
          <p className="hero--section-description">
            A couple years ago, I came to the realization that the lack of proper love in the world is leading to 73 million abortions a year worldwide. We need take drastic measures to get this number down. This can be done by offering up suffering, raising money and awareness for pregnancy resource centers, and prayer.
            <br /><br />All under the premise of loving your neighbor.
            <br /><br />I aim to accomplish these by livestreaming myself running a marathon per day for a year (likely resting on Sundays)... and much more.

          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/mountain.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
