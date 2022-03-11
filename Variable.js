class Variable {
	constructor(value){
      	this.value = value;
    	this.type = typeof(value);
    }
    info() {
        console.log(`"${this.value}" is a ${this.type}`)
    }
    add(n) {
        if (this.type === "number" && typeof(n) === "number") {
            return this.value + n
        }else {
            throw new Error('cannot add strings')
        }
    }
    sub(n){
        if (this.type === "number" && typeof(n) === "number") {
            return this.value - n
        }else {
            throw new Error('cannot subtract strings')
        }
    }
    mult(n) {
        if (this.type === "number" && typeof(n) === "number") {
            return this.value * n
        }else if(this.type === "string" && typeof(n) === "number"){
            let s = ""
            for (let i = 0; i <= n; i++){
                s += this.value;
            }
        }else {
            throw new Error('cannot multiply strings')
        }
    }
    
    div(n){
        if (this.type === "number" && typeof(n) === "number") {
            return this.value / n
        }else {
            throw new Error('cannot divide strings')
        }
    }
}

let age = new Variable(100)
console.log(age.mult(10))