import styles from '../../styles/layout/app/SaibaMais/saiba-mais.module.scss'

import Image from "next/image";

export default function SaibaMais() {
    return (
        <>
            <main className={`${styles["full-content-container"]}`}>
                <div className={`${styles["mid-content-container"]}`}>
                    <figure>
                        <Image width="416" height="338" className={`${styles["image-saiba"]}`} src="/img/homecar.png" alt="Saiba Mais" />
                        <figcaption>Projeto Proteção Pesada</figcaption>
                    </figure>
                    <p>A princípio, o projeto se tratava de consertar o sistema de aquisição e modelagem de dados da Porto, mas após o primeiro Sprint foi identificado que o problema provavelmente se reside em processos. Então o primeiro passo deve ser entrevistar algum centro operacional da Porto para averiguar o problema.</p>
                    <p>Em seguida, entra o início da parte prática com a modelagem da ideia, é esperado para o primeiro Sprint desta entrega ter ele inteiro pronto. Começando com gestão de projetos em Software Design, elaborando o plano de ação, aquisição de dados e parâmetros. Após o refinamento da ideia, vamos definir o fluxo do problema com DataBase e atribuir parâmetros mais técnicos com uma modelagem inicial instruída pela matéria de Domain. </p>
                    <p>Com a modelagem em mãos, vamos desenvolver um protótipo em Python para testar a usabilidade, um aprimoramento deste em Java de maneira mais robusta e por último a aplicação final em Watson sem a integração nas plataformas com ChatBot</p>
                    <p>Para a conclusão, vamos apresentar todo o conteúdo em um site instruído pela matéria de Web Design.</p>
                </div>
            </main>
        </>
    )
}
