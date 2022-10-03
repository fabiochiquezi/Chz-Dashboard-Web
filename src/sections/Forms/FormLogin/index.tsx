import Link from 'next/link'
import { Div } from './styles'
import { Form, Input, Checkbox } from 'antd'
import FormLostPassword from '../FormLostPassword'
import { failedForm } from '../../../fns/utils/failedForm'
import { formRules } from '../../../../shared/config/formRules'
import React, { useRef, useState, useEffect } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import MainButton from '../../../components/Buttons/MainButton'
import LoadingSpin from '../../../components/Icons/LoadingSpin'
import GoogleButton from '../../../components/Buttons/GoogleButton'
import { fnSignin, fnSigninGoogle } from '../../../fns/Login/fnSignin'
import { getRememberEmail } from '../../../fns/Login/fnRememberEmail'
import { routes } from '../../../../shared/config/routes'

const FormLogin: React.FC = () => {
    const [form] = Form.useForm()
    const buttonSubmit = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storage = window.localStorage
        form.setFieldsValue({ email: getRememberEmail(storage) })
    }, [])

    return (
        <Div>
            <Form
                form={form}
                name="login"
                onFinishFailed={failedForm}
                validateTrigger={['onBlur']}
                className="login-form content"
                initialValues={{ remember: true }}
                onFinish={fnSignin(buttonSubmit, setLoading)}
            >
                <h1 className="text-color1">Chiquezi</h1>
                <p>Eleve seu negócio para a era digital!</p>

                <Form.Item name="email" rules={formRules.email} className="form-item-email">
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="E-mail"
                        size="large"
                    />
                </Form.Item>

                <Form.Item name="password" rules={formRules.password} className="form-item-pass">
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Senha"
                        size="large"
                    />
                </Form.Item>

                <Form.Item className="box-options-form">
                    <Form.Item name="remember" valuePropName="checked" noStyle className="form-item-remember">
                        <Checkbox>Lembrar-me</Checkbox>
                    </Form.Item>

                    <FormLostPassword />
                </Form.Item>

                <Form.Item className="end-form-options">
                    <MainButton item={buttonSubmit} className="mb-2 mt-2 btn-send">
                        {loading ? <LoadingSpin /> : 'Entrar'}
                    </MainButton>

                    <GoogleButton onClick={fnSigninGoogle} />

                    <div className="mt-2">
                        <span className="">ou </span>

                        <Link href={routes.register}>
                            <a className="text-color1 font-bold text-lg">cadastre-se</a>
                        </Link>
                    </div>
                </Form.Item>
            </Form>
        </Div>
    )
}

export default FormLogin
