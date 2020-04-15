import React from 'react';
import { defaultVariants } from '../animations';
import Card from "../components/Card";
import { IconGitHub, IconInstagram, IconLinkedIn, IconTwitter } from "../components/icons";
import Presence from '../components/Presence';
import SvgMagAvatar from '../components/SvgMagAvatar';
import SvgTomAvatar from '../components/SvgTomAvatar';

const icons = {
  twitter: IconTwitter,
  github: IconGitHub,
  instagram: IconInstagram,
  linkedin: IconLinkedIn
}

const avatars = {
  Magda: SvgMagAvatar,
  Tom: SvgTomAvatar
}

const AboutTemplate = ({
  frontmatter,
  children
}) => {
  return (
    <Presence key="aboutPage" {...defaultVariants}>
      <div>
        {frontmatter.cards.map(({
          name,
          email,
          body,
          social
        }) => (
            <Card
              avatar={avatars[name]}
              name={name}
              email={email}
              socialLinks={social.map(({ site, url }) => ({ Icon: icons[site], url }))}
              body={body}
            />
          ))}
      </div>
    </Presence>
  );
}

export default AboutTemplate;
