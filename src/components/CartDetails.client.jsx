import { CartLineProvider, useCart } from '@shopify/hydrogen'
import React from 'react'

export default function CartDetails({ onClose }) {
  const { lines } = useCart()

  if (lines.length === 0) {
    return <CarEmpty on onClose={onClose} />
  }

  return (
    <form className="grid grid-cols-1 grid-rows-[1fr_auto] h-[calc(calc(100vh-6rem)]">
      <section>
        <ul>
          {lines.map((line) => {
            return (
              <CartLineProvider key={line.id} line={line}>
                <CartLineItem />
              </CartLineProvider>
            )
          })}
        </ul>
      </section>
    </form>
  )
}
