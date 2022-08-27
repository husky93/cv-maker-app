import React, { Component } from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="display-info">
        <div className="display-exp">
          <Heading className="main-heading" tag="h2" text="Experience" />
          {info.experience.map((item, index) => {
            return (
              <div className="experience-group" key={`exp-display-${index}`}>
                <Heading tag="h3" className="heading--mid" text={item.title} />
                <Text
                  tag="strong"
                  className="text--title"
                  text={item.company}
                />
                <div className="education-info">
                  <Text tag="span" className="text--cursive" text={item.date} />
                  <Text
                    tag="span"
                    className="text--cursive"
                    text={item.location}
                  />
                </div>
                <Text
                  tag="p"
                  className="text--description"
                  text={item.description}
                />
              </div>
            );
          })}
        </div>
        <div className="display-courses">
          <Heading className="main-heading" tag="h2" text="Courses" />
          <div className="courses-container">
            {info.courses.map((item, index) => {
              return (
                <div className="courses-group" key={`courses-display-${index}`}>
                  <Text tag="span" className="text--courses" text={item.name} />
                  <Text
                    tag="p"
                    className="courses--description"
                    text={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="display-edu">
          <Heading className="main-heading" tag="h2" text="Education" />
          {info.education.map((item, index) => {
            return (
              <div className="education-group" key={`edu-display-${index}`}>
                <Heading tag="h3" className="heading--mid" text={item.degree} />
                <Text tag="strong" className="text--title" text={item.school} />
                <div className="education-info">
                  <Text tag="span" className="text--cursive" text={item.date} />
                  <Text
                    tag="span"
                    className="text--cursive"
                    text={item.location}
                  />
                </div>
                <Text
                  tag="p"
                  className="text--description"
                  text={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Info;
