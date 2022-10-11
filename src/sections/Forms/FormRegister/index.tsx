import Link from 'next/link'
import { Div } from './styles'
import { Form, Input, Button } from 'antd'
import React, { useRef, useState } from 'react'
import { formRules } from '../../../../shared/config/formRules'
import { fnRegister } from '../../../fns/Login/fnRegister'

import { routes } from '../../../../shared/config/routes'
import BackButton from '../../../Components/Buttons/BackButton'
import LoadingSpin from '../../../Components/Icons/LoadingSpin'

const FormRegister: React.FC = () => {
    const [form] = Form.useForm()
    const buttonSubmit = useRef(null)
    const [loading, setLoading] = useState(false)

    return (
        <Div>
            <Form
                form={form}
                name="registerForm"
                onFinish={fnRegister(buttonSubmit, setLoading)}
                layout="vertical"
                className="content"
                validateTrigger={['onBlur']}
                initialValues={{ prefix: '19' }}
            >
                <div className="overlay"></div>
                <div className="inner-container">
                    <h1 className="text-color1">Registro</h1>
                    <p>Eleve seu negócio para a era digital!</p>
                    <BackButton link={routes.signin} text="Home" />

                    <Form.Item
                        name="name"
                        label="Nome"
                        rules={formRules.required}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={formRules.email}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={formRules.password}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirme a senha"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Por favor confirme sua senha'
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'A confirmação da senha deve ser exatamente igual ao campo de senha'
                                        )
                                    )
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className="end-form-options mt-8">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large"
                            ref={buttonSubmit}
                        >
                            {loading ? <LoadingSpin /> : 'Cadastrar'}
                        </Button>

                        <div className="mt-2 lg:mt-0 text-center">
                            <span className="">Já possui uma conta? </span>

                            <Link href={routes.signin}>
                                <a className="text-color1 font-bold">
                                    Entre agora
                                </a>
                            </Link>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </Div>
    )
}

export default FormRegister
