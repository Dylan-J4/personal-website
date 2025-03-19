document.addEventListener('DOMContentLoaded', () => {
    function switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

        const activeTab = document.getElementById(tabId);
        if (activeTab) activeTab.style.display = 'block';
    }

    // Show the first tab on load
    switchTab('tab1');

    // Tab switching logic
    document.querySelectorAll('.tab').forEach(tab => {
        const tabId = tab.getAttribute('data-tab');
        tab.addEventListener('click', () => switchTab(tabId));
    });
});
