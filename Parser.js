class Parser {
    constructor(script) {
        this.script = script;
    }

    parse() {
        let errorsfound = 0

        console.log("Receaved program: ")
        let current = ''
        let allLines = this.script.split('\n')
        console.log(allLines)
        allLines.forEach(line => {
            if (line.length > 1){
                current = line.split(" ")
                this.execute(current)
            }
        })

        return errorsfound;
    }
    execute(c){
        if(c[0] == 'log'){
            c.shift();
            if (c[0].includes("'")){
                this.output(c.join(" "))
            }
        }else{
            console.log("Undefined reference : " + c[0])
        }
    }
    output(parsedScript){
        console.log(`\n\n>>> ${parsedScript}`)
    }
    
}

let script = `

log 'Hello, World'
add(6,3)
x = add(6,4)
log x

`

let parser =  new Parser(script);
parser.parse()