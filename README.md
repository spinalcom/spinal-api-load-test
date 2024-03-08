# spinal-api-load-test

## Description

`spinal-api-load-test` is a tool designed for stress testing Spinalcom APIs. It utilizes Artillery to perform comprehensive load tests, allowing users to simulate high traffic and analyze the performance under various conditions. This tool is essential for developers and testers aiming to ensure the Spinalcom APIs' scalability and reliability.

## Features

- Easy-to-use command-line interface for stress testing
- Dynamic report generation in JSON format
- HTML report conversion for better visualization

## Installation

Before you begin, make sure you have Node.js installed on your system.

1. Clone the repository:
   ```bash
   git clone https://github.com/spinalcom/spinal-api-load-test.git
   ```
2. Navigate to the project directory:
    ```bash
    cd spinal-api-load-test
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
## Usage
### Performing Stress Tests
To run a stress test using script.yml and specify the output JSON file name dynamically, use the following command:
```bash
npm run stress-test --name=<your_custom_report_name>
```
Replace <your_custom_report_name> with your desired file name. This command generates a JSON report in the ./output directory.

### Generating HTML Reports
After performing the stress tests, you can generate HTML reports for better readability:
```bash
npm run generate-report
```
This command converts all JSON reports in the ./output directory into HTML format and saves them in the html-report directory.
