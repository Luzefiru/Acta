# Utility Modules

> All the code we actually use in production are found in `/src/utils/, meanwhile, the test runner `.test.js`files are located in`/src/utils/test/`.

## List of Modules

- `filterPosts.js`: our filter algorithm to segregate posts based on specific criteria

# Testing

Run this npm script to let Jest look for all `.test.js` files recursively inside the project to run any test runners.

```bash
npm run test
```

It should prompt a CLI like so:

```bash
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Press `a` to let the test runner recheck your code automatically on every save.
