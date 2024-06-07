"use client";
import { Hero } from "@components";
import React from "react";

const About = () => {
  return (
    <>
      <head>
        <title>About SkalePlus</title>
        <meta data-rh="true" name="title" content="About SkalePlus" />
        <meta data-rh="true" name="theme-color" content="#000000" />
        <meta
          data-rh="true"
          name="description"
          content="Learn more about SkalePlus - the platform that empowers startups for global growth. Discover our mission, team, and values."
        />
        <meta data-rh="true" name="robots" content="index,follow" />
        <meta data-rh="true" property="og:title" content="About SkalePlus" />
        <meta
          data-rh="true"
          property="og:description"
          content="Learn more about SkalePlus - the platform that empowers startups for global growth. Discover our mission, team, and values."
        />
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:site_name" content="SkalePlus" />
        <meta
          data-rh="true"
          property="og:url"
          content="https://skaleplus.com/about"
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
        <meta data-rh="true" name="twitter:title" content="About SkalePlus" />
        <meta
          data-rh="true"
          name="twitter:description"
          content="Learn more about SkalePlus - a platform that empowers startups for global growth. Discover our mission, team, and values."
        />
        <meta
          data-rh="true"
          name="twitter:image"
          content="https://images.ctfassets.net/re07v1jqbvra/2TqgNLNgHNztcrWwU8IcE8/81c91a8ee0106473c0c6e633e6976a09/SkalePlus-Logo.png"
        />
        <meta data-rh="true" http-equiv="Content-Language" content="en" />
        <link rel="canonical" href="https://SkalePlus.com/about" />
        <script type="application/ld+json">
          {
            ("@context" as "http://schema.org",
            "@type" as "Organization",
            "name" as "About SkalePlus",
            "description" as "Learn more about SkalePlus - the platform that empowers startups for global growth. Discover our mission, team, and values.",
            "url" as "https://SkalePlus.com/about",
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
        </div>
      </main>
    </>
  );
};

export default About;
