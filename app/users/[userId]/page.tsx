import getuser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPost"
import Link from "next/link"
import UserPosts from "./components/UserPosts"
import { Suspense } from "react"
type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getuser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    // const [user, userPosts] = await Promise.all([userData, userPostsData])
    const user = await userData
    return (
        <>
            <h2>{user.name}</h2>
            <button>
                <Link href="/users">Back</Link>
            </button>
            <Suspense fallback={<h2>loading...</h2>}>
                {/* @ts-expect-error Async Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}
