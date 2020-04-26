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

The mocha configuration file `.mocharc.jsonc` has been set up to find our tests and run `test/runners/mocha/init.js`.

The project compiles typescript into something other than commonjs modules. Node doesn't play nicely with other formats, so we've added a separate `tsconfig.json` just for mocha, which `init.js` feeds into ts-node.

Without that separate tsconfig, we'd get an error like this:
```
SyntaxError: Cannot use import statement outside a module
```

Running `npm test` should output something like this:
```
  simpleGreeting
    √ should say hello


  1 passing (8ms)
```

## Mocking

We installed ts-mockito.\
`npm install --save-dev ts-mockito`

Some contrived things have been added to `src/` to be used as an example for mocking.
- targetedGreeting
- INamed
- MyComplicatedDomainModel

We wrote a unit test for `targetedGreeting` in `greetings.spec.ts` and used ts-mockito to mock `MyComplicatedDomainModel`.