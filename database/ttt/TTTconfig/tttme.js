const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」
by: ${xd}
❖ NOMBRE: ${pushname} 

    ➣ Victorias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Puntos  : ${userPoints} ✨
    `
}

exports.tttme = tttme