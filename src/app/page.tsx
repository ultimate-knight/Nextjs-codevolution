//Tutorial-19 Link Component//
import Link from "next/link"

export default function Home(){
    return(
        <>
        <h1>hey there</h1>
        <Link href="/Menu">Menu</Link>
        <Link href="/login">login</Link>
        </>
    )
}