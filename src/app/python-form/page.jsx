import React, { useState } from 'react';
import { inserirSeguro, atualizarSeguro, excluirSeguro, selecionarSeguro } from '../lib/apiService';

function MinhaPagina() {
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    };

    const handleInserir = async () => {
        try {
            const response = await inserirSeguro({ cpf });
            setMessage(response.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleAtualizar = async () => {
        try {
            const response = await atualizarSeguro({ cpf });
            setMessage(response.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleExcluir = async () => {
        try {
            const response = await excluirSeguro(cpf);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleSelecionar = async () => {
        try {
            const response = await selecionarSeguro(cpf);
            setData(response.data);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Operações com Seguro</h1>
            <div>
                <input type="text" placeholder="Digite um CPF" value={cpf} onChange={handleCpfChange} />
                <button onClick={handleInserir}>Inserir</button>
                <button onClick={handleAtualizar}>Atualizar</button>
                <button onClick={handleExcluir}>Excluir</button>
                <button onClick={handleSelecionar}>Selecionar</button>
            </div>
            {message && <p>{message}</p>}
            <div>
                <h2>Dados do Seguro:</h2>
                <ul>
                    {data.map((item) => (
                        <li key={item.id_seguro}>
                            {item.nome_pessoa} - {item.modelo_carro}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MinhaPagina;