
# Weather CLI

Weather CLI is a simple command-line tool built with TypeScript that fetches and displays real-time weather data for any city using OpenWeatherMap API.

## Features:
- Fetches weather data for a specified city.
- Supports metric and imperial units.
- Functional programming concepts like pure functions and immutability.

## Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/ermi111/weather-cli.git
   cd weather-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set your OpenWeatherMap API key in `.env`.
    - Create `OWM_API_KEY` var then put your API key there.

4. Build the project:
   ```bash
   npm run build
   ```

5. Use the CLI tool:
   ```bash
   ./bin/weather --city "London" --units metric
   ```

## Example:
```bash
./bin/weather --city "New York" --units imperial
```

## License
This project is licensed under the [MIT License](LICENSE.md).
