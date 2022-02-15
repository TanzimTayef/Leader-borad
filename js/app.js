// 1. change title color:
const playerTitle = document.getElementById('player-title');
playerTitle.style.color = 'purple';
const bagesTitle = document.getElementById('bages-title');
bagesTitle.style.color = 'purple';



// 2. set background color
const players = document.getElementById('players').childNodes;
for (const player of players) {
        player.style.backgroundColor = 'yellow';
}






