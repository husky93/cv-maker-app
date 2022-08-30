import React from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

const Expertise = (props) => {
  const { info } = props;
  return (
    <div className="display-expertise">
      <Heading tag="h2" text="Skills" className="main-heading" />
      <div className="expertise-content">
        {info.skills.map((text, index) => (
          <Text
            className="text--highlighted"
            tag="span"
            text={text}
            key={`display-skills-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
