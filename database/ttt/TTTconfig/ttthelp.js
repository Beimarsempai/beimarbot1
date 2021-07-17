const ttthelp = (prefix) => {
    return `
「 \u{1F4AE} Tic Tac Toe \u{1F4AE} 」
By: ${xd}
◪ VERSIÓN BETA

◪ SOLO PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDADE ] 」
  └─ ❏ solo una persona a la vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente al azar
  │     (Solo tuvo la mala suerte de perder en esto)
  ├─ ❏ normal : 66% de casualidad
  │ bloquear y ganar
  ├─ ❏ hard : 100% de casualidad
  │ bloquear y ganar 
  └─ ❏ impossible : solo Kuuhaku
           puede vencer esto

◪ TEMPORIZADOR
  │
  ├─ ❏ Un nuevo partido solo puede
  │ comenzar después de un descanso
  │ 4 minutos desde el inicio
  │ del juego anterior
  │
  └─ ❏ El partido terminará
           automáticamente después de 4 minutos
           
◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Ejemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

◪ TU ESTADO
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Victoria : +「 25 / 50 」
  │     └ Derrota : -「 200 / 200 」
  │
  ├─ ❏ NORMAL
  │     ├ Victoria : +「 75 / 150 」
  │     └ Derrota : -「 75 / 150 」
  │
  ├─ ❏ HARD
  │     ├ Victoria : +「 200 / 400 」
  │     └ Derrota : -「 25 / 50 」
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Victoria : +「 1000 / 2000 」
  │     └ Derrota : -「 0 / 0 」
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NO ACABADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp