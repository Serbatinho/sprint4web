import styles from '../../styles/layout/app/Chatbot/chatbot.module.scss'

export default function Chatbot() {
    return (
        <>
            <main className={`${styles['full-content-container']}`}>
                <div className={`${styles["mid-content-container"]}`}>
                    <div className={`${styles["chatbot-screen"]}`}>

                        <form onSubmit="" className={`${styles["chatbot-controlpanel"]}`}>
                            <input
                                type="text"
                                id="mensagem"
                                name="mensagem"
                                value=""
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}