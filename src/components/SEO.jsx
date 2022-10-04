import Head from "next/head";
import React from "react";

const SEO = ({ title, description, sitename = "Belanja Lebih Mudah" }) => {
  return (
    <Head>
      <title>
        {title} | {sitename}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;