import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import Upload1 from '../../../components/Upload/Upload1'
import { pipeLogin } from '../../../../shared/pipes/Login'
import { Form, Input, Spin, Select, FormInstance } from 'antd'
import MainButton from '../../../components/Buttons/MainButton'
import { formRules } from '../../../../shared/config/formRules'
import { uploadPhotoUser } from '../../../fns/User/uploadPhotoUser'

const { Option } = Select
const antIcon = <LoadingOutlined style={{ fontSize: 20, color: '#fff' }} spin />

type props = {
    form: FormInstance<any>
    buttonSubmit: React.MutableRefObject<HTMLInputElement | null>,
    loading: boolean,
}

const FormUserData: React.FC<props> = ({ form, buttonSubmit, loading }) => {
    const user = pipeLogin.getCurrentUser()

    return (
        <Form
            form={form}
            name="login"
            validateTrigger={['onBlur']}
            className="login-form content"
            initialValues={{ remember: true }}
        >
            {user && <Upload1 uploadFn={uploadPhotoUser} />}

            <Form.Item name="name" label="Nome" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Celular"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={
                    <Form.Item name="prefix" noStyle>
                        <Select style={{ width: 70 }}>
                            <Option value="86">+86</Option>
                            <Option value="87">+87</Option>
                        </Select>
                </Form.Item>
                } style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="sex"
                label="Sexo"
                rules={[{ required: true, message: 'Please select gender!' }]}
            >
                <Select placeholder="Sexo">
                    <Option value="M">Masculino</Option>
                    <Option value="F">Feminino</Option>
                </Select>
            </Form.Item>

            <Form.Item name="birthday" label="Data de Nasc." rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item name="state" label="Estado" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item name="city" label="Cidade" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item name="neighbor" label="Bairro" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item name="street" label="Rua" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item name="numberStreet" label="Nº" rules={formRules.required}>
                <Input />
            </Form.Item>

            <Form.Item label="Senha">
                <Input value="********" />
            </Form.Item>

            <Form.Item>
                <MainButton item={buttonSubmit} className="mb-2 mt-2">
                    {loading ? <Spin indicator={antIcon} /> : 'Entrar'}
                </MainButton>
            </Form.Item>
        </Form>
    )
}

export default FormUserData
