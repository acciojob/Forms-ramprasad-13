import React from 'react'
import Card from './Card';

// The form, identified by `id="info-form"`, must include:
// Full Name input (`id="full_name"`)
// Email input (`id="email"`)
// Password input (`id="password"`)
// Password Confirmation input (`id="password_confirmation"`)
// A `Submit` button to submit the form.

const Form = () => {

    function handleSubmit(e){
        e.preventDefault();
        let full_name = e.target.full_name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let password_confirmation = e.target.password_confirmation.value;
        console.log(full_name,email,password, password_confirmation)

    }

  return (
    <Card>
    <form id='form-link' onSubmit={handleSubmit}>
      <input id='full_name' name='full_name' type='text' placeholder='Full Name' />
      <input id='email' name='email' type='email' placeholder='Email' />
      <input id='password' name='password' type='text' placeholder='password' />
      <input id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm password' />
      <button type='submit'>Submit</button>
    </form>
    </Card>
  )
}

export default Form;
