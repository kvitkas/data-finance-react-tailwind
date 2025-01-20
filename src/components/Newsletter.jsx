import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    console.log(`Subscribed with: ${email}`);
    setError("");
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <div className="bg-blue-500 text-white p-6 text-center">
      <h2 className="text-2xl font-semibold">Subscribe for Updates</h2>
      <p className="mt-2">Get the latest news and tips for managing jetlag!</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          className="p-2 w-2/3 rounded-lg"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg ml-2"
        >
          Subscribe
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Newsletter;