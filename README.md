# SwissBorg web challenge

## A mock data HTTP server to be used for a SwissBorg recruitment assignment for web developer.

### How to run the mock data HTTP server?

0. Prerequisites: node.js & yarn.
1. Run `yarn install` to install all dependencies (tested with yarn v1.22.19)
2. Run `yarn start` to start the server (tested with node.js v16.17.0)
3. For API documentation (swagger), open http://localhost:8080/api-docs in your browser.

### The task

The task is to display two tables using data coming from the HTTP API.

The first table should consist of transactions data columns, along with calculated euro equivalent for each transaction's amount (the euro equivalent value should be displayed as long as the euro rate is available - **make sure to handle cases of rates not being available**):

| timestamp   | currency | amount | eur equiv | type       | status    |
| ----------- | -------- | ------ | --------- | ---------- | --------- |
| Aug 23 2023 | BTC      | 1      | 24700     | deposit    | completed |
| Aug 25 2023 | CHF      | 100    | 105       | withdrawal | pending   |
| ...         | ...      | ...    | ...       | ...        | ...       |

The second table should summarize the amounts of all deposits & withdrawals grouped by currency:

| currency | total completed withdrawals | total completed deposits | total pending withdrawals | total pending deposits | total balance (completed deposits - completed withdrawals) | total balance eur equiv |
| -------- | --------------------------- | ------------------------ | ------------------------- | ---------------------- | ---------------------------------------------------------- | ----------------------- |
| BTC      | 3                           | 5                        | 1                         | 0                      | 2                                                          | 48400                   |
| USD      | 1000                        | 100                      | 0                         | 500                    | -900                                                       | -837                    |
| ...      | ...                         | ...                      | ...                       | ...                    | ...                                                        | ...                     |

Pay **special attention** to the API description (swagger) available at http://localhost:8080/api-docs.

### Requirements & guidelines

Please put the solution in a separate code repository (no need to include this mock server code).

Please use **TypeScript** as the main language. The choice of UI library is up to you, as long as you can justify it.

Don't spend too much time on styling - basic esthetics is enough.

Tests are not required, although please write the code with testing & future development in mind.

Along with the solution, please provide a README file, briefly explaining base assumptions about the solution & possible pitfalls.
