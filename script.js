// Function to format time as HH:MM:SS
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to update displayed time
function updateTime() {
    const timeElement = document.getElementById("user-time");
    const now = new Date();
    timeElement.textContent = formatTime(now);
}

// Initial render
updateTime();

// Updating every second
setInterval(updateTime, 1000);
