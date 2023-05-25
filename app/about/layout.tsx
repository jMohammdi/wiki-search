
import style from "./style.module.css"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            layout of about page
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}
