import Image from 'next/image';
import styles from '../../styles/layout/app/Materiais/Materias.module.scss';


export default function Materias() {
    return (
        <>
            <main className={`${styles["full-content-container"]}`}>
                <div className={`${styles["mid-content-container"]}`}>
                    <div className={`${styles["materias-content"]} ${styles["materias-color-1"]}`}>
                        <div className={`${styles['materias-title']}`}>
                            <h2 className={`${styles['materias-title-number']}`} >1. </h2>
                            <h2>BUILDING RELATIONAL DATABASE</h2>
                        </div>
                        <p>A qualidade fundamental de um banco de dados é a confiabilidade, garantindo a integridade e disponibilidade dos dados críticos para as operações. </p>
                        <Image width="562" height="348" src="/img/materiabd.png" alt="imagem da materia 1" />
                    </div>
                    <div className={`${styles["materias-content"]} ${styles["materias-color-2"]}`}>
                        <div className={`${styles['materias-title']}`}>
                            <h2 className={`${styles['materias-title-number']}`}>2. </h2>
                            <h2>COMPUTATIONAL THINKING USING PYTHON</h2>
                        </div>
                        <p>Python, destacado por sua legibilidade e simplicidade, é uma linguagem versátil que permite desenvolver rapidamente uma ampla gama de aplicativos. </p>
                        <Image width="386" height="336" src="/img/materiapy.png" alt="imagem da materia 2" />
                    </div>
                    <div className={`${styles["materias-content"]} ${styles["materias-color-1"]}`}>
                        <div className={`${styles['materias-title']}`}>
                            <h2 className={`${styles['materias-title-number']}`} >3. </h2 >
                            <h2>DOMAIN DRIVEN DESIGN</h2>
                        </div >
                        <p>Lorem ipsum nisi mattis cursus etiam vivamus rhoncus interdum nisi accumsan, bibendum aliquet vehicula lectus eu ligula aptent maecenas lobortis. </p>
                        <Image width="478" height="302" src="/img/materiadom.png" alt="imagem da materia 3" />
                    </div >
                    <div className={`${styles["materias-content"]} ${styles["materias-color-2"]}`} >
                        <div className={`${styles['materias-title']}`} >
                            <h2 className={`${styles['materias-title-number']}`} > 4. </h2 >
                            <h2>RESPONSIVE WEB DEVELOPMENT</h2>
                        </div >
                        <p>O Java, com sua portabilidade, é uma linguagem confiável e amplamente utilizada, capaz de funcionar em diversas plataformas com facilidade.</p>
                        <Image width="542" height="342" src="/img/materiaweb.png" alt="imagem da materia 4" />
                    </div >
                    <div className={`${styles["materias-content"]} ${styles["materias-color-1"]}`} >
                        <div className={`${styles['materias-title']}`} >
                            <h2 className={`${styles['materias-title-number']}`} > 5. </h2 >
                            <h2>SOFTWARE DESIGN & TOTAL EXPERIENCE</h2>
                        </div >
                        <p>O Software Design & Total Experience oferece soluções que priorizam a usabilidade, eficiência e inovação, resultando em experiências excepcionais para os usuários.</p>
                        <Image width="490" height="380" src="/img/materiasof.png" alt="imagem da materia 5" />
                    </div >
                    <div className={`${styles["materias-content"]} ${styles["materias-color-2"]}`} >
                        <div className={`${styles['materias-title']}`} >
                            <h2 className={`${styles['materias-title-number']}`} > 6. </h2 >
                            <h2>AI & CHATBOT</h2>
                        </div >
                        <p>Os Chatbots, com sua automação inteligente, melhoram o atendimento ao cliente, agilizam tarefas e proporcionam interações eficazes e personalizadas.</p>
                        <Image width="802" height="482" src="/img/materiaai.png" alt="imagem da materia 6" />
                    </div >
                </div >
            </main >
        </>
    )
}