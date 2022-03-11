# Gigacode Programming language

### Description

Gigacode is a programming language in development created by GigaWizard.

##### Syntax

```
log 'hello world'
>>> "hello world"

sub (18,5)
>>> 13

add (6,3)
>>> 9

mult (3,3)
>>> 9

div (27,3)
>>> 9
```

### Data Types

1. String
2. Integer
3. Boolean
4. Float



### Reserved keywords

| Key Word | Meaning                            |
| -------- | ---------------------------------- |
| _        | Concatenation operator             |
|          | log 'hello '_'world'               |
| add      | Arithmetic Operator                |
|          | `add (1,1)` returns `2`            |
| sub      | Arithmetic Operator                |
|          | `sub (1,1)`returns `0`             |
| mult     | Arithmetic Operator                |
|          | `mult (2,2)`returns`4`             |
| div      | Arithmetic Operator                |
|          | `div (4,2)`returns `2`             |
| log      | Standard Output logging operator   |
|          | `log 'hi'`returns`hi`              |
| let      | Variable creation/ object creation |
|          | `let yes = 'no'`returns nothing    |
| random   | Picks random float between 0 and 1 |
|          | `random`returns nothing            |

## Operator overloading

The user-defined meaning for symbols and their operations in a programming language. For example, I can make the `+` symbol take two inputs and return their sum ex: `2+2` returns `4`

Gigacode:

`let message = 'Hello '_'World'`

the overload operator **for STINGS ONNLY** is the _.

What about the `+`,`-`,`/`,`*` symbols? Right now, they would just cause errors, because they haven't been assigned to a role to play in Gigacode.

Gigacode:

`log 2+2`

`>>> ERROR: Unrecognizable token '+'`

## Future development

* log 'hello '_'world
* arithmetic operator overloading
* regular expressions for parsing the log function and separating strings form integers 
* build a REPL (read, evaluate, print, loop) environment
* functions use`function greet _name,_age`

### Notes

| word            | definition                                                   |
| --------------- | ------------------------------------------------------------ |
| token           | One element to a string of characters, e.g  "Grey" has 4 tokens: "G","r","e","y" |
| Carriage return | The "return" or "enter" key as interpreted by the parser     |

