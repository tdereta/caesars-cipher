function rot13(str) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let result = ''

    for (let i = 0; i < str.length; i++) {

        // if an alphabet of str is in the position >= of 13
        if (alphabet.indexOf(str[i]) >= 13) {

            // put the alphabet of str at position - 13
            result += alphabet[alphabet.indexOf(str[i]) - 13]

            // if an alphabet of str is in the position < 13 and if it doesn't exist
        } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {

            // put the alphabet of str at position + 13
            result += alphabet[alphabet.indexOf(str[i]) + 13]

            // pass on all other non-alphabetic chars
        } else {
            result += str[i]
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));