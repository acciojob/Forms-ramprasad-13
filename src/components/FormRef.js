import React, { useRef } from 'react';

import Card from './Card';

// The form, identified by `id="info-form"`, must include:
// Full Name input (`id="full_name"`)
// Email input (`id="email"`)
// Password input (`id="password"`)
// Password Confirmation input (`id="password_confirmation"`)
// A `Submit` button to submit the form.

const FormRef = () => {

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

    function handleSubmit(e){
        e.preventDefault();
        let full_name = nameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let password_confirmation = confirmPasswordRef.current.value;
        console.log(full_name,email,password, password_confirmation)

    }

  return (
    <Card>
      <form id='info-form' onSubmit={handleSubmit}>
        <input id='full_name' name='full_name' type='text' placeholder='Full Name' ref={nameRef} />
        <input id='email' name='email' type='email' placeholder='Email' ref={emailRef} />
        <input id='password' name='password' type='text' placeholder='password' ref={passwordRef} />
        <input id='password_confirmation' name='password_confirmation' type='password' placeholder='Confirm password' ref={confirmPasswordRef} />
        <button type='submit'>Submit</button>
      </form>
    </Card>
  )
}

export default FormRef;
