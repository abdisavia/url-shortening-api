import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export async function POST(request) {
    try {
        let { url } = await request.json();
        const formdata = new FormData();
        formdata.append("url", url);

        // return Response.json({url:formdata.get("url")}, {status:200})


        const result = await fetch("https://cleanuri.com/api/v1/shorten", {
            method: "POST",
            body: formdata,
        });

        const data = await result.json();

        if (data?.result_url) {
           await saveToCookies(url, data.result_url);
        }
        return Response.json({data}, { status: 200 })
    } catch (error) {
        return Response.json({ "error": error }, {status:500})
    }
}

export async function GET() {
    try {
        const cookie = await cookies();
        const shortListString = cookie.get("shortenedList")?.value;
        
        let shortList = [];
        if (shortListString) {
            shortList = JSON.parse(shortListString);
        }
        
        return Response.json({ data: shortList },{ status: 200 })


    } catch (error) {
        return Response.json({ "error": error }, { status: 500 });
    }
}

async function saveToCookies(url_plain, url_short) {
    try {
        
        const cookieStore = await cookies();

        let currentList = [];
        if (cookieStore.has("shortenedList")) {
            const shortListString = cookieStore.get("shortenedList")?.value;
            if (shortListString) {
                currentList = JSON.parse(shortListString);
            }
        }

        currentList.push({
            "url_plain": url_plain,
            "url_short": url_short
        });

        cookieStore.set({
            name: "shortenedList",
            value: JSON.stringify(currentList),
            maxAge: 60 * 60 * 24 * 7,
        })

    } catch (error) {
        console.log(error);
    }
}