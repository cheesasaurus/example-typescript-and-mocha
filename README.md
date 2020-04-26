# Testing TypeScript with Mocha

Typescript is set up and there's a function `simpleGreeting` defined in `src/greetings.ts`

We've installed Mocha and Chai, as well as their types.\
`npm install --save-dev mocha @types/mocha chai @types/chai`

- Mocha is the test runner.
- Chai is the assertion library we've chosen to use for our tests.

We've also installed ts-node, which will be used to compile typescript on-the-fly.\
`npm install ts-node`


## Adding tests and running them

We've added a unit test for `simpleGreeting` in `test/unit/greetings.spec.ts`

We set up package.json so that `npm test` will run our tests.
```
"scripts": {
    "test": "mocha --config test/runners/mocha/.mocharc.jsonc"
},
```

The mocha configuration file `.mocharc.jsonc` has been set up to find our tests and make use of ts-node. 

Running `npm test` should output something like this:
```
  simpleGreeting
    √ should say hello


  1 passing (8ms)
```