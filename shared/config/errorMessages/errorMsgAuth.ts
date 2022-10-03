export const errorMsgAuth = {
    // ------ Auth Default
    'default/signin': {
        message: 'Por favor, verifique se foram preechidos todos os dados corretamente',
        code: 400
    },

    // ------ Auth signin
    'auth/invalid-email/signin': {
        message: 'E-mail inválido, por favor verifique se digitou corretamente',
        code: 400
    },
    'auth/user-not-found/signin': {
        message: 'E-mail ou senha estão incorretos',
        code: 404
    },
    'auth/wrong-password/signin': {
        message: 'E-mail ou senha estão incorretos',
        code: 404
    },
    'auth/too-many-requests/signin': {
        message: 'Foram feitas muitas tentativas de login, seu sistema foi pausado, tente novamente mais tarde',
        code: 400
    },
    'auth/internal-error/signin': {
        message: 'Ocorreu um erro no servidor, se o erro persistir por favor contate nosso suporte',
        code: 500
    },

    // ------ Auth register
    'default/register': {
        message: 'Por favor, verifique se foram preechidos todos os dados corretamente',
        code: 400
    },
    'auth/invalid-email/register': {
        message: 'E-mail inválido, por favor verifique se digitou corretamente',
        code: 400
    },
    'auth/email-already-in-use/register': {
        message: 'Este e-mail já está em uso, por favor tente outro',
        code: 400
    },
    'auth/weak-password/register': {
        message: 'Senha inválida, por favor use uma senha mais forte',
        code: 400
    },
    'auth/internal-error/register': {
        message: 'Ocorreu um erro no servidor, se o erro persistir por favor contate nosso suporte',
        code: 500
    },

    // ------ Auth lost-pass
    'default/reset-pass': {
        message: 'Por favor, verifique se foram preechidos todos os dados corretamente',
        code: 400
    },
    'auth/user-not-found/reset-pass': {
        message: 'E-mail não encontrado, verifique se digitou corretamente por favor',
        code: 404
    },
    'auth/invalid-email/reset-pass': {
        message: 'E-mail inválido, por favor verifique se digitou corretamente',
        code: 400
    },
    'auth/missing-email/reset-pass': {
        message: 'E-mail não foi enviado, se o erro persistir por favor contate nosso suporte',
        code: 500
    },

    // ------ Auth state-changed
    'default/state-changed': {
        message: 'Houve um erro no servidor, entre em contato com nosso suporte se houver algum incomodo',
        code: 500
    },

    'default/signout': {
        message: 'Não foi possível deslogar da sua conta, ocorreu um erro no servidor, se precisar contate nosso suporte',
        code: 500
    },

    'default/get-current-user': {
        message: 'Houve um erro no servidor, entre em contato com nosso suporte se houver algum incomodo',
        code: 500
    }
}
