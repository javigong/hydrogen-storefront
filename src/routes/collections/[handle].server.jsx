import { gql, Seo, ShopifyAnalyticsConstants, useRouteParams, useServerAnalytics, useShopQuery } from '@shopify/hydrogen'
import { Suspense } from 'react'
import { Layout } from '../../components/Layout.server'

export default function Collection() {
  const { handle } = useRouteParams()
  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  })

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    }
  })

  return (
    <Layout>
      <Suspense>
        <Seo type="collection" data={collection} />
      </Suspense>
      <section className="p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
          {collection.title}
        </h1>

        {collection.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <p className="max-w-md whitespace-pre-wra inherit text-copy inline-block">
                {collection.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

// Add a Graphql query to retrieve a collection by its handle
// The Seo component sues the collection's seo values, if specified. IF not
// specified, then the component falls back to suing the collections title and description.
const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        title
        description
      }
    }
  }
`
