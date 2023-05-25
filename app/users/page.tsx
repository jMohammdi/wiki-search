import React from 'react'
import getusers from '@/lib/getAllUsers'
import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
    title: "Users"
}
export default async function Users() {
    const allUsers: Promise<User[]> = getusers()
    const users = await allUsers
    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content
}
