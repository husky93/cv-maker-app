import React, { Component } from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import IconGroup from '../../components/IconGroup';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as WebIcon } from '../../assets/icons/globe.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/map-pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/smartphone.svg';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="display-header">
        <div className="header-top">
          <Heading tag="h1" className="display-name" text={info.name} />
          <Text tag="strong" className="display-title" text={info.title} />
          <Text tag="p" className="display-profile" text={info.profile} />
        </div>
        <div className="header-bottom">
          <IconGroup text={info.email}>
            <MailIcon />
          </IconGroup>
          <IconGroup text={info.phone}>
            <PhoneIcon />
          </IconGroup>
          <IconGroup text={info.location}>
            <PinIcon />
          </IconGroup>
          <IconGroup text={info.website}>
            <WebIcon />
          </IconGroup>
          <IconGroup text={info.github}>
            <GithubIcon />
          </IconGroup>
        </div>
      </div>
    );
  }
}

export default Header;
