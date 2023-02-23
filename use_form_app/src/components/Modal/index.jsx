        import React from 'react'
        import FormItem from '../FormItem'
        import style from './index.module.css'
        import { CloseOutlined } from '@ant-design/icons'
        import { Routes, Route } from 'react-router-dom'

        export default function Modal({ modal, setModal }) {
        return (
            <div className={[style.modal, modal ? style.active : '' ].join(' ')}>
            <div className={style.modal_content}>
            <CloseOutlined className={style.cross_icon} onClick= {() => setModal(false)}/>

            <Routes>
                <Route path='/registration_form'
                element={
                    <FormItem
                    title={'Registration'}
                    button={{ 
                    submit: 'Registration', 
                    redirect: 'Login'
                    }}
                    info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                    form_type={'registration'}
                    link_url={'/login_form'}
                />
                }
            />
            
            <Route path='/login_form'
                element={
                    <FormItem
                    title={'Login'}
                    button={{ submit: 'Login', redirect: 'Registration'}}
                    info_text={'Reset password'}
                    form_type={'login'}
                    link_url={'/registration_form'}
                />
                }
            />
            

            <Route path='/reset_password_form'
                element={
                    <FormItem 
                    title={'Reset Password'}
                    button={{ submit: 'Send'}} 
                    info_text={'The temporary password is valid for 24 hours.'}
                    info_text_2={'To receive a temporary password, you must enter the email address you provided during registration.'}
                    form_type={'reset_password'}
                />
                }
            />

            </Routes>

            </div>
            </div>
        )
        }
