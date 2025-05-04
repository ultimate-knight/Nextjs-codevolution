"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

//tutorial-20//
const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((nav) => {
                const isActive = (pathname.startsWith(nav.href) && nav.href !== "/") || pathname === nav.href;

                return (
                    <Link 
                        className={`${styles.navLink} ${isActive ? styles.active : ''}`} 
                        href={nav.href} 
                        key={nav.name}
                    >
                        {nav.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}