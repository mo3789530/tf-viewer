export const sanitizer = (input: string) => {
    const sanitizeRegexp = /<\/*[a-z]*>/g
    return input.replace(sanitizeRegexp, "")
}