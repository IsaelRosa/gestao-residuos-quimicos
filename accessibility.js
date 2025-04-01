// Detecção de navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('user-is-tabbing');
});

// Função para rolar até o conteúdo principal
function skipToContent() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.tabIndex = -1;
        mainContent.focus();
    }
}

// Inicializar componentes ARIA
function initARIAComponents() {
    // Acordeões
    document.querySelectorAll('[aria-expanded]').forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            const content = document.getElementById(this.getAttribute('aria-controls'));
            if (content) {
                content.setAttribute('aria-hidden', expanded);
            }
        });
    });
    
    // Abas
    document.querySelectorAll('[role="tab"]').forEach(tab => {
        tab.addEventListener('click', function() {
            // Lógica para alternar abas
        });
    });
}

// Carregar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initARIAComponents();
    
    // Configurar o link "Pular para conteúdo"
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            skipToContent();
        });
    }
    
    // Verificar se há preferência de alto contraste
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
});