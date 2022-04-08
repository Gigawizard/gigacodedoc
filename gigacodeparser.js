function parse(script) {
    let method = script.split(" ")[0];
    output = "";
    let var1 = ''
    let var2 = ''
    let varstorage = new Map();

    switch (method) {
        case "log":
            output = script.split(" ")
            console.log(output)
            if (output.includes("'")) {
                console.log('i think that this is a string')
                output = script.split("'")[1];
                console.log(`\n\n>>> ${output}`)
            } else {
                console.log(output[1])
                console.log(varstorage.has('yes'))
            }
            break;
        case "add":
            output = script.split(" ")[1]
            output = output.split("(")[1]
            output = output.split(")")[0]
            output = output.split(",")
            output = Number(output[0]) + Number(output[1])
            console.log(`\n\n>>> ${output}`)
            break;
        case "sub":
            output = script.split(" ")[1]
            output = output.split("(")[1]
            output = output.split(")")[0]
            output = output.split(",")
            output = Number(output[0]) - Number(output[1])
            console.log(`\n\n>>> ${output}`)
            break;
        case "mult":
            output = script.split(" ")[1]
            output = output.split("(")[1]
            output = output.split(")")[0]
            output = output.split(",")
            output = Number(output[0]) * Number(output[1])
            console.log(`\n\n>>> ${output}`)
            break;
        case "div":
            output = script.split(" ")[1]
            output = output.split("(")[1]
            output = output.split(")")[0]
            output = output.split(",")
            output = Number(output[0]) / Number(output[1])
            console.log(`\n\n>>> ${output}`)
            break;
        case "random":
            output = Math.random()
            break;
        case "let":
            var1 = script.split(" ")[1]
            var2 = script.split(" ")[3]
            varstorage.set(var1, var2)
            console.log(varstorage.get(var1))
            console.log(var1)
            break;
        default:
            console.log(`Undefined egg method ${method}`)
    }
}

parse('let yes = \'no\'')

parse('log yes')