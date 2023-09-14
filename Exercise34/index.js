/*Cities: Write a function called describe_city() that
accepts the name of a city and its country. The function should print a simple sentence,
such as Karachi is in Pakistan.
Give the parameter for the country a default value. Call your function for three different cities,
at least one of which is not in the default country*/
// let city:string = "Karachi";
// let countryname:string = "Pakistan";
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}`);
    return `${city} is in ${country}`;
}
describe_city("Karachi", "Pakistan");
describe_city("China"); // Default
describe_city("Colombo", "Srilanka");
export {};
