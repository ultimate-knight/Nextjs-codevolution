//tutorial-8 Nested Dynamic Routes//
//tutorial-10 not-found-page//
import { notFound } from "next/navigation";

export default async function review({params,}:{params:Promise<{productid:string,reviewId:string}>}){
    const {productid,reviewId}=await params;

    if(parseInt(reviewId)>1000){
        notFound()
    }

    return(
        <h1>hey {productid} and hi there {reviewId}</h1>
    )

}