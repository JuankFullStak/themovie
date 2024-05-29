import { Convert, Item } from "@/types/movies";
import { baseUrl, apiKey } from "@/constants/Constants";
export const fetcher = async ( url: string )=> {
    const response = await fetch(`${baseUrl}${url}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    const results: Item = await response.json();
    // console.log(JSON.stringify(results, null,2))
    return results;
}