"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { fetchCars } from "@utils";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { CarState } from "@types";

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // limit state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || 2022,
        limit: limit || 10,
      });

      setAllCars(result);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <>
      <head>
        <title>SkalePlus - Where Startup success finds you. </title>
        <meta
          data-rh="true"
          name="title"
          content="SkalePlus - Where Startup success finds you."
        />
        <meta
          data-rh="true"
          name="description"
          content="SkalePlus is a platform that empowers startups for global growth. Access tools, resources, investors, programs, professionals, events, and more for your business growth both globally and locally, all at the tip of your fingers."
        />
        <meta data-rh="true" name="theme-color" content="#000000" />
        <meta data-rh="true" name="robots" content="index,follow" />
        <meta
          data-rh="true"
          property="og:title"
          content="SkalePlus - Where Startup success finds you."
        />
        <meta
          data-rh="true"
          property="og:description"
          content="SkalePlus is a platform that empowers startups for global growth. Access tools, resources, investors, programs, professionals, events, and more for your business growth both globally and locally, all at the tip of your fingers."
        />
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:site_name" content="SkalePlus" />
        <meta
          data-rh="true"
          property="og:url"
          content="https://SkalePlus.com"
        />
        <meta
          data-rh="true"
          property="og:image"
          content="https://images.ctfassets.net/re07v1jqbvra/2TqgNLNgHNztcrWwU8IcE8/81c91a8ee0106473c0c6e633e6976a09/SkalePlus-Logo.png"
        />
        <meta data-rh="true" property="og:image:width" content="1200" />
        <meta data-rh="true" property="og:image:height" content="630" />
        <meta
          data-rh="true"
          name="twitter:app:name:iphone"
          content="SkalePlus"
        />
        <meta
          data-rh="true"
          property="al:android:app_name"
          content="SkalePlus"
        />
        <meta
          data-rh="true"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta data-rh="true" name="twitter:site" content="@SkalePlus" />
        <meta data-rh="true" name="twitter:creator" content="@SkalePlus" />
        <meta
          data-rh="true"
          name="twitter:title"
          content="SkalePlus - Where Startup success finds you."
        />
        <meta
          data-rh="true"
          name="twitter:description"
          content="SkalePlus empowers startups for global growth. Access tools, resources, investors, programs, professionals, events, and more for your business growth globally and locally, all at your fingertips."
        />
        <meta
          data-rh="true"
          name="twitter:image"
          content="https://images.ctfassets.net/re07v1jqbvra/2TqgNLNgHNztcrWwU8IcE8/81c91a8ee0106473c0c6e633e6976a09/SkalePlus-Logo.png"
        />
        <meta data-rh="true" http-equiv="Content-Language" content="en" />
        <meta data-rh="true" name="naver-site-verification" content="" />
        <link rel="canonical" href="https://SkalePlus.com" />
        <script type="application/ld+json">
          {
            ("@context" as "http://schema.org",
            "@type" as "Organization",
            "name" as "SkalePlus - Where Startup success finds you.",
            "description" as "SkalePlus empowers startups for global growth. Access tools, resources, investors, programs, professionals, events, and more for your business growth globally and locally, all at your fingertips.",
            "url" as "https://SkalePlus.com",
            "logo" as "https://images.ctfassets.net/re07v1jqbvra/2TqgNLNgHNztcrWwU8IcE8/81c91a8ee0106473c0c6e633e6976a09/SkalePlus-Logo.png")
          }
        </script>
      </head>
      <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore out cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />

            <div className="home__filter-container">
              <CustomFilter options={fuels} setFilter={setFuel} />
              <CustomFilter options={yearsOfProduction} setFilter={setYear} />
            </div>
          </div>

          {allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car, index) => (
                  <CarCard key={`car-${index}`} car={car} />
                ))}
              </div>

              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="./loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}

              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
            </section>
          ) : (
            !loading && (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oops, no results
                </h2>
                <p>{allCars?.message}</p>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
}
