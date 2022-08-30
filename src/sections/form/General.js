import React from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

const General = (props) => {
  const { info, handleInputChange } = props;

  return (
    <div className="form-general">
      <h2 className="group-heading">General Information</h2>
      <Input
        type="text"
        name="name"
        className="input--name"
        placeholder="Name"
        value={info.name}
        handleInputChange={handleInputChange}
      />
      <Input
        type="text"
        name="title"
        className="input--title"
        placeholder="Title"
        value={info.title}
        handleInputChange={handleInputChange}
      />
      <Textarea
        name="profile"
        className="input--profile"
        placeholder="Profile"
        value={info.profile}
        handleInputChange={handleInputChange}
      />
      <Input
        type="text"
        name="location"
        className="input--location"
        placeholder="Location"
        value={info.location}
        handleInputChange={handleInputChange}
      />
      <Input
        type="tel"
        name="phone"
        className="input--phone"
        placeholder="Phone number"
        value={info.phone}
        handleInputChange={handleInputChange}
      />
      <Input
        type="email"
        name="email"
        className="input--email"
        placeholder="E-mail address"
        value={info.email}
        handleInputChange={handleInputChange}
      />
      <Input
        type="url"
        name="website"
        className="input--website"
        placeholder="Website address"
        value={info.website}
        handleInputChange={handleInputChange}
      />
      <Input
        type="url"
        name="github"
        className="input--github"
        placeholder="Github"
        value={info.github}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default General;
