"use client"
import { useEffect, useState } from "react";
import URLInput from "@/components/URLInput";
import globStyles from "./page.module.css";
import HistoryURL from "@/components/HistroyURL";
import urlinputStyles from "./URLInputSection.module.css";
import { fetchData } from "@/lib/FetchData";
import HistoryURLSkeleton from "@/components/HistoryURLSkeleton";

export default function URLInputSection() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch("./api/shorten", {
                    method:"GET"
                })
                const result = await response.json();
                setHistory(result.data.reverse());
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log(history);
    },[history])
    
    return (
        <section className={urlinputStyles.urlInputSection }>
            <div className={globStyles.container+ " " + urlinputStyles.urlInputContianer}>
                <URLInput />
                    {
                        loading ?
                            (
                                <ul className={urlinputStyles.historyURLList}>
                                    <li>
                                        <HistoryURLSkeleton/>
                                    </li>
                                    <li>
                                        <HistoryURLSkeleton/>
                                    </li>
                                    <li>
                                        <HistoryURLSkeleton/>
                                    </li>
                                </ul>
                            )
                        : (
                            <ul className={urlinputStyles.historyURLList}>
                                {
                                    history.map((data, idx) => {
                                        return (
                                            <li key={idx}>
                                                <HistoryURL url_plain={data.url_plain} url_shortened={data.url_short} />
                                            </li>
                                        )
                                    })
                                }  
                            </ul>
                        )
                    }
            </div>
        </section>
    )
}