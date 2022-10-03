export const getResp = (
    ok: boolean,
    message: string,
    code?: any,
    data?: any,
    errors?: any[],
) => ({
    ok: ok,
    message: message,
    code: code || null,
    data: data || null,
    errors: errors || null
})
