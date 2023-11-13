import Link from "next/link";

import styles from '../../styles/layout/components/Header/header.module.scss'

export default function Header() {
    return (
        <>
            <navbar className={styles["navbar-header"]}>
                <Link href='/integrantes'>Integrantes</Link>
                <Link href='/materias'>Máterias</Link>
                <Link href='/api/api-python/route'>APIs</Link>
                <span>|</span>
                <Link href='/chatbot' className={styles["giant-button"]}>Chatbot</Link>
                <Link href='/' className={styles["home-button"]}>Home</Link>
            </navbar >
        </>
    )
}