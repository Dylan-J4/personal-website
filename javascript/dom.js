// Check if there is saved input in localStorage when the page loads
window.onload = function() {
    const saved = localStorage.getItem('userInput');
    if (saved) {
        document.getElementById('savedInput').textContent = saved;
    }
};

// Automatically save input whenever it changes
document.getElementById('userInput').addEventListener('input', function() {
    const input = this.value;
    localStorage.setItem('userInput', input);
    document.getElementById('savedInput').textContent = input;
});

function switchTab(tabId) {

    // Hide all tab contents
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected tab content
    let activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';

    // Update tab button styles
}
