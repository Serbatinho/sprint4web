import Link from "next/link";

export default function Header() {
    return (
        <>
            <navbar className="navbar-header">
                <Link href='/integrantes'>Integrantes</Link>
                <Link href='/materias'>Máterias</Link>
                <span>|</span>
                <Link href='/chatbot' className="dynamic-border btn btn-chatbot">Chatbot</Link>
                <Link href='/' className="home-button">Home</Link>
            </navbar>
        </>
    )
}