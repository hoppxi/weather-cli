import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getWeather } from './weather';

interface ArgvResult {
    city: string;
    units: string;
}

const argv = yargs(hideBin(process.argv))
    .option('city', {
        alias: 'c',
        type: 'string',
        description: 'City name to get weather for',
        demandOption: true,
    })
    .option('units', {
        alias: 'u',
        type: 'string',
        choices: ['metric', 'imperial'],
        default: 'metric',
        description: 'Units of measurement. Metric or Imperial',
    })
    .help()
    .alias('help', 'h').argv as ArgvResult;

const runCli = async () => {
    const city = argv.city;
    const units = argv.units;
    
    try {
        const weather = await getWeather(city, units);
        console.log(`Weather for ${city} (${units} units):`);
        console.log(`Temperature: ${weather.temp}°`);
        console.log(`Conditions: ${weather.description}`);
        console.log(`Humidity: ${weather.humidity}%`);
        console.log(`Wind Speed: ${weather.wind_speed}`);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
};

export { runCli };
