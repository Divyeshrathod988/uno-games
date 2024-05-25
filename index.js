const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('game.ejs', { playerCards: playerCards });
});


const cardUrls = [
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_01.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_02.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_03.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_04.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_05.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_06.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_07.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_08.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_09.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_10.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_11.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_12.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_13.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_14.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_15.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_16.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_17.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_18.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_19.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_20.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_21.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_22.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_23.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_24.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_25.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_26.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_27.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_28.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_29.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_30.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_31.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_32.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_33.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_34.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_35.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_36.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_37.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_38.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_39.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_40.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_41.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_42.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_43.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_44.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_45.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_46.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_47.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_48.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_49.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_50.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_51.png',
   'https://my-uno-cards.s3.eu-north-1.amazonaws.com/cards/UNO-Front_52.png'
];

 
 
let players = [];
let playerCards = {};
let currentPlayerIndex = 0;  


io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);

    socket.on('registerPlayer', (playerData) => {
        const newPlayer = { id: socket.id, name: playerData.name, gender: playerData.gender, cardCount: 0 };
        players.push(newPlayer);
        playerCards[socket.id] = []; 

        console.log(`Player registered: ID=${socket.id}, Name=${playerData.name}, Gender=${playerData.gender}`);

        socket.emit('registrationSuccess', {
            playerName: playerData.name,
            cardCount: 0
        });

        io.emit('playerData', {
            players: players.map(player => ({ name: player.name, cardCount: player.cardCount }))
        });

        io.emit('currentPlayer', players[currentPlayerIndex].id);

    });

    socket.on('getPlayerData', () => {
        socket.emit('playerData', {
            players: players.map(player => ({ name: player.name, cardCount: player.cardCount }))
        });
    });
    playerCards[socket.id] = [];
    let isDrawCardInProgress = false;
    socket.on('drawCard', () => {
        if (!isDrawCardInProgress) {
            isDrawCardInProgress = true;
            const newCard = drawCards[0];
            playerCards[socket.id].push(newCard);
            io.to(socket.id).emit('newCard', newCard);
            isDrawCardInProgress = false;
        } else {
            console.log('drawCard event already in progress.');
        }
        const player = players.find(p => p.id === socket.id);
        if (player) {
            player.cardCount += 1;
            io.emit('playerData', {
                players: players.map(player => ({ name: player.name, cardCount: player.cardCount }))
            });
        }
    });
    socket.on('cardClicked', (card) => {
        const player = players.find(p => p.id === socket.id);
        if (player) {
            player.cardCount -= 1;
            io.emit('playerData', {
                players: players.map(player => ({ name: player.name, cardCount: player.cardCount }))
            });
        }
        io.emit('cardClicked', card);

    });

    socket.on('endTurn', () => {
        if (socket.id === players[currentPlayerIndex].id) {
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            io.emit('currentPlayer', players[currentPlayerIndex].id);
        }
    });


    socket.on('disconnect', () => {
        const index = players.findIndex(player => player.id === socket.id);
        if (index !== -1) {
            console.log(`Player disconnected: ID=${socket.id}`);
            players.splice(index, 1); 
            delete playerCards[socket.id]; 
            if (currentPlayerIndex >= players.length) {
                currentPlayerIndex = 0;
            }
            io.emit('playerData', {
                players: players.map(player => ({ name: player.name, cardCount: player.cardCount }))
            });
            if (players.length > 0) {
                io.emit('currentPlayer', players[currentPlayerIndex].id);
            }
            
        }
    });
    
});


function drawCards(num) {
    const drawnCards = [];
    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * cardUrls.length);
        drawnCards.push({ id: uuidv4(), imageUrl: cardUrls[randomIndex] });
    }
    return drawnCards;
}
io.on('connection', (socket) => {
    // Player draws a card
    socket.on('drawCard', () => {
        const newCard = drawCards(1)[0];
        playerCards[socket.id].push(newCard);
        io.to(socket.id).emit('newCard', newCard);
    });

    socket.on('playCard', (card) => {

        io.emit('cardPlayed', { playerId: socket.id, card });
    });
});
server.listen(9000, () => {
    console.log('Server started on http://13.53.190.236:9000');
});	
