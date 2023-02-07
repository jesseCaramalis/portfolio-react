import { PageInfo } from "../typings";
import { groq } from "next-sanity";

export const fetchPageInfo = async() => {
    const query = groq `*[_type == 'pageInfo'][0]`;
    const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;
    console.log(`fetching from ${url}`);
    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`
        }
      })
      
      .then((res) => {
        if (res.ok) {
          console.log("successful call");
        }
        return res;
      })
      .catch((err) => {
        throw new Error(`Error connecting to Sanity database: ${err}`);
      });
    const data = await res.json();
    console.log('fetched', data)
    const pageInfo: PageInfo = data.result

    return pageInfo;
}