//tutorial-10 not-found page//
"use client"
import { usePathname } from "next/navigation"
export default function notFound(){
    const pathname=usePathname();
    const reviewId=pathname.split("/")[4];
    const prodcutId=pathname.split('/')[2];
    return (
        <div>
            <h1>Page not found for {reviewId} and {prodcutId}</h1>
            <h4>requested resources doesn't exist</h4>
        </div>
    )
}