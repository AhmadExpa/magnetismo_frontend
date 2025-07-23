import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { VITE_STORE_FRONT_TOKEN } from "../enviroment";

export const shopifyApi = createApi({
  reducerPath: "shopifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://54bace-2.myshopify.com/api/2025-01/graphql.json",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set(
        "X-Shopify-Storefront-Access-Token",
        VITE_STORE_FRONT_TOKEN
      );
      return headers;
    },
  }),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "",
        method: "POST",
        body: JSON.stringify({
          query: `
            {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    description
                    images(first: 3) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          price {
                            amount
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      }),
      providesTags: ["Products"],
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: "",
        method: "POST",
        body: JSON.stringify({
          query: `
            query getProduct($id: ID!) {
              product(id: $id) {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 10) {
                  edges {
                    node {
                      url
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          `,
          variables: { id },
        }),
      }),
      providesTags: ["Products"],
    }),

    createShopifyCart: builder.mutation({
      query: (lineItemsInput) => ({
        url: "",
        method: "POST",
        body: JSON.stringify({
          query: `
            mutation CartCreate($input: CartInput!) {
              cartCreate(input: $input) {
                cart {
                  id
                  checkoutUrl
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `,
          variables: {
            input: {
              lines: lineItemsInput,
            },
          },
        }),
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateShopifyCartMutation,
} = shopifyApi;
