# Digital Basketball Scoreboard

A simple, mobile-friendly basketball scoreboard website for live tracking games, hosted via GitHub Pages.  
**Easily manage teams, players, scores, stats, and export results!**

---

## 🚀 How to Use

### 1. **Setup and Access**

- **Clone or download the repository** to your computer or GitHub account.
- Open `index.html` in your browser to use locally, or [deploy to GitHub Pages](#deploy-to-github-pages) to make it available online.

---

### 2. **Managing Teams & Players (Admin Guide)**

#### **Change Team Names**

- At the top of the page, find the "Team 1 Name" and "Team 2 Name" input fields.
- Type new team names and click **"Update Names"**.
- The scoreboard and tabs are updated instantly!

#### **Edit Players**

- Open `script.js` in any text editor.
- Locate the following section near the top:
    ```js
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
    ```
- **To add/remove players:**
    - Add or remove `{ name: "...", photo: "..." }` objects within each team's `players` array.
    - Make sure `photo` points to the correct file in the `assets/team1/` or `assets/team2/` folder.

#### **Change Player Photos**

- Replace images in `assets/team1/` and `assets/team2/` with your own `.jpg` or `.png` files.
- Update the `photo` path in `script.js` to match your new filenames.

---

### 3. **Change Logo**

- Replace `assets/logo.png` with your event or league logo (PNG or JPG recommended).
- The logo will appear at the top of the webpage automatically.

---

### 4. **Change Background & Styles**

- Open `style.css` in a text editor.
- Adjust colors (backgrounds, buttons, etc):
    - Change `body { background: #f3f6fa; ... }` for the overall background color.
    - Update header color in `header { background: #1877f2; ... }`.
    - Edit button, card, and font colors as desired.
- Save changes and refresh the page to see updates.

---

### 5. **Live Game Usage**

- **Switch Teams:** Use the tabs to view each team's players.
- **Timer:** Start, pause, and reset the game timer.
- **Quarter:** Enter a quarter number and click "Set" to change the quarter.
- **Player Stats:** Click stat buttons (+1, +2, +3, etc.) to update each player's performance. Points automatically update the team score.
- **Export Results:** After the game or each quarter:
    - Click **"Print to Google Docs"** for the final game summary.
    - Click **"Save Quarter to Drive"** to get a summary for the current quarter.
    - Copy the generated summary and paste it into Google Docs or Google Sheets.

---

### 6. **Deploy to GitHub Pages**

1. **Push your repository to GitHub.**
2. Go to your repo’s Settings → Pages.
3. Select the branch (e.g., `main`) and `/ (root)` for the folder.
4. Your scoreboard will be available at:  
   `https://<yourusername>.github.io/<reponame>/`

---

## 📁 Directory Structure

```
basketball-scoreboard/
├── assets/
│   ├── team1/
│   │   ├── player1.jpg
│   │   ├── player2.jpg
│   ├── team2/
│   │   ├── player1.jpg
│   │   ├── player2.jpg
│   └── logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🛠️ Customization Tips

- **Add more teams:** Expand the `teams` array in `script.js`.
- **Change stat categories:** Modify player card HTML and stats code in `script.js`.
- **Mobile tweaks:** Adjust CSS in `style.css` for your preferred look.

---

## ❓ FAQ

- **Do changes persist after refresh?**  
  No, the scoreboard is for live tracking. Data resets on reload. For saving, use the export features.
- **Can I add more stats or features?**  
  Yes! Edit `script.js` for advanced functionality (e.g., fouls, minutes, etc).
- **Can I automate Google Drive uploads?**  
  This site uses copy-paste for security and simplicity. For full integration, see Google Drive API documentation.

---

## 📄 License

MIT (Free to use and modify)
