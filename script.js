// === Demo Data: Change these to match your teams and players ===
const teams = [
    {
        name: "Team 1",
        players: [
            { name: "Player A", photo: "assets/team1/player1.jpg" },
            { name: "Player B", photo: "assets/team1/player2.jpg" },
            { name: "Player C", photo: "assets/team1/player3.jpg" }
        ]
    },
    {
        name: "Team 2",
        players: [
            { name: "Player D", photo: "assets/team2/player1.jpg" },
            { name: "Player E", photo: "assets/team2/player2.jpg" },
            { name: "Player F", photo: "assets/team2/player3.jpg" }
        ]
    }
];

// === Score and Stats Data ===
let activeTeam = 0; // 0 = Team 1, 1 = Team 2
let scores = [0, 0];
let quarter = 1;
let timerSeconds = 600; // 10 min default
let timerInterval = null;
let playerStats = [
    teams[0].players.map(_ => ({
        pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tov: 0
    })),
    teams[1].players.map(_ => ({
        pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tov: 0
    }))
];

// === DOM Elements ===
const team1Tab = document.getElementById('team1Tab');
const team2Tab = document.getElementById('team2Tab');
const team1Score = document.getElementById('team1Score');
const team2Score = document.getElementById('team2Score');
const team1Name = document.getElementById('team1Name');
const team2Name = document.getElementById('team2Name');
const quarterInput = document.getElementById('quarterInput');
const updateQuarterBtn = document.getElementById('updateQuarterBtn');
const timerElem = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const playersList = document.getElementById('playersList');
const team1NameInput = document.getElementById('team1NameInput');
const team2NameInput = document.getElementById('team2NameInput');
const updateNamesBtn = document.getElementById('updateNamesBtn');
const printToDocsBtn = document.getElementById('printToDocsBtn');
const docsExport = document.getElementById('docsExport');
const docsInstructions = document.getElementById('docsInstructions');
const saveQuarterBtn = document.getElementById('saveQuarterBtn');
const quarterExport = document.getElementById('quarterExport');
const quarterInstructions = document.getElementById('quarterInstructions');

// === Team Tab Handling ===
team1Tab.addEventListener('click', () => {
    activeTeam = 0;
    team1Tab.classList.add('active');
    team2Tab.classList.remove('active');
    renderPlayers();
});
team2Tab.addEventListener('click', () => {
    activeTeam = 1;
    team2Tab.classList.add('active');
    team1Tab.classList.remove('active');
    renderPlayers();
});

// === Team Name Editing ===
updateNamesBtn.addEventListener('click', () => {
    teams[0].name = team1NameInput.value || "Team 1";
    teams[1].name = team2NameInput.value || "Team 2";
    team1Tab.textContent = teams[0].name;
    team2Tab.textContent = teams[1].name;
    renderScoreboard();
});

// === Editable quarter logic ===
updateQuarterBtn.addEventListener('click', () => {
    const q = parseInt(quarterInput.value, 10);
    if (q >= 1 && q <= 4) {
        quarter = q;
        renderScoreboard();
    }
});

// === Scoreboard Rendering ===
function renderScoreboard() {
    team1Score.textContent = scores[0];
    team2Score.textContent = scores[1];
    team1Name.textContent = teams[0].name;
    team2Name.textContent = teams[1].name;
    quarterInput.value = quarter;
    timerElem.textContent = formatTime(timerSeconds);
}
function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
}

// === Timer Controls ===
startBtn.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                timerElem.textContent = formatTime(timerSeconds);
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }, 1000);
    }
});
pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 600;
    timerElem.textContent = formatTime(timerSeconds);
    quarter = 1;
    quarterInput.value = quarter;
    scores = [0, 0];
    renderScoreboard();
    playerStats = [
        teams[0].players.map(_ => ({ pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tov: 0 })),
        teams[1].players.map(_ => ({ pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tov: 0 }))
    ];
    renderPlayers();
});

// === Player Cards Rendering ===
function renderPlayers() {
    playersList.innerHTML = '';
    teams[activeTeam].players.forEach((player, idx) => {
        const stats = playerStats[activeTeam][idx];
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.photo}" alt="${player.name}" class="player-photo">
            <div class="player-name">${player.name}</div>
            <div class="stats-row">
                <span class="stat-label">PTS:</span> <span class="stat-value">${stats.pts}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="pts" data-val="1">+1</button>
                <button class="stat-btn" data-idx="${idx}" data-type="pts" data-val="2">+2</button>
                <button class="stat-btn" data-idx="${idx}" data-type="pts" data-val="3">+3</button>
            </div>
            <div class="stats-row">
                <span class="stat-label">REB:</span> <span class="stat-value">${stats.reb}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="reb" data-val="1">+1</button>
            </div>
            <div class="stats-row">
                <span class="stat-label">AST:</span> <span class="stat-value">${stats.ast}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="ast" data-val="1">+1</button>
            </div>
            <div class="stats-row">
                <span class="stat-label">STL:</span> <span class="stat-value">${stats.stl}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="stl" data-val="1">+1</button>
            </div>
            <div class="stats-row">
                <span class="stat-label">BLK:</span> <span class="stat-value">${stats.blk}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="blk" data-val="1">+1</button>
            </div>
            <div class="stats-row">
                <span class="stat-label">TOV:</span> <span class="stat-value">${stats.tov}</span>
                <button class="stat-btn" data-idx="${idx}" data-type="tov" data-val="1">+1</button>
            </div>
        `;
        playersList.appendChild(card);
    });

    // Add event listeners for stat buttons
    document.querySelectorAll('.stat-btn').forEach(btn => {
        btn.onclick = function () {
            const idx = +btn.dataset.idx;
            const type = btn.dataset.type;
            const val = +btn.dataset.val;
            playerStats[activeTeam][idx][type] += val;
            if (type === "pts") {
                scores[activeTeam] += val;
                renderScoreboard();
            }
            renderPlayers();
        };
    });
}

// === Print to Google Docs ===
printToDocsBtn.addEventListener('click', () => {
    let summary = `Basketball Game Result\n\n`;
    summary += `${teams[0].name} vs ${teams[1].name}\n`;
    summary += `Final Score: ${teams[0].name} ${scores[0]} - ${scores[1]} ${teams[1].name}\n`;
    summary += `Quarter: ${quarter}\n\n`;

    summary += `Team Stats:\n`;

    teams.forEach((team, tIdx) => {
        summary += `\n${team.name}:\n`;
        team.players.forEach((player, pIdx) => {
            const stats = playerStats[tIdx][pIdx];
            summary += `- ${player.name}: `;
            summary += `PTS: ${stats.pts}, REB: ${stats.reb}, AST: ${stats.ast}, ST: ${stats.stl}, BLK: ${stats.blk}, TOV: ${stats.tov}\n`;
        });
    });

    docsExport.value = summary;
    docsExport.style.display = 'block';
    docsInstructions.style.display = 'block';
    docsExport.focus();
    docsExport.select();
});

// === Save quarter to Google Drive (copy-paste summary) ===
saveQuarterBtn.addEventListener('click', () => {
    let summary = `Quarter ${quarter} Summary\n`;
    summary += `${teams[0].name}: ${scores[0]}\n`;
    teams[0].players.forEach((p, i) => {
        let stats = playerStats[0][i];
        summary += `- ${p.name}: PTS ${stats.pts}, REB ${stats.reb}, AST ${stats.ast}, STL ${stats.stl}, BLK ${stats.blk}, TOV ${stats.tov}\n`;
    });
    summary += `${teams[1].name}: ${scores[1]}\n`;
    teams[1].players.forEach((p, i) => {
        let stats = playerStats[1][i];
        summary += `- ${p.name}: PTS ${stats.pts}, REB ${stats.reb}, AST ${stats.ast}, STL ${stats.stl}, BLK ${stats.blk}, TOV ${stats.tov}\n`;
    });
    quarterExport.value = summary;
    quarterExport.style.display = 'block';
    quarterInstructions.style.display = 'block';
    quarterExport.focus();
    quarterExport.select();
});

// === Initial Render ===
renderScoreboard();
renderPlayers();
