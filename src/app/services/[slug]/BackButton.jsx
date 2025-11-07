"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="mt-10 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all"
    >
      ← Back to Services
    </button>
  );
}
