document.addEventListener('DOMContentLoaded', () => {

    function switchTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        const activeTab = document.getElementById(tabId);
        if (activeTab) activeTab.style.display = 'block';
    }
    // Show the first tab on load
    switchTab('tab2');

    document.querySelectorAll('.tab').forEach(tab => {
        const tabId = tab.getAttribute('data-tab');
        tab.addEventListener('click', () => switchTab(tabId));
    });


    function switchDay(dayId) {
        document.querySelectorAll('.days-content').forEach(day => day.style.display = 'none');
        const activeDay = document.getElementById(dayId);
        if (activeDay) activeDay.style.display = 'block';
    }

    switchDay('day1');
    document.querySelectorAll('.days-btn').forEach(btn => {
        const dayId = btn.getAttribute('data-tab');
        btn.addEventListener('click', () => switchDay(dayId));
    });
});
