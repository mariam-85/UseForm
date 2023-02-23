import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import style from './index.module.css'
import { Link } from 'react-router-dom'



export default function FormItem( {title, button, form_type, info_text, info_text_2, link_url} ) {

    const { register, handleSubmit } = useForm();

    const submit = data => console.log(data);

    const emailRegister = register('email');
    const passwordRegister = register('password');

  return (

    <form onSubmit={handleSubmit(submit)} className={style.item_style}>
        <p className={style.text}>{ title }</p>
        <p className={style.text_text}>{ info_text_2 }</p>

        <Input 
        type="text" 
        name='email' 
        placeholder='Email'
        {...emailRegister} 
        />

        {
            ['registration', 'login'].includes(form_type)
            ? <Input 
                type="password" 
                name='password' 
                placeholder='Password'
                {...passwordRegister} 
                />
                : ''
        }

        
        {
            form_type === 'login'
            ? <Link to='/reset_password_form' style={{ textDecoration:
            'none'}}>
            <p className={[style.text_text, style.text_text_link].join(' ')}>{ info_text }</p>
            </Link>
            : <p className={style.text_text}>{ info_text }</p>

        }
        

        <Button color='yellow'>{ button.submit }</Button>

        {
            ['registration', 'login'].includes(form_type)
            ? <Link to={link_url} style={{textDecoration: 'none'}}>
            <Button color='white'>{button.redirect}
            </Button>
            </Link>
            : ''
        }

        {/* {button.redirect && <Button color="white">{button.redirect}</Button>} */}


    </form>
  )
}
