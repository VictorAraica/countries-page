import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CountriesList from "../components/CountriesList";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  const countries = data;
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("Filter by Region");

  useEffect(() => {
    let newCountries = countries;
    if (region !== "Filter by Region") {
      newCountries = countries.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (searchValue !== "") {
      newCountries = countries.filter(
        (country) => country.name.common.toLowerCase().indexOf(searchValue) >= 0
      );
    }
    setFilteredCountries(newCountries);
  }, [region, searchValue]);

  return (
    <Layout>
      <div className="flex justify-between w-11/12 mx-auto flex-wrap gap-10 ">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter setRegion={setRegion} region={region} />
      </div>

      <CountriesList countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=flags,name,population,region,subregion,capital,tld,currencies,laguages,borders`
  );
  const data = await res.json();

  return { props: { data } };
};
