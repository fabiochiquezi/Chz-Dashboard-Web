export const sucMsgAuth = {
    // login
    'auth/signin': {
        message: 'Login efetuado com sucesso',
        code: 200
    },
    'auth/signin-google': {
        message: 'Login efetuado com sucesso',
        code: 200
    },
    'auth/register': {
        message: 'Cadastro efetuado com sucesso',
        code: 201
    },
    'auth/reset-pass': {
        code: 204,
        message: 'Foi encaminhado um e-mail para você para alterar a sua senha'
    },
    'auth/state-changed': {
        code: 200,
        message: 'Estado do usuário alterado com sucesso'
    },
    'auth/signout': {
        code: 204,
        message: 'Usuário deslogado com sucesso'
    },
    'auth/get-current-user': {
        code: 200,
        message: 'Dados do usuário retornados com sucesso'
    },
}
