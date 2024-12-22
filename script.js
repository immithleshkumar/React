// !Module
// !1) named export
// !2) default export 


//named exports
export function Display() {
    console.log("i am Display")
}

export function add(n1, n2) {
    return n1 + n2;
}

// export{Display,add}

//default export
function substract(n1, n2) {
    return n1 - n2;

}
export default substract;