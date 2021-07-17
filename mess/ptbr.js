const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`⏳Espera Unos Momentos...⏳\n\nSi no funciona, use el comando nuevamente.`
}

exports.tterro = () => {
	return `Debes Escribir ${prefix}ppt piedra, ${prefix}ppt papel o ${prefix}ppt tijera`
}

exports.waitmusic = () => {
	return`⏳Espera Un Momento...⏳\n\nTu música se enviará en 2 minutos.\nSi no es así, intente especificar el nombre de la canción.`
}

exports.waitfig = () => {
	return`⏳Espera Un Momento...⏳\n\nLa creación de pegatinas lleva unos segundos.`
}

exports.waitgif = () => {
	return`⏳Espera Un Momento...⏳\n\nLa creación de pegatinas lleva unos segundos\nLa creación de stickergif toma de 10 segundos a 1 minuto dependiendo del tamaño del gif\nLímite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Espera Un Momento...⏳\n\nEl bot enviará el hentai en 2 minutos.\nInténtelo de nuevo si no envía.`
}

exports.waitpor = () => {
	return`⏳Espera Un Momento...⏳\n\nEl bot enviará la imagen\nInténtelo de nuevo si no envía.`
}

exports.waitimg= () => {
	return`⏳Espera Un Momento...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nInténtelo de nuevo si no envía.`
}

exports.success = () => {
	return`✅Éxito✅`
}

exports.levelon = () => {
	return`✅Se Ha Activado La Función De Niveles✅`
}

exports.leveloff = () => {
	return`❌La Función De Nivel Fue Deshabilitada❌`
}

exports.levelnoton = () => {
	return`🚫La Función De Nivel Está Desactivada🚫`
}

exports.levelnol = () => {
	return`Estas en el nivel 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = () => {
	return`🛂Estás Baneado Del Bot🛂`
}

exports.stick = () => {
	return`❌Se produjo un error al crear el sticker.❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌El comando solo se puede usar en grupos.❌`
}

exports.ownerG = (ownerName) => {
	return`El comando solo puede ser utilizado por ${ownerName}🕴`
}

exports.lia = () => {
	return`Solo Beimar puede usar este comando😳👌`
}

exports.ownerB = (ownerName) => {
	return`El comando solo puede ser utilizado por ${ownerName}🕴`
}

exports.admin = () => {
	return`❌El comando solo puede ser utilizado por administradores de grupo❌`
}

exports.Badmin = () => {
	return`❌El comando solo se puede usar cuando el bot es un administrador de grupo❌'`
}

exports.registrarB = (pushname, prefix) => {
	return`Hola ${pushname}\n\nAún no te has registrado....\n\nPara registrarse y poder utilizar todos los comandos del bot, utilice:\n\nComando: ${prefix}registrar Tu Nombre|Tu Edad\nPor ejemplo: ${prefix}registrar Felix|16`
}

exports.nsfw = () => {
	return`🚫Funciones NSFW deshabilitadas en este grupo🚫`
}

exports.erro = () => {
	return`❌Ocurrio Un Error❌\n\nInténtalo de nuevo.`
}


