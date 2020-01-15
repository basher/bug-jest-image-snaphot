This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's a reduced test case to demonstrate "jest-image-snapshot" not working in Create React App.

## CRA unit & coverage tests

- `yarn test` works OK for "App.test.js".
- `yarn coverage` works OK, ignoring files & folders as specified in "package.json".

## "jest-image-snapshot" test INSIDE CRA "./src/" folder

- Uncomment "jest-image-snapshot" code in "./src/App.test.js" and run `yarn test`.
- Get Node error "TypeError: matcher.apply is not a function".

## "jest-image-snapshot" test OUTSIDE CRA "./src/" folder

- Run `yarn test:puppeteer-visual`.
- Get Node error "TypeError: matcher.apply is not a function".
