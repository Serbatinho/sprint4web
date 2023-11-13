export default function Chatbot() {
    return (
        <>
            <main className="full-container">
                <div className="mid-container mid-container-chatbot">
                    <div className="chatbot-screen">

                        <form onSubmit="" className="chatbot-controlpanel">
                            <input
                                type="text"
                                id="mensagem"
                                name="mensagem"
                                value=""
                            />
                            <button type="submit" className='btn dynamic-border'>Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}