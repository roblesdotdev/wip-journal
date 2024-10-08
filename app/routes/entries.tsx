export default function Entries() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl">Wip Journal</h1>
      <p className="mt-2 text-neutral-400">
        Learnings and doings. Updated weekly.
      </p>

      <div className="mt-6">
        <p className="font-bold">
          Week of February 20<sup>th</sup>
        </p>
        <div className="mt-3 space-y-4">
          <div>
            <p>Work</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>

          <div>
            <p>Learnings</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>

          <div>
            <p>Interesting things</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
