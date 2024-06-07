import { FilterProps } from "@types";

const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

export const calculateCarRent = (city_mpg: number, year: number) => {
  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key":
      process.env.NEXT_PUBLIC_RAPID_API_KEY ||
      "eeb243d477msh9b21d3dda2f0899p126218jsn90028cd9b150",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `${url}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  return result;
}
