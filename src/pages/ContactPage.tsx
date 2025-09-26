import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://formspree.io/f/xrbkyylo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 3000);
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have questions or need help? Send us a message and we'll get back to
          you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your name"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="How can we help you?"
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <div className="flex flex-col items-end">
              {sent && (
                <span className="text-green-600 font-medium">
                  Message sent. Thank you!
                </span>
              )}
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
