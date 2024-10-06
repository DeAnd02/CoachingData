from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__, static_folder='../frontend/build')


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Qui dovresti implementare la tua logica di autenticazione
    # Questo è solo un esempio
    if username == 'admin' and password == 'password':
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)