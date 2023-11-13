// import '../../styles/Materias.css'

// import bdImage from '../../images/materiabd.png';
// import pyImage from '../../images/materiapy.png';
// import domImage from '../../images/materiadom.png';
// import webImage from '../../images/materiaweb.png';
// import sofImage from '../../images/materiasof.png';
// import aiImage from '../../images/materiaai.png';

export default function Materias() {
    return (
        <>
            <main className="full-container">
                <div className="mid-container materias-mid-container">
                    <div className="materias-content materias-color-1">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >1. </h2>
                            <h2>BUILDING RELATIONAL DATABASE</h2>
                        </div>
                        <p>A qualidade fundamental de um banco de dados é a confiabilidade, garantindo a integridade e disponibilidade dos dados críticos para as operações. </p>
                        {/* <img src={bdImage} alt="imagem da materia 1" /> */}
                    </div>
                    <div className="materias-content materias-color-2">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >2. </h2>
                            <h2>COMPUTATIONAL THINKING USING PYTHON</h2>
                        </div>
                        <p>Python, destacado por sua legibilidade e simplicidade, é uma linguagem versátil que permite desenvolver rapidamente uma ampla gama de aplicativos. </p>
                        {/* <img src={pyImage} alt="imagem da materia 2" /> */}
                    </div>
                    <div className="materias-content materias-color-1">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >3. </h2>
                            <h2>DOMAIN DRIVEN DESIGN</h2>
                        </div>
                        <p>Lorem ipsum nisi mattis cursus etiam vivamus rhoncus interdum nisi accumsan, bibendum aliquet vehicula lectus eu ligula aptent maecenas lobortis. </p>
                        {/* <img src={domImage} alt="imagem da materia 3" /> */}
                    </div>
                    <div className="materias-content materias-color-2">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >4. </h2>
                            <h2>RESPONSIVE WEB DEVELOPMENT</h2>
                        </div>
                        <p>O Java, com sua portabilidade, é uma linguagem confiável e amplamente utilizada, capaz de funcionar em diversas plataformas com facilidade.</p>
                        {/* <img src={webImage} alt="imagem da materia 4" /> */}
                    </div>
                    <div className="materias-content materias-color-1">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >5. </h2>
                            <h2>SOFTWARE DESIGN & TOTAL EXPERIENCE</h2>
                        </div>
                        <p>O Software Design & Total Experience oferece soluções que priorizam a usabilidade, eficiência e inovação, resultando em experiências excepcionais para os usuários.</p>
                        {/* <img src={sofImage} alt="imagem da materia 5" /> */}
                    </div>
                    <div className="materias-content materias-color-2">
                        <div className='materias-title'>
                            <h2 className='materias-title-number' >6. </h2>
                            <h2>AI & CHATBOT</h2>
                        </div>
                        <p>Os Chatbots, com sua automação inteligente, melhoram o atendimento ao cliente, agilizam tarefas e proporcionam interações eficazes e personalizadas.</p>
                        {/* <img src={aiImage} alt="imagem da materia 6" /> */}
                    </div>
                </div>
            </main>
        </>
    )
}