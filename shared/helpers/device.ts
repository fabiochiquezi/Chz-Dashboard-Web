export const getDevice = (): string => {
    let device = ''
    const windowsWidth = window.innerWidth

    if (windowsWidth < 640) device = 'mobile'
    if (windowsWidth > 640 && windowsWidth < 1024) device = 'tablet'
    if (windowsWidth > 1024) device = 'desktop'
    if (windowsWidth > 1280) device = 'big desktop'

    return device
}
