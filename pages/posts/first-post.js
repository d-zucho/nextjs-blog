import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        {/* Any REGULAR html script tag for
            JS that would need to be loaded as soon as possible
            is added in the Head as well
         */}
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  )
}
