# Digital Basketball Scoreboard

A simple web-based basketball scoreboard you can manage for competitions. **Mobile friendly. Hosted on GitHub Pages.**

---

## Features

- Tabs for each competing team
- Live scoreboard: scores, timer, and quarter/period
- Display player photos/logos
- Clickable buttons for player stats: Points (+1/+2/+3), Rebound, Assist, Steal, Block, Turnover
- Instantly updates scores and stats
- Mobile-friendly layout

---

## Tree Structure

```
basketball-scoreboard/
├── assets/
│   ├── team1/
│   │   ├── player1.jpg
│   │   ├── player2.jpg
│   │   └── ...
│   ├── team2/
│   │   ├── player1.jpg
│   │   ├── player2.jpg
│   │   └── ...
│   └── logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How To Use

### 1. **Clone or Upload Your Repository**
- Fork or download the code to your GitHub account.

### 2. **Add Your Team and Player Images**
- Place team logos and player photos in `assets/team1/` and `assets/team2/`.
- Update player names and photo paths in `script.js` (see the `teams` variable).

### 3. **Edit Team and Player Info**
- In `script.js`, change `teams` array to match your team and player names, and image paths.
    ```js
    const teams = [
        {
            name: "Team 1",
            players: [
                { name: "Player A", photo: "assets/team1/player1.jpg" },
                ...
            ]
        },
        ...
    ];
    ```

### 4. **Customize Event Logo**
- Replace `assets/logo.png` with your event or league logo.

### 5. **Open the Webpage**
- Open `index.html` in your browser to use locally.
- To host on GitHub Pages:
    - Push your repository to GitHub.
    - Go to repo settings → Pages → Choose branch (`main` or `master`) and `/root`.
    - Your scoreboard will be live at `https://<yourusername>.github.io/<reponame>/`.

### 6. **Using the Scoreboard**
- Select teams by clicking the tabs.
- Update scores and stats by clicking the + buttons.
- Start, pause, or reset the game timer.
- Click the "Quarter" to advance to the next period (resets after 4).

---

## FAQ

- **Can I add more teams or players?**  
  Yes! Edit the `teams` array in `script.js` and add more images.

- **Is my data saved?**  
  No, it's a simple scoreboard for live tracking; stats reset if the page reloads.

- **Is it mobile friendly?**  
  Yes, layout adjusts for phones and tablets.

---

## Customization

- For advanced features (data saving, more stats, schedule), consider expanding the JavaScript code.

---

## License

MIT (Free to use and modify)
