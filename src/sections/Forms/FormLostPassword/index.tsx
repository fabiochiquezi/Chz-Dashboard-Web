import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Form, Input, Modal, Button } from 'antd'
import { formRules } from '../../../../shared/config/formRules'
import { fnLostPass } from '../../../fns/Login/fnLostPass'

const FormLostPassword: React.FC = () => {
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = React.useState(false)

    return (
        <>
            <Button
                onClick={() => setVisible(true)}
                className="login-form-forgot text-blue-500 border-none"
            >
                Esqueceu sua senha?
            </Button>

            <Modal
                onOk={() => fnLostPass(form, setVisible, setConfirmLoading)}
                visible={visible}
                onCancel={() => setVisible(false)}
                title="Redefinir senha"
                confirmLoading={confirmLoading}
                cancelText="Sair"
                okText="Enviar"
            >
                <p className="text-gray-400 mb-2 inline-block">Enviaremos um e-mail para redefinição de senha</p>

                <Form
                    form={form}
                    name="lostPass"
                    validateTrigger={['onBlur']}
                    className="lostPass-form content"
                    initialValues={{ remember: true }}
                >
                    <Form.Item name="email" rules={formRules.email}>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="E-mail"
                            size="large"
                        />
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default FormLostPassword
