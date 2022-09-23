import { ProductOptionsProvider } from '@shopify/hydrogen'

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
        <div className="grid gap-2 mt-10">
          <h1 className="text-4xl font-bold leading-10 whitespace-normal">
            {product.title}
          </h1>
          <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
            {product.vendor}
          </span>
        </div>
        <div className="mt-8">
          <div
            className="prose border-t border-gray-200 pt-6 text-black text-md"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
        </div>
      </section>
    </ProductOptionsProvider>
  )
}
