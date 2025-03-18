function updateDateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}
setInterval(updateDateTime, 60000);
updateDateTime();