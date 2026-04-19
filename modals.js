const overlay = document.getElementById('modal-overlay');
const btnAbout = document.getElementById('open-about');
const btnPolicy = document.getElementById('open-policy');
const modalAbout = document.getElementById('modal-about');
const modalPolicy = document.getElementById('modal-policy');
const modalLinks = document.getElementById('modal-links');
const btnLinks = document.getElementById('open-links');
const closeBtns = document.querySelectorAll('.close-modal-btn');

function openModal(modal) {
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    overlay.classList.remove('active');
    modalAbout.classList.remove('active');
    modalPolicy.classList.remove('active');
    modalLinks.classList.remove('active');
    document.body.style.overflow = ''; 
}

if (btnAbout) {
    btnAbout.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal(modalAbout);
    });
}

if (btnPolicy) {
    btnPolicy.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalPolicy);
    });
}

if (btnLinks) {
    btnLinks.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalLinks);
    });
}

closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
    }
});