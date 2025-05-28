# Welcome Fullstack Product Exercise

```
TIMEBOX:    4 hours max. We value quality over quantity and understand that not all features may be completed.
LANGUAGES:  Javascript
FRAMEWORKS: Any libraries you want
```

# Overview

This exercise is to implement the best possible solution to the exercises below in the time alloted. We're evaluating your ability to take a set of requirements and spike a holistic solution that demonstrates craftsmanship, thoughtfulness and attention to user experience. This is **NOT** a test of how well you know a specific framework or ES7+, nor should you try to impress us with overly clever and obtuse solutions or designs. If you want to impress us, build something that is beautiful, intuitive and easy to debug/test/extend :wink: .

Ideally your solution would have some way to run locally and visualize the results in a browser so we can fully analyze the experience and not just the source code.

## Search Airline Offers

### As a user I want to

* Enter shipment details in a form:
  * Origin airport code in the 3-letter format (example: CAI, LAX, MAD)
  * Destination airport in 3-letter format (example: CAI, LAX, MAD)
  * Range of dates (up to 10 days)
  * Weight of the shipment
  
* Display a list of the offers meeting the search criteria
  * **stretch goal**: be able to filter or search by any unique identifiers so I can find specific offers.

* Share a link to my shipment's results via a unique URL

## Data and API Options

You have flexibility in how you handle the data:

### Option 1: Use the JSON file directly
Import the data from `/data/list_of_offers.json` directly into your frontend application.

### Option 2: Use the API
A basic Express API is provided in `/fullstack/api.js` that serves the offers data via a RESTful endpoint:

1. Start the API server:
   ```
   npm install
   npm start
   ```
2. Access the endpoint at `http://localhost:3001/api/offers`

### Example Search Combinations

When testing your application, you might try these example combinations:

1. **FRA → PVG** (Frankfurt to Shanghai)
   - Date Range: December 16-18, 2023
   - Weight: 300kg

2. **JFK → CDG** (New York to Paris)
   - Date Range: December 19-21, 2023
   - Weight: 500kg

3. **DXB → BOM** (Dubai to Mumbai)
   - Date Range: December 21-22, 2023
   - Weight: 150kg

4. **LAX → NRT** (Los Angeles to Tokyo)
   - Date Range: December 22-24, 2023
   - Weight: 280kg

5. **CAI → MAD** (Cairo to Madrid)
   - Date Range: December 18-20, 2023
   - Weight: 400kg

---------

# Submitting your exercise

1. See [instructions for submitting your work](https://github.com/cargo-one/hiring-exercise/blob/main/README.md#general-instructions)
