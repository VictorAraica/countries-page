import Link from "next/link";
import InfoLabel from "./InfoLabel";

export default function CountryCard({ data }) {
  return (
    <div className="flex flex-col w-72 bg-white dark:bg-dark-blue rounded-md overflow-hidden group ">
      <Link href={`/${data.name.common}`}>
        <img
          src={data.flags.svg}
          alt={data.name.common}
          className="block cursor-pointer"
        />
      </Link>
      <div className="p-5 flex flex-col justify-center grow gap-1">
        <Link href={`/${data.name.common}`}>
          <h2 className="font-semibold mb-3 cursor-pointer group-hover:underline ">
            {data.name.common}
          </h2>
        </Link>
        <InfoLabel name="Population" info={data.population} />
        <InfoLabel name="Region" info={data.region} />
        <InfoLabel name="Capital" info={data.capital} />
      </div>
    </div>
  );
}
