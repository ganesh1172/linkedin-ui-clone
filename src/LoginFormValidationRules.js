export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Please enter an email address or phone number';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Please enter a valid username';
    }
    if (!values.password) {
        errors.password = 'Please enter a password.';
    } else if (values.password.length < 8) {
        errors.password = 'The password you provided must have at least 6 characters.';
    }
    return errors;
};