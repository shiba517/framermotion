"use client"

import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()

    const handleClick = () => {
        alert('Order has been placed')
        // router.push("/")
        router.back()
        // router.forward()
    }

    return (
        <div>
            <h1>Products</h1>

            <button onClick={handleClick}>place order</button>
        </div>
    );
}

export default page;
