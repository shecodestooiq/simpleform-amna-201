import React, { useState } from 'react';
import InputField from './Component/InputField/InputField';
import TextAreaField from './Component/TextAreaField/TextAreaField';

function HW() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleClick = (forma) => {
    forma.preventDefault();
  };
return (
    <div >
      <InputField label="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <InputField label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextAreaField label="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit" onSubmit={handleClick}>Submit</button>
    </div>
  );
}

  

  

  


export default HW;