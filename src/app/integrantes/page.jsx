import Image from "next/image";

import styles from "../../styles/layout/app/Integrantes/Integrantes.module.scss"

export default function Integrantes() {
    return (
        <>
            <main className={`${styles["full-content-container"]}`} >
                <div className={`${styles["mid-content-container"]}`}>
                    <h1 className={`${styles['title-integrantes']}`}>INTEGRANTES</h1>
                    <figure>
                        <Image className={`${styles["image-integrante"]}`} src="/img/integrante.png" width="316" height="350" alt="Integrante 1" />
                        <figcaption>RM551821 - Lucas Serbato de Barros</figcaption>
                    </figure>
                    <figure>
                        <Image className={`${styles["image-integrante"]}`} src="/img/integrante.png" width="316" height="350" alt="Integrante 2" />
                        <figcaption>RM550200 - Leonardo Oliveira Esparza</figcaption>
                    </figure>
                    <figure>
                        <Image className={`${styles["image-integrante"]}`} src="/img/integrante.png" width="316" height="350" alt="Integrante 3" />
                        <figcaption>RM552421 - Flavio Sousa Vasconcelos</figcaption>
                    </figure>
                    <figure>
                        <Image className={`${styles["image-integrante"]}`} src="/img/integrante.png" width="316" height="350" alt="Integrante 4" />
                        <figcaption>RM552368 - Wellington de Oliveira Urcino da Silva</figcaption>
                    </figure>
                    <figure>
                        <Image className={`${styles["image-integrante"]}`} src="/img/integrante.png" width="316" height="350" alt="Integrante 5" />
                        <figcaption>RM97887 - João Carlos França Figueiredo</figcaption>
                    </figure>
                </div>
            </main >
        </>
    )
}