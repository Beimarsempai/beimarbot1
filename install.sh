#!/usr/bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTRED='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

 echo -e " ${YELLOW}Iniciando..."
sleep 4

echo -e "Bot Creado Por:"
sleep 1

echo -e " ${RED} Felixcrack 409"
echo -e " ${RED} ░Colaboradores░ Satan, CryBaby, Mr.Pato, Gracias a todos.▒"
echo -e " ${RED} Suscríbete s YouTube: Felixcrack 409"
sleep 2

echo -e " ${YELLOW} Hola"
echo -e " ${YELLOW} Se instalarán todas las dependencias necesarias."
echo -e " ${YELLOW} Solo espera un poco..."
sleep 5

echo -e " ${CYAN}A Instalar Todas Las Dependencias ..."
sleep 5

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get update"
echo -e " ${GREEN}"
sleep 5
apt-get update -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get upgrade"
echo -e " ${GREEN}"
sleep 5
apt-get upgrade -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install nodejs"
echo -e " ${GREEN}"
sleep 5
apt-get install nodejs -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install libwebp"
echo -e " ${GREEN}"
sleep 5
apt-get install libwebp -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install ffmpeg"
echo -e " ${GREEN}"
sleep 5
apt-get install ffmpeg -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install wget"
echo -e " ${GREEN}"
sleep 5
apt-get install wget -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install imagemagick"
echo -e " ${GREEN}"
sleep 5
apt-get install imagemagick -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando : npm i jsdom"
echo -e " ${GREEN}"
sleep 5
apt-get install jsdom -y

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: apt-get install tesseract"
echo -e " ${GREEN}"
sleep 5
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: npm i imgbb-uploader"
echo -e " ${GREEN}"
sleep 5
npm i imgbb-uploader

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Limpando el cache npm..."
echo -e " ${GREEN}"
sleep 5
npm cache clean -f
npm install --dev
npm i got

npm i -g cwebp
npm i -g ytdl
npm i node-tesseract-ocr
npm i g-i-s
npm i
npm i got
npm install

echo -e " ${NOCOLOR}"
echo -e " ${PURPLE} Usando El Comando: npm audit fix --force"
echo -e " ${GREEN}"
sleep 5
npm audit fix --force

echo -e " ${YELLOW} Se han instalado todas las dependencias."
echo -e " ${YELLOW} Actualización: cambios mínimos"
echo -e " ${YELLOW} Creado por Felixcrack. Base original por MhankBarBar"
echo -e " ${YELLOW} Use el comando: ${GREEN}npm start ${YELLOW}para iniciar o bot."

