// Armazenamento de Usuários
let usuarios = []

// Adicionar Usuários
function adicionarUsuario(nome, idade, email) {
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    }
    usuarios.push(usuario)
}

// Verificação
function verificarUsuario(usuario) {
    if (usuario.idade > 0 && usuario.nome !== null && usuario.email !== null) {
        console.log("Cadastro concluído!")
    } else {
        console.log("Erro no cadastro!")
    }
}

// Listar usuários
function listarUsuarios() {
    console.log("Nossos usuários já cadastrados: ", usuarios)
}

adicionarUsuario("Vegetti", 35, "vascodagama@gmail.com")
verificarUsuario(usuarios[0])
listarUsuarios()
