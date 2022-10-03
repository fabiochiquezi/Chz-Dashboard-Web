export const formRules = {
    required: [
        {
            required: true,
            message: 'Este item é obrigatório',
        },
    ],
    password: [
        {
            required: true,
            message: 'Senha obrigatória!',
        },
        {
            message: 'Senha inválida, não pode haver acentos ou espaços',
            pattern: /^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/g,
            // pattern: /^(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
        },
        {
            message: 'A senha deve ter no mínimo 6 caracteres',
            pattern: /^.{6,}$/,
        },
    ],
    email: [
        {
            required: true,
            message: 'E-mail é obrigatório!',
        },
        {
            message: 'E-mail inválido',
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
    ],
}
