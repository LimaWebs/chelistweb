const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

function updateProgress() {
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const progress = (checkedCount / checkboxes.length) * 100;

    progressBar.style.width = progress + '%';

    
    progressText.textContent = `${Math.round(progress)}%`;
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});


updateProgress();
