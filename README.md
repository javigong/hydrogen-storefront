# Hydrogen Storefront

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

- [Live Site (Vercel)](https://hydrogen-storefront.vercel.app/)

- Screenshots

![screencapture-hydrogen-storefront-4wgq5creb-javigong-vercel-app-2022-09-27-15_53_17](https://user-images.githubusercontent.com/42308135/192652088-96d68ccb-24b3-443d-9228-0c1546221450.png)

![screencapture-hydrogen-storefront-4wgq5creb-javigong-vercel-app-collections-insulated-and-puffy-jackets-2022-09-27-15_54_18](https://user-images.githubusercontent.com/42308135/192652087-c3328a91-aa7a-4101-b61c-cd2c3d057d2c.png)

![screencapture-hydrogen-storefront-4wgq5creb-javigong-vercel-app-products-the-h2-snowboard-2022-09-27-15_54_42](https://user-images.githubusercontent.com/42308135/192652086-1b3084c7-41d4-4c3e-b22a-e765acfdd7c2.png)

![screencapture-hydrogen-storefront-4wgq5creb-javigong-vercel-app-products-the-h2-snowboard-2022-09-27-15_56_13](https://user-images.githubusercontent.com/42308135/192652082-7cce5d1b-d592-484e-9d08-18c55a82dbb4.png)

![screencapture-hydrogen-storefront-4wgq5creb-javigong-vercel-app-products-the-h2-snowboard-2022-09-27-15_55_08](https://user-images.githubusercontent.com/42308135/192652085-45c7706b-a352-4e1a-b430-bd73b0193637.png)

![screencapture-checkout-hydrogen-shop-55145660472-checkouts-9577b475119567d571b1fcb9f649d034-2022-09-27-15_55_39](https://user-images.githubusercontent.com/42308135/192652084-69705071-1712-4c93-b385-42b2baac0c4e.png)

## Documentation & Templates

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

[Run this template in JavaScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

[Run this template in TypeScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn

```bash
npm init @shopify/hydrogen@latest --template hello-world-ts
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```
