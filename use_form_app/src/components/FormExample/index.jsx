import React from 'react'
import { useForm } from 'react-hook-form'
import style from './index.module.css'

export default function FormExample() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submit = data => {
    console.log(data);
    reset();
  }

  const emailRegister = register('email', {
    required: '*The field "email" is required',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: '*Not valid email-format'
    }
  });

  const passwordRegister = register('password', {
    required: '*The field "password" is required',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: '*Password should contain minimum eight characters, at least one letter, one number and one special character'
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input 
          type='text' 
          name='email' 
          placeholder='Email' 
          {...emailRegister} 
        />
        
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          {...passwordRegister} 
        />

        <button>Send</button>
      </form>

      <div className={style.error_message}>
        {errors.email && <p>{errors.email?.message}</p>}
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
    </div>
  )
}