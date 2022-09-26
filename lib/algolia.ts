import algoliasearch from "algoliasearch";

const client = algoliasearch("2BA0LUEAWF", "b1809d1683b2f30356e437c0b1bfe155");
export const productsIndex = client.initIndex("products");
