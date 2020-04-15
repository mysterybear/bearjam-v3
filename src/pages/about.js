import React from "react";
import Card from "../components/Card";
import { IconTwitter, IconInstagram, IconLinkedIn, IconGitHub } from "../components/icons";

const AboutPage = () => {
  return (
    <div>
      <h1>sweet and lovely</h1>
      <Card
        name="Magda"
        email="magda@bearjam.dev"
        socialLinks={[
          { Icon: IconTwitter, url: `https://twitter.com/bymagdairis` },
          { Icon: IconLinkedIn, url: `https://linkedin.com/in/magdairispetford` },
          { Icon: IconInstagram, url: `https://instagram.com/bymagdairis` },
        ]}
        body="Magda is a digital designer with a background in film, photography and marketing."
      />
      <Card
        name="Tom"
        email="tom@bearjam.dev"
        socialLinks={[
          { Icon: IconTwitter, url: `https://twitter.com/mysterybear2` },
          { Icon: IconLinkedIn, url: `https://linkedin.com/in/tomatbearjam` },
          { Icon: IconGitHub, url: `https://github.com/mysterybear` },
        ]}
        body="Tom is really good"
      />
    </div>
  );
}

export default AboutPage;
