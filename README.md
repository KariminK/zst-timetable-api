# ZST Timetable Data Parser

ZST Timetable Data Parser is a Node.js and Express-based API that leverages the Axios library and the @wulkanowy/timetable-parser library. This API is designed to fetch an HTML file from the school's website and return specific data on various endpoints. It provides the following endpoints:

- "/table": Returns the lesson schedule for a given class provided in the query.
- "/hours": Returns the lesson hours for a given class provided in the query.
- "/classes": Returns a list of classes.

## Installation

To get started with the ZST Timetable Data Parser project, follow these steps:

1. Clone the repository to your local machine using the following command:
   git clone https://github.com/your-username/ZST-Timetable-Data-Parser.git

2. Navigate to the project directory:
   cd ZST-Timetable-Data-Parser

3. Install the necessary dependencies using npm:
   npm install

4. Start the server:
   npm run start

The API server will be available at http://localhost:3000 by default.

## Usage

The ZST Timetable Data Parser API provides the following endpoints:

- (GET) "/table": Use this endpoint with the appropriate query to get the lesson schedule for a specific class.
- (GET) "/hours": Use this endpoint with the appropriate query to get the lesson hours for a specific class.
- (GET) "/classes": Use this endpoint to retrieve the list of available classes.

Make requests to these endpoints using your preferred HTTP client.

## Dependencies

The ZST Timetable Data Parser project relies on the following dependencies:

- Node.js
- Express
- Axios
- @wulkanowy/timetable-parser
- (for developer purposes) nodemon

Make sure to have these dependencies installed before running the application.
