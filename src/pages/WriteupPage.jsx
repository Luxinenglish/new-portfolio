import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getWriteupById } from '../data/writeups';

export default function WriteupPage() {
  const { id } = useParams();
  const writeup = getWriteupById(id);

  if (!writeup) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-300">Writeup not found</h2>
        <p className="mt-4 text-green-400">No writeup matches the id provided.</p>
        <Link to="/" className="mt-4 inline-block text-green-500">Back home</Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-300">{writeup.title}</h1>
        <div className="mt-2 text-xs text-green-500/90">
          <span>{writeup.platform}</span> · <span>{writeup.difficulty}</span> · <span>{writeup.date}</span> · <span>{writeup.readTime}</span>
        </div>
        <p className="mt-3 text-green-400/80">{writeup.summary}</p>
      </header>

      <article className="prose dark:prose-invert text-green-100">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{writeup.content}</ReactMarkdown>
      </article>

      <div className="mt-6">
        <a
          href={writeup.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-500 hover:text-green-300"
        >
          Original link
        </a>
        <Link to="/" className="ml-4 text-sm text-green-500 hover:text-green-300">Back</Link>
      </div>
    </main>
  );
}

// Snippet to add to your routing setup (e.g. inside your existing Routes)
// File: update in the file where you define Routes (for example src/App.jsx)
// Add the import at top:
// import WriteupPage from './pages/WriteupPage';
//
// Then add this Route inside your <Routes>:
<Route path="/writeups/:id" element={<WriteupPage />} />

// File: src/components/sections/RoomsSection.jsx (small patch)
//
// At the top of the file add:
// import { Link } from 'react-router-dom';
//
// Then replace the current external anchor for the writeup link with this Link (inside the mapped challenge card):
