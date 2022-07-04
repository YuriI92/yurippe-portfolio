export function capFirstLetter(str) {
    const firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.substr(1);
}
