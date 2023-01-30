/**
 * what-str
 */

// is str an uppercase?
const isUpper = (str) => {

    return (/^[A-Z]+$/).test(str)
}

// is str an lowercase?
const isLower = (str) => {

    return (/^[a-z]+$/).test(str)
}

// reverse string
const reverse = (str) => {
    const str_arr = str.split("").reverse()
    const str_rev = str_arr.join("")
    
    return str_rev
}

// Export
module.exports = {
    isUpper, isLower,
    reverse
}