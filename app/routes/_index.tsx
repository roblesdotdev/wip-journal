import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl">Wip Journal</h1>
      <p className="mt-2 text-neutral-400">
        Your space for recording and reflecting on your project progress. Easily
        track your tasks and milestones with detailed insights.
      </p>
      <div className="mt-8">
        <Link to="/entries" className="border px-4 py-2">
          Get started
        </Link>
      </div>
    </div>
  )
}
