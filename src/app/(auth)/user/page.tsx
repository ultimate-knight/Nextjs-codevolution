//tutorial-7//

//tutorial 19//
import Link from "next/link"
export default function user(){
    const productId=100;
    return (
    <>
    <h1>Details about user</h1>
    <h2>
        <Link href="/user/1">Details about user1</Link>
    </h2>
    <h2>
        <Link href="/user/2">Details about user2</Link>
    </h2>
    <h2>
        <Link href="/user/3">Details about user3</Link>
    </h2>
    <h2>
        <Link href="/user/4">Details about user4</Link>
    </h2>
    <h2>
        <Link href={`/user/${productId}`}>Details about {productId}</Link>
    </h2>
    </>
    )
}