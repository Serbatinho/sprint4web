from flask import Flask, render_template, request, jsonify
import cx_Oracle

app = Flask(__name__)

# Configuração do banco de dados
dsn_tns = cx_Oracle.makedsn('localhost', '1521', service_name='ORCL')
conn = cx_Oracle.connect(user='seu_usuario', password='sua_senha', dsn=dsn_tns)
cursor = conn.cursor()

# Lógica de criação da tabela 'Seguro' (ajuste conforme necessário)
cursor.execute('''
    CREATE TABLE Seguro (
        id_seguro NUMBER PRIMARY KEY,
        nome_pessoa VARCHAR2(50),
        cpf VARCHAR2(15),
        modelo_carro VARCHAR2(50),
        placa_carro VARCHAR2(10),
        valor_seguro NUMBER
    )
''')
conn.commit()

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

# Rota para inserir dados
@app.route('/inserir', methods=['POST'])
def inserir():
    try:
        # Lógica de inserção
        data = request.form
        nome_pessoa = data.get('nome_pessoa')
        cpf = data.get('cpf')
        modelo_carro = data.get('modelo_carro')
        placa_carro = data.get('placa_carro')
        valor_seguro = float(data.get('valor_seguro'))

        cursor.execute('''
            INSERT INTO Seguro (nome_pessoa, cpf, modelo_carro, placa_carro, valor_seguro)
            VALUES (:nome, :cpf, :modelo, :placa, :valor)
        ''', {'nome': nome_pessoa, 'cpf': cpf, 'modelo': modelo_carro, 'placa': placa_carro, 'valor': valor_seguro})

        conn.commit()
        return jsonify({'status': 'success', 'message': 'Dados inseridos com sucesso.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Rota para atualizar dados
@app.route('/atualizar', methods=['PUT'])
def atualizar():
    try:
        # Lógica de atualização
        data = request.form
        cpf = data.get('cpf')
        novo_valor_seguro = float(data.get('novo_valor_seguro'))

        cursor.execute('''
            UPDATE Seguro
            SET valor_seguro = :novo_valor
            WHERE cpf = :cpf
        ''', {'novo_valor': novo_valor_seguro, 'cpf': cpf})

        conn.commit()
        return jsonify({'status': 'success', 'message': 'Dados atualizados com sucesso.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Rota para excluir dados
@app.route('/excluir', methods=['DELETE'])
def excluir():
    try:
        # Lógica de exclusão
        cpf = request.form.get('cpf')

        cursor.execute('''
            DELETE FROM Seguro
            WHERE cpf = :cpf
        ''', {'cpf': cpf})

        conn.commit()
        return jsonify({'status': 'success', 'message': 'Dados excluídos com sucesso.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Rota para selecionar dados
@app.route('/selecionar', methods=['GET'])
def selecionar():
    try:
        # Lógica de seleção
        cpf = request.args.get('cpf')

        cursor.execute('''
            SELECT * FROM Seguro
            WHERE cpf = :cpf
        ''', {'cpf': cpf})

        rows = cursor.fetchall()
        data = [{'id_seguro': row[0], 'nome_pessoa': row[1], 'cpf': row[2], 'modelo_carro': row[3], 'placa_carro': row[4], 'valor_seguro': row[5]} for row in rows]
        return jsonify({'status': 'success', 'data': data})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Rota para o primeiro relatório com filtro
@app.route('/relatorio1', methods=['GET'])
def relatorio1():
    try:
        # Lógica para o primeiro relatório com filtro
        valor_minimo = float(request.args.get('valor_minimo'))

        cursor.execute('''
            SELECT * FROM Seguro
            WHERE valor_seguro >= :valor_minimo
        ''', {'valor_minimo': valor_minimo})

        rows = cursor.fetchall()
        data = [{'id_seguro': row[0], 'nome_pessoa': row[1], 'cpf': row[2], 'modelo_carro': row[3], 'placa_carro': row[4], 'valor_seguro': row[5]} for row in rows]
        return jsonify({'status': 'success', 'data': data})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Rota para o segundo relatório com filtro
@app.route('/relatorio2', methods=['GET'])
def relatorio2():
    try:
        # Lógica para o segundo relatório com filtro
        modelo_carro = request.args.get('modelo_carro')

        cursor.execute('''
            SELECT * FROM Seguro
            WHERE modelo_carro = :modelo_carro
        ''', {'modelo_carro': modelo_carro})

        rows = cursor.fetchall()
        data = [{'id_seguro': row[0], 'nome_pessoa': row[1], 'cpf': row[2], 'modelo_carro': row[3], 'placa_carro': row[4], 'valor_seguro': row[5]} for row in rows]
        return jsonify({'status': 'success', 'data': data})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# Executa a aplicação Flask
if __name__ == '__main__':
    app.run(debug=True)
