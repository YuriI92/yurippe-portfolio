export function capFirstLetter(str) {
    const firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.substr(1);
}

export function validateEmail(email) {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    
    if (email.match(regex)) {
        return true;    
    } else {
        return false;
    }
}
