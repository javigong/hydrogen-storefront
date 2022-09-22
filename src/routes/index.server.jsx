import FeaturedCollections from '../components/FeaturedCollections.server'
import { Layout } from '../components/Layout.server'

export default function Home() {
  return (
    <Layout>
      <FeaturedCollections />
    </Layout>
  )
}
