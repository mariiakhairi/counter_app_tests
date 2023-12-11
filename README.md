# Counter App Cypress Tests

Welcome to the Counter App Cypress Tests repository! This project contains end-to-end tests for a counter application using Cypress. Whether you're new to Cypress or want to explore testing scenarios for a counter app, you'll find valuable examples and best practices here.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)
- [Setup](#setup)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates the usage of Cypress for testing a simple counter application. Cypress is a powerful end-to-end testing framework that provides a clear and intuitive API for testing web applications.

## Project Structure

The repository is organized as follows:

- `cypress/`: Contains the Cypress test files.
  - `fixtures/`: Stores test data and sample payloads.
  - `e2e/`: Holds test files, including sample counter app tests.
  - `support/`: Contains additional support files and utilities.
- `package.json`: Node.js project configuration.

## Test Scenarios

Explore the test scenarios available in this repository:

- **Increment and Decrement Tests:** Tests for increasing and decreasing the counter value.
- **Reset Test:** Verifies the functionality of resetting the counter.
- **Negative Counter Value Test:** Ensures the app handles negative counter values appropriately.

## Setup

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.

## Running the Tests

To run the Cypress tests, use the following command:

```bash
npm test
