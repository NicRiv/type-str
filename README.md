# what-str

Is it upper or lower case? and more...

## Installation
```
npm i what-str
```

## Easy to use!
Now you can know if it is uppercase or lowercase
```javascript
const { isUpper, isLower } = require('what-str')

const myLower = 'hello'

console.log(`
    Is Upper: ${isUpper(myLower)},
    Is Lower: ${isLower(myLower)}
`)
// Is Upper: false
// Is Lower: true

const myUpper = 'WORLD'

console.log(`
    Is Upper: ${isUpper(myUpper)},
    Is Lower: ${isLower(myUpper)}
`)
// Is Upper: true
// Is Lower: false
```