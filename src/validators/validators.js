
export const reqiredField = value => {
    if (value) return undefined;
    return "Field is required";
};

export const numbers = value => {
    if (value && isNaN(Number(value))) return 'Must be a number';
    return undefined;
};