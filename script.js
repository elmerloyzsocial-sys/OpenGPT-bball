// --- Team Names ---
document.getElementById('updateNamesBtn').addEventListener('click', function() {
    document.getElementById('team1Name').textContent =
        document.getElementById('team1NameInput').value;
    document.getElementById('team2Name').textContent =
        document.getElementById('team2NameInput').value;
    // Optionally update the tab names as well
    document.getElementById('team1Tab').textContent =
        document.getElementById('team1NameInput').value;
    document.getElementById('team2Tab').textContent =
        document.getElementById('team2NameInput').value;
});

// --- Quarter ---
document.getElementById('updateQuarterBtn').addEventListener('click', function() {
    let quarterInput = document.getElementById('quarterInput').value;
    // You could also display quarter somewhere if needed
    // document.getElementById('quarterDisplay').textContent = quarterInput;
});

// --- Timer Logic ---
let timerInterval = null;
let timerRunning = false;
let countdownSeconds = getSecondsFromTimeString(document.getElementById('timerInput').value);

function getSecondsFromTimeString(timeStr) {
    // MM:SS to total seconds
    const parts = timeStr.split(':');
    if (parts.length !== 2) return 0;
    const mins = parseInt(parts[0], 10);
    const secs = parseInt(parts[1], 10);
    return (isNaN(mins) ? 0 : mins) * 60 + (isNaN(secs) ? 0 : secs);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update timer display when "Set" is clicked
document.getElementById('updateTimeBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('timerInput').value;
    const timerSpan = document.getElementById('timer');
    if (/^[0-9]{1,2}:[0-9]{2}$/.test(inputValue)) {
        timerSpan.textContent = inputValue;
        countdownSeconds = getSecondsFromTimeString(inputValue); // Update countdown start value
        stopTimer(); // Stop if running
    } else {
        alert('Please enter time in MM:SS format.');
    }
});

// Timer countdown start/pause/reset
function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    // Always start from the value currently displayed
    countdownSeconds = getSecondsFromTimeString(document.getElementById('timer').textContent);

    timerInterval = setInterval(function() {
        if (countdownSeconds > 0) {
            countdownSeconds--;
            document.getElementById('timer').textContent = formatTime(countdownSeconds);
        } else {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    timerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    // Reset timer to value in input box
    const inputValue = document.getElementById('timerInput').value;
    document.getElementById('timer').textContent = inputValue;
    countdownSeconds = getSecondsFromTimeString(inputValue);
}

// Start button
document.getElementById('startBtn').addEventListener('click', function() {
    startTimer();
});

// Pause button
document.getElementById('pauseBtn').addEventListener('click', function() {
    stopTimer();
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', function() {
    resetTimer();
});

// --- Quarter Export/Save (simplified stub) ---
document.getElementById('saveQuarterBtn').addEventListener('click', function() {
    // Example: create a summary in the textarea
    let team1 = document.getElementById('team1Name').textContent;
    let team2 = document.getElementById('team2Name').textContent;
    let score1 = document.getElementById('team1Score').textContent;
    let score2 = document.getElementById('team2Score').textContent;
    let quarter = document.getElementById('quarterInput').value;
    let timer = document.getElementById('timer').textContent;

    let summary = `Quarter ${quarter}\n${team1}: ${score1}\n${team2}: ${score2}\nTime Remaining: ${timer}`;
    document.getElementById('quarterExport').value = summary;
    document.getElementById('quarterExport').style.display = 'block';
    document.getElementById('quarterInstructions').style.display = 'block';
});

// --- Print to Docs Export (stub) ---
document.getElementById('printToDocsBtn').addEventListener('click', function() {
    // Example: export whole game summary (stub)
    let team1 = document.getElementById('team1Name').textContent;
    let team2 = document.getElementById('team2Name').textContent;
    let score1 = document.getElementById('team1Score').textContent;
    let score2 = document.getElementById('team2Score').textContent;
    let quarter = document.getElementById('quarterInput').value;
    let timer = document.getElementById('timer').textContent;

    let gameSummary = `Game Summary\nQuarter: ${quarter}\n${team1}: ${score1}\n${team2}: ${score2}\nTime Remaining: ${timer}`;
    document.getElementById('docsExport').value = gameSummary;
    document.getElementById('docsExport').style.display = 'block';
    document.getElementById('docsInstructions').style.display = 'block';
});

// --- Tabs (Team 1/Team 2) example logic ---
document.getElementById('team1Tab').addEventListener('click', function() {
    document.getElementById('team1Tab').classList.add('active');
    document.getElementById('team2Tab').classList.remove('active');
    // Show team 1 players, hide team 2 (implement as needed)
});

document.getElementById('team2Tab').addEventListener('click', function() {
    document.getElementById('team2Tab').classList.add('active');
    document.getElementById('team1Tab').classList.remove('active');
    // Show team 2 players, hide team 1 (implement as needed)
});

// --- You can add player list logic below this as needed ---
