import Link from "next/link";
import Layout from "../components/Layout";
import InfoLabel from "../components/InfoLabel";
import BorderCountry from "../components/BorderCountry";

export default function country({ data, borders }) {
  const infoLeft = [
    {
      name: "Native Name",
      info: Object.values(data.name.nativeName)[0].common,
    },
    { name: "Population", info: data.population },
    { name: "Region", info: data.region },
    { name: "Sub Region", info: data.subregion },
    { name: "Capital", info: data.capital[0] },
  ];

  const infoRight = [
    { name: "Top Level Domain", info: Object.values(data.tld).join(", ") },
    {
      name: "Currencies",
      info: Object.values(data.currencies)
        .map((e) => e.name)
        .join(", "),
    },
    { name: "Languages", info: Object.values(data.languages).join(", ") },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-10 w-11/12 mx-auto mb-6">
        <Link href={`/`}>
          <button className="flex self-start content-center items-center bg-white dark:bg-dark-blue py-2 px-8 text-sm rounded-md">
            <span class="material-symbols-outlined mr-3">
              keyboard_backspace
            </span>
            Back
          </button>
        </Link>

        <div className="flex flex-col w-full lg:flex-row gap-16 xl:gap-24 justify-between items-center">
          <img
            src={data.flags.svg}
            alt={data.name.common}
            className="block lg:w-1/2"
          />
          <div className="flex flex-col w-full lg:w-1/2 justify-center gap-6">
            <h1 className="text-2xl font-semibold">{data.name.common}</h1>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 mb-4">
              <div className="w-1/2 flex flex-col gap-3">
                {infoLeft.map((e) => (
                  <InfoLabel name={e.name} info={e.info} key={e.name} />
                ))}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                {infoRight.map((e) => (
                  <InfoLabel name={e.name} info={e.info} key={e.name} />
                ))}
              </div>
            </div>
            {borders.length > 0 ? (
              <div className="text-sm flex content-center items-center flex-wrap gap-3">
                <span className="font-semibold">Border Countries:</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {borders.map((country) => (
                    <BorderCountry
                      country={country.name.common}
                      key={country.name.common}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${context.params.country}?fullText=true`
  );
  const data = await res.json();

  let borders = [];

  if (data[0].borders) {
    for (let code of data[0].borders) {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}?fields=name`
      );

      const border = await res.json();
      borders.push(border);
    }
  }

  return { props: { data: data[0], borders } };
};
