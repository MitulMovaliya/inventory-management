import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-muted mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="bg-accent-orange hover:bg-accent-orange-hover text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
