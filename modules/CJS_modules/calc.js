exports.operations = {
    add: (a, b) => {
        return a + b;
    },
    sub: (a, b) => {
        return a - b;
    },
    mul: (a, b) => {
        return a * b;
    }
    ,
    div: (a, b) => {
        return a / b;
    }
}

exports.func=()=>{
    console.log("Hllo");
}

function pow(n,p)
{
    return Math.pow(n,p);
}