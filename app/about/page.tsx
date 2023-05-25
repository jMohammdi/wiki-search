import Link from 'next/link'
import React from 'react'

function AboutPage() {
    // throw new Error("new error")  //show error in error page
    return (
        <>
            <div>
                <h2>About</h2>
                <Link href="/" >Home page</Link>
            </div>
        </>
    )
}

export default AboutPage