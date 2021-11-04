function gameObject() {
    home: {
        teamName: "Brooklyn Nets"
        colors: ["Black", "White"]
        players: [
            alanAnderson = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            reggieEvans = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            brookeLopez = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            masonPlumlee = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            jasonTerry = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ]
        ]
    }
    away: {
        teamName: "Charlotte Hornets"
        colors: ["Turquoise", "Purple"]
        players: [
            jeffAdrien = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            bismakBiyombo = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            deSagnaDiop = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            benGordon = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ],
            brendanHaywood = [
                "number", "shoe", "points", "rebounds", "assists", "steals", "blocks", "slamDunks"
            ]
        ]
    }
}

function iterateGameObj(name, returnVal) {
  game = gameObject();
  for (let team in game) {
    teamPick = game[team]
    for(let players in teamPick) {
      players = teamPick[players]
      for(let player in players) {
        if(player === name) {
          return players[player][returnVal];
        }
      }
    }
  }
}

function numPointsScored(name, cb) {
  cb(name, 'points');
}

function shoeSize(name, cb) {
  cb(name, 'shoe');
}

function teamColors(name) {
  game = gameObject();
  if(game.home.teamName != name) {
    return game.away.teamColors;
  }else{
    return game.home.teamColors;
  }
}

teamNames = () => {
  game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(name) {
  game = gameObject();
  if(game.home.teamName != name) {
    let arr = [];
    for (let team in game) {
      teamPick = game[team]
      for(let players in teamPick) {
        players = teamPick[players]
        for(let player in players) {
          arr.push(player[0]);
        }
      }
    }
    return arr;
  }else{
    let arr = [];
    for (let team in game) {
      teamPick = game[team]
      for(let players in teamPick) {
        players = teamPick[players]
        for(let player in players) {
          arr.push(player[0]);
        }
      }
    }
    return arr;
  }
}

function playerStats(name) {
  game = gameObject();
  for (let team in game) {
    teamPick = game[team]
    for(let players in teamPick) {
      players = teamPick[players]
      for(let player in players) {
        if(player === name) {
          return [...player];
        }
      }
    }
  }
}

function bigShoeRebounds() {
  game = gameObject();
  for (let team in game) {
    teamPick = game[team]
    for(let players in teamPick) {
      players = teamPick[players]
      let max = 0;
      for(let player in players) {
        if(Object.values(playerStats(player))[1] > max) {
          max = Object.values(playerStats(player))[1]
        }
      }
      for(let player in players) {
        if(Object.values(playerStats(player))[1] === max) {
          return Object.values(playerStats(player))[3]
        }
      }
    }
  }
}