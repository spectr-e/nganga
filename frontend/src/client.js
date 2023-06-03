import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "z2we4jit",
  dataset: "production",
  apiVersion: "2023-06-03",
  useCdn: true,
  token: import.meta.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
