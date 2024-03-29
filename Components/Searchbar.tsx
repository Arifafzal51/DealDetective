"use client"

import React, { FormEvent, useState } from "react";
import { scrapeAndStoreProduct } from '@/lib/actions';
const Searchbar = () => {
  const isValidAmazonLink = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;
      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.includes("amzn.") ||
        hostname.includes("amazon")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };


  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const isValidLink = isValidAmazonLink(searchPrompt);

    if (!isValidLink) return alert('Please enter a valid Amazon link');
    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);

    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      action=""
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>
        {isLoading ? "Loading..." : "Track Price"}
      </button>
    </form>
  );
};
export default Searchbar;

