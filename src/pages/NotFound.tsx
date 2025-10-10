import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center dark:bg-gray-900">
      <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mb-4 text-2xl text-gray-600 dark:text-gray-300">Oops! Page Not Found.</p>
      <img
        src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif"
        alt="Confused John Travolta"
        className="mb-8 w-64 rounded-lg shadow-lg"
      />
      <p className="mb-8 max-w-md text-lg text-gray-500 dark:text-gray-400">
        It seems you've wandered off the beaten path. Let's get you back to exploring.
      </p>
      <Link
        to="/"
        className="rounded-md bg-pink-500 px-6 py-3 font-semibold text-white transition-transform hover:scale-105 hover:bg-pink-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;