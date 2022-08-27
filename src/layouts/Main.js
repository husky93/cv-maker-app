import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';
import '../assets/styles/Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: 'John Doe',
        title: 'JavaScript Developer',
        profile:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        location: 'Kraków, PL',
        phone: '1235678995',
        email: 'example@google.com',
        github: 'https://github.com',
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
        courses: [
          {
            name: 'The Odin Project',
            description: 'Open source free online Web Development course.',
          },
        ],
        skills: ['React', 'Javascript', 'HTML', 'CSS', 'Node.js'],
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSkillsInputChange = this.handleSkillsInputChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleAddClick(event) {
    event.preventDefault();
    const experience = [...this.state.form.experience];
    const education = [...this.state.form.education];
    const skills = [...this.state.form.skills];
    const courses = [...this.state.form.courses];

    if (event.target.classList.contains('exp-add') && experience.length < 3) {
      experience.push({
        company: '',
        title: '',
        date: '',
        location: '',
        description: '',
      });
    }
    if (event.target.classList.contains('edu-add') && education.length < 3) {
      education.push({
        school: '',
        degree: '',
        date: '',
        location: '',
        description: '',
      });
    }
    if (event.target.classList.contains('skills-add')) {
      skills.push('');
    }
    if (event.target.classList.contains('courses-add')) {
      courses.push({ name: '', description: '' });
    }

    this.setState({
      form: {
        ...this.state.form,
        experience,
        education,
        skills,
        courses,
      },
    });
  }

  handleDeleteClick(event) {
    event.preventDefault();
    let id = event.target.parentElement.dataset.id;
    const experience = [...this.state.form.experience];
    const education = [...this.state.form.education];
    const skills = [...this.state.form.skills];
    const courses = [...this.state.form.courses];

    if (event.target.classList.contains('exp-delete')) {
      experience.splice(id, 1);
    }
    if (event.target.classList.contains('edu-delete')) {
      education.splice(id, 1);
    }
    if (event.target.classList.contains('skills-delete')) {
      skills.splice(id, 1);
    }
    if (event.target.classList.contains('courses-delete')) {
      courses.splice(id, 1);
    }

    this.setState({
      form: {
        ...this.state.form,
        experience,
        education,
        skills,
        courses,
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

  handleSkillsInputChange(event) {
    const value = event.target.value;
    const index = event.target.dataset.index;
    const skills = [...this.state.form.skills];
    let skill = skills[index];

    skill = value;
    skills[index] = skill;

    this.setState({
      form: {
        ...this.state.form,
        skills,
      },
    });
  }

  handleInfoChange(event) {
    const key = event.target.dataset.name;
    const value = event.target.value;
    const id = parseInt(event.target.parentElement.dataset.id, 10);
    console.log(event.target.parentElement);
    const experience = [...this.state.form.experience];
    const education = [...this.state.form.education];
    const courses = [...this.state.form.courses];

    if (event.target.parentElement.classList.contains('form-experience')) {
      let item = { ...experience[id] };
      item[key] = value;
      experience[id] = item;
    }
    if (event.target.parentElement.classList.contains('form-education')) {
      let item = { ...education[id] };
      item[key] = value;
      education[id] = item;
    }

    this.setState({
      form: {
        ...this.state.form,
        experience,
        education,
        courses,
      },
    });
  }

  render() {
    return (
      <main className="main">
        <Form
          info={this.state.form}
          handleInputChange={this.handleInputChange}
          handleInfoChange={this.handleInfoChange}
          handleAddClick={this.handleAddClick}
          handleDeleteClick={this.handleDeleteClick}
          handleSkillsInputChange={this.handleSkillsInputChange}
        />
        <Display info={this.state.form} />
      </main>
    );
  }
}

export default Main;
