document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const loginBtn = document.getElementById('loginBtn');
    const closeModal = document.getElementById('closeModal');
    const formCadastro = document.getElementById('formCadastro');
  
    
    loginBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  
    
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    
    formCadastro.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const usuario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        senha: document.getElementById('senha').value,
      };
  
      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert('Seu cadastro foi realizado!');
      window.location.href = 'perfil.html';
    });
  });
  