// [javascript - How do I tell if an object is a Promise? - Stack Overflow](https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise)
// `obj instanceof Promise` is not good since promise is obejct with `then`

if ( thing.then && typeof thing.then === 'function') {
    // probably a promise
} else {
    // definitely not a promise
}

