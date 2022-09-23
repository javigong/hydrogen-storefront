import { ProductOptionsProvider, MediaFile } from '@shopify/hydrogen'
export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">
            <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
              <ProductGallery media={product.media.nodes} />
            </div>
          </div>
          <div className="sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
            <div className="grid gap-2">
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
          </div>
        </div>
      </section>
    </ProductOptionsProvider>
  )
}

function ProductGallery({ media }) {
  if (!media.length) {
    return null
  }

  return (
    <div
      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}
    >
      {media.map((med, i) => {
        let extraProps = {}

        if (med.mediaContentType === 'MODEL_3D') {
          extraProps = {
            interactionPromptThreshold: '0',
            ar: true,
            loading: 'eager',
            disableZoom: true,
          }
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        }

        return (
          <div
            className={`${
              i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}
            key={med.id || med.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={`w-full h-full aspect-square object-cover`}
              data={data}
              options={{
                crop: 'center',
              }}
              {...extraProps}
            />
          </div>
        )
      })}
    </div>
  )
}
