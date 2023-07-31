import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
      </header>
      <section>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          tristique erat. Nullam suscipit id erat vel blandit. Sed maximus
          hendrerit purus a faucibus. Duis nec laoreet felis. Quisque quis
          elementum dolor. Sed vestibulum orci ac odio posuere, vitae fermentum
          arcu sollicitudin. Nulla volutpat, turpis eu ultrices tristique, arcu
          mi elementum ex, at vehicula nisl nunc ac massa. Ut aliquet felis ac
          lectus interdum egestas.
        </p>
      </section>
      <section>
        <h2>Our Team</h2>
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 1"
            className="team-member-img"
          />
          <h3>John Doe</h3>
          <p>Co-founder & CEO</p>
        </div>
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 2"
            className="team-member-img"
          />
          <h3>Jane Smith</h3>
          <p>Co-founder & CTO</p>
        </div>
        {/* Add more team members */}
      </section>
    </div>
  );
};

export default About;
