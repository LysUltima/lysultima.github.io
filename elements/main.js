var playerLives=10,AILives=10;function buttonClicked(e){if(e!=playerPrevMove){playerPrevMove=e;for(var t=AIPrevMove;t==AIPrevMove;)if(0==Math.floor(4*Math.random()))switch(e){case 0:t=2;break;case 1:t=0==Math.floor(2*Math.random())?0:3;break;case 2:t=1;break;case 3:t=0==Math.floor(2*Math.random())?0:2}else t=Math.floor(4*Math.random());AIPrevMove=t;var n=playerLives,a=AILives;switch(e){case 0:2==t&&playerLives--,document.getElementById("player-element").setAttribute("src","earth_icon.png"),document.getElementById("player-element").setAttribute("alt","earth");break;case 1:1==t||2==t?AILives-=4:0==t&&AILives++,document.getElementById("player-element").setAttribute("src","fire_icon.png"),document.getElementById("player-element").setAttribute("alt","fire");break;case 2:1!==t&&playerLives++,document.getElementById("player-element").setAttribute("src","water_icon.png"),document.getElementById("player-element").setAttribute("alt","water");break;case 3:1==t?AILives-=3:playerLives--,document.getElementById("player-element").setAttribute("src","air_icon.png"),document.getElementById("player-element").setAttribute("alt","water")}switch(t){case 0:2==e&&AILives--,document.getElementById("ai-element").setAttribute("src","earth_icon.png"),document.getElementById("ai-element").setAttribute("alt","earth");break;case 1:1==e||2==e?playerLives-=4:0==e&&playerLives++,document.getElementById("ai-element").setAttribute("src","fire_icon.png"),document.getElementById("ai-element").setAttribute("alt","fire");break;case 2:1!==e&&AILives++,document.getElementById("ai-element").setAttribute("src","water_icon.png"),document.getElementById("ai-element").setAttribute("alt","water");break;case 3:1==e?playerLives-=3:AILives--,document.getElementById("ai-element").setAttribute("src","air_icon.png"),document.getElementById("ai-element").setAttribute("alt","water")}document.getElementById("player-lives").innerHTML="Player Lives: "+playerLives,document.getElementById("ai-lives").innerHTML="AI Lives: "+AILives,n>playerLives?(document.getElementById("player-lives-change").setAttribute("class","red"),document.getElementById("player-lives-change").innerHTML=playerLives-n):n==playerLives?(document.getElementById("player-lives-change").setAttribute("class",""),document.getElementById("player-lives-change").innerHTML="0"):(document.getElementById("player-lives-change").setAttribute("class","green"),document.getElementById("player-lives-change").innerHTML="+"+(playerLives-n)),a>AILives?(document.getElementById("ai-lives-change").setAttribute("class","red"),document.getElementById("ai-lives-change").innerHTML=AILives-a):a==AILives?(document.getElementById("ai-lives-change").setAttribute("class",""),document.getElementById("ai-lives-change").innerHTML="0"):(document.getElementById("ai-lives-change").setAttribute("class","green"),document.getElementById("ai-lives-change").innerHTML="+"+(AILives-a)),setTimeout(checkWin,200)}else alert("You cannot use an element twice in a row.")}function checkWin(){playerLives<=0&&endGame(playerLives>AILives?0:playerLives==AILives?1:2),AILives<=0&&endGame(0)}function endGame(e){0==e?alert("You won!"):1==e?alert("It's a tie."):alert("You lost..."),playerLives=10,AILives=10,playerPrevMove=-1,AIPrevMove=-1,document.getElementById("player-lives").innerHTML="Player Lives: "+playerLives,document.getElementById("ai-lives").innerHTML="AI Lives: "+AILives,document.getElementById("player-lives-change").setAttribute("class",""),document.getElementById("player-lives-change").innerHTML="",document.getElementById("ai-lives-change").setAttribute("class",""),document.getElementById("ai-lives-change").innerHTML=""}playerPrevMove=-1,AIPrevMove=-1;