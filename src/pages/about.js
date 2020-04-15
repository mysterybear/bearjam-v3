import React from "react";
import Card from "../components/Card";
import { IconTwitter, IconInstagram, IconLinkedIn, IconGitHub } from "../components/icons";
import SvgMagAvatar from '../components/SvgMagAvatar';
import SvgTomAvatar from '../components/SvgTomAvatar';

const AboutPage = () => {
  return (
    <div>
      <Card
        avatar={SvgMagAvatar}
        name="Magda"
        email="magda@bearjam.dev"
        socialLinks={[
          { Icon: IconTwitter, url: `https://twitter.com/bymagdairis` },
          { Icon: IconLinkedIn, url: `https://linkedin.com/in/magdairispetford` },
          { Icon: IconInstagram, url: `https://instagram.com/bymagdairis` },
        ]}
        body="Magda is a digital designer with a background in film, photography and marketing..."
      />
      <Card
        avatar={SvgTomAvatar}
        name="Tom"
        email="tom@bearjam.dev"
        socialLinks={[
          { Icon: IconTwitter, url: `https://twitter.com/mysterybear2` },
          { Icon: IconLinkedIn, url: `https://linkedin.com/in/tomatbearjam` },
          { Icon: IconGitHub, url: `https://github.com/mysterybear` },
        ]}
        body="Tom is a React developer with a background in systems engineering..."
      />
    </div>
  );
}

export default AboutPage;
