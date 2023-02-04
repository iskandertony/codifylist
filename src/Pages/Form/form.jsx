import React from 'react'
import { ReactComponent as Logo } from '../../imgs/Union.svg'
import { Input } from 'antd'
import './form.scss'
import Registr from '../../Components/Button/registr'
import { useForm, Controller } from 'react-hook-form'
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        control,
        setError,
    } = useForm({ mode: 'onChange' })
    const handleCheck = (data) => {
        if (getValues('password') === getValues('password_check')) {
            console.log('your data:', data)
        } else {
            setError('password', { message: 'please same password' })
            setError('password_check', { message: 'please same password' })
        }
    }
    const onSubmit = (data) => {
        console.log('your data:', data)
        reset()
    }
    return (
        <div className="card_form">
            <div className="card_form_content">
                <Logo />
                <div className="card_form_name">Добро пожаловать! </div>
                <form onSubmit={handleSubmit(handleCheck)}>
                    <div className="card_form_input">
                        <div className="card_form_input_text">Имя</div>

                        <input
                            className="input"
                            {...register('name', {
                                required: 'name is required!',
                            })}
                            placeholder="iska"
                        />

                        {errors?.name && <div style={{ color: 'red' }}> {errors.name.message}</div>}
                    </div>
                    <div className="card_form_input">
                        <div className="card_form_input_text">Фамилия</div>
                        <input
                            className="input"
                            {...register('email', {
                                required: 'email is required!',
                            })}
                            placeholder="johndoe@gmail.com"
                        />

                        {errors?.email && (
                            <div style={{ color: 'red' }}> {errors.email.message}</div>
                        )}
                    </div>
                    <div className="card_form_input">
                        <div className="card_form_input_text">Пароль</div>
                        <input
                            className="input"
                            {...register('password', {
                                required: 'password is required!',
                                pattern: {
                                    value: /^\d{2,}$/,
                                    message: 'please enter your password',
                                },
                            })}
                            placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
                        />

                        {errors?.password && (
                            <div style={{ color: 'red' }}> {errors.password.message}</div>
                        )}
                    </div>
                    <div className="card_form_input">
                        <div className="card_form_input_text">Подтвердите пароль</div>
                        <input
                            className="input"
                            {...register('password_check', {
                                required: 'password is required!',
                                pattern: {
                                    value: /^\d{2,}$/,
                                    message: 'please enter your password',
                                },
                            })}
                            placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
                        />

                        {errors?.password_check && (
                            <div style={{ color: 'red' }}> {errors.password_check.message}</div>
                        )}
                    </div>

                    <div className="card_form_checkbox">
                        <input type="checkbox" />
                        <div className="card_form_checkbox_text">
                            Я ознакомлен и согласен c <span>Политикой конфиденциальности</span>
                        </div>
                    </div>
                    <div className="card_form_button">
                        <Registr text={'Зарегистрироваться'} />
                    </div>
                </form>

                <div className="card_form_have">
                    У меня уже есть аккаунт? <span className="singin">Войти</span>
                </div>
            </div>
        </div>
    )
}

export default Form
