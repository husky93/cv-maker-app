import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: 'John Doe',
        title: 'JavaScript Developer',
        location: 'Kraków, PL',
        phone: '1235678995',
        email: 'example@google.com',
        website: 'https://example.com',
        experience: [
          {
            company: 'Example company',
            title: 'Junior Frontend Developer',
            date: 'July 2018 - November 2018',
            location: 'Kraków, PL',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          },
        ],
        education: [
          {
            school: 'Example University',
            degree: 'B.S. Web development',
            date: 'July 2011 - November 2014',
            location: 'Kraków, PL',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          },
        ],
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleAddClick(event) {
    event.preventDefault();
    const experience = [...this.state.form.experience];
    const education = [...this.state.form.education];
    if (event.target.classList.contains('exp-add')) {
      experience.push({
        company: '',
        title: '',
        date: '',
        location: '',
        description: '',
      });
    }
    if (event.target.classList.contains('edu-add')) {
      education.push({
        school: '',
        degree: '',
        date: '',
        location: '',
        description: '',
      });
    }

    this.setState({
      form: {
        ...this.state.form,
        experience,
        education,
      },
    });
  }

  handleDeleteClick(event) {
    event.preventDefault();
    const id = event.target.parentElement.dataset.id;
    const experience = [...this.state.form.experience];
    const education = [...this.state.form.education];
    if (event.target.classList.contains('exp-delete')) {
      experience.splice(id, 1);
    }
    if (event.target.classList.contains('edu-delete')) {
      education.splice(id, 1);
    }

    this.setState({
      form: {
        ...this.state.form,
        experience,
        education,
      },
    });
  }

  handleInputChange(event) {
    const key = event.target.dataset.name;
    const value = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
  }

  handleExperienceChange(event) {
    const key = event.target.dataset.name;
    const value = event.target.value;
    const id = parseInt(event.target.parentElement.dataset.id, 10);
    let experience = [...this.state.form.experience];
    let item = { ...experience[id] };
    item[key] = value;
    experience[id] = item;

    this.setState({
      form: {
        ...this.state.form,
        experience,
      },
    });
  }

  render() {
    return (
      <main className="main">
        <Form
          info={this.state.form}
          handleInputChange={this.handleInputChange}
          handleExperienceChange={this.handleExperienceChange}
          handleAddClick={this.handleAddClick}
          handleDeleteClick={this.handleDeleteClick}
        />
        <Display />
      </main>
    );
  }
}

export default Main;
