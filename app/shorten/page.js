"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
     "shortUrl": shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("")
        setShortUrl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Generate your Short URLs</h1>
      <div className="flex flex-col gap-5">
        <input
          className="px-4 py-2 focus:outline-blue-800 rounded-md"
          type="text"
          value={url}
          placeholder="Enter Your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shortUrl}
          className="px-4 py-2 focus:outline-blue-800 rounded-md"
          placeholder="Enter your preferred short URL text "
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          type="button"
          className="text-white text-md cursor-pointer font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate
        </button>
      </div>
      {generated && <>
       <span className="font-bold text-lg "> Your Link: </span><code> <Link target="_blank" href={generated} >{generated}</Link>
      </code></>}
    </div>
  );
};

export default Shorten;
