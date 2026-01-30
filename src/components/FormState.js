import React, { useState } from 'react'
import Card from './Card';

// The form, identified by `id="info-form"`, must include:
// Full Name input (`id="full_name"`)
// Email input (`id="email"`)
// Password input (`id="password"`)
// Password Confirmation input (`id="password_confirmation"`)
// A `Submit` button to submit the form.

const FormState = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let full_name = fullName;
        let email_add = email;
        let pass = password;
        let password_confirmation = confirmPassword;
        console.log(full_name,email_add,pass, password_confirmation)

    }

  return (
    <Card>
    <form id='info-form' onSubmit={handleSubmit}>
      <input id='full_name' name='full_name' type='text' placeholder='Full Name' onChange={(e)=> setFullName(e.target.value)} />
      <input id='email' name='email' type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
      <input id='password' name='password' type='text' placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
      <input id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm password' onChange={(e)=> setConfirmPassword(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
    </Card>
  )
}

export default FormState;
