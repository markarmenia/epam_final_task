# SauceDemo Login Tests

This project contains automated tests for the login functionality of https://www.saucedemo.com/ using WebDriverIO.

## Test Cases

### UC-1: Test Login form with empty credentials

- Type any credentials into "Username" and "Password" fields.
- Clear the inputs.
- Hit the "Login" button.
- Check the error message: "Epic sadface: Username is required".
- There is a bug on saucedemo.com for chrome. The value attributes in username and password get repopulated once Login button is clicked. Even if we manually remove the value attribute from html, it reappers once Login button is clicked.

### UC-2: Test Login form with credentials by passing Username

- Type any credentials in username.
- Type any credentials in password.
- Clear the "Password" input.
- Hit the "Login" button.
- Check the error message: "Epic sadface: Password is required".
- There is a bug on saucedemo.com for chrome. The value attributes in username and password get repopulated once Login button is clicked. Even if we manually remove the value attribute from html, it reappers once Login button is clicked.

### UC-3: Test Login form with valid credentials

- Get credentials from ValidUsers data.
- Click on Login and validate the title "Swag Labs" in the dashboard.

## Project Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`

## Technical Details

- Test Automation tool: WebDriverIO
- Browsers: Chrome and Firefox
- Locators: CSS
- Patterns: Page Object
- Assertions: WebDriverIO built-in expect
- Parallel Execution: Enabled
- Logging: WebDriverIO built-in logger

## Project Structure

- `po/pages/`: Contains Page Object files
- `test/specs/`: Contains test spec files
- `test/`: Contains data for parametrization
- `config/wdio.conf.js`: WebDriverIO configuration file
