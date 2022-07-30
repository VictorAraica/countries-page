import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
  return (
    <main className="w-11/12 mx-auto flex flex-wrap justify-around gap-14">
      {countries.map((data) => (
        <CountryCard data={data} key={data.name.common} />
      ))}
    </main>
  );
}
