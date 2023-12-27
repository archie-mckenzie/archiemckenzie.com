import Link from 'next/link'

export default function ArchieMcKenzie() {
  return (
    <>
      <header>
        <div className="large-screen-break"></div>
        <h1><Link className='title' href='https://archiemckenzie.com'>Archie McKenzie</Link></h1>
      </header>
      <p>
          <Link href="https://reader.archiemckenzie.com" target="_blank">Classics Reader</Link>
          <br/>
          Read and parse Latin and Greek
      </p>
      <p>
        <Link href="https://alphajot.com" target="_blank">Alphajot</Link>
          <br/>
          AI-illustrated greeting cards
      </p>
      <p>
          <Link href="https://www.langmap.org" target="_blank">Langmap</Link>
          <br/>
          Research into how embedding models handle different languages
      </p>
      <p><Link href="/">←</Link></p>
    </>
  )
}
