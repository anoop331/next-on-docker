export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="space-y-4">
          <p>
            Welcome to our Next.js application! This is a simple about page to demonstrate
            routing and page creation in Next.js.
          </p>
          <p>
            We're using modern web technologies to build fast, responsive, and user-friendly
            applications.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 