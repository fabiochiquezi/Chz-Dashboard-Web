export const cleanData = (data: any) => {
    const replaceSpecialCharacters = data.phone.replace(/[^0-9]/ig, '')
    const brazilianNumber = '+55' + replaceSpecialCharacters
    return { phone: brazilianNumber }
}
