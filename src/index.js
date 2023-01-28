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

// Export
module.exports = {
    isUpper, isLower
}