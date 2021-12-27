import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* Any REGULAR html script tag for
            JS that would need to be loaded as soon as possible
            is added in the Head as well
         */}
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
}
