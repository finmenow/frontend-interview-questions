// use arguments.length for currying implementation

const get = (path, target) => {

}

const obj = {
    a: {
        b: 7
    }
}

console.log(get("a.b", obj))
console.log(get("a.b")(obj))

console.log(get("a.b.c.d", obj))
console.log(get("a.b.c.d")(obj))

console.log(get("a.b.c.d", undefined))
console.log(get("a.b.c.d")(undefined))
