const games = [
    { id: 1, title: 'Red Dead Redemption\n II',  image: 'https://c4.wallpaperflare.com/wallpaper/562/164/960/sunset-the-game-art-rockstar-concept-art-hd-wallpaper-preview.jpg' },
    { id: 2, title: 'GTA V',  image: 'https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg' },
    { id: 3, title: 'Call of Duty',  image: 'https://c4.wallpaperflare.com/wallpaper/659/121/260/call-of-duty-captain-price-m4-carbine-rifles-hd-wallpaper-preview.jpg' },
    { id: 4, title: 'Cricket 24',  image: 'https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-972873-52.jpg' },
    { id: 5, title: 'Mafia Definitive\n Edition',  image: 'https://c4.wallpaperflare.com/wallpaper/199/57/202/mafia-ii-mafia-the-city-of-lost-heaven-vito-scaletta-video-game-art-video-game-characters-hd-wallpaper-preview.jpg' },
    { id: 6, title: 'Watch Dogs',  image: 'https://c4.wallpaperflare.com/wallpaper/664/121/95/watch-dogs-watch-dogs-legion-hd-wallpaper-preview.jpg' },
    { id: 7, title: 'Assassins Creed Valhalla',  image: 'https://c4.wallpaperflare.com/wallpaper/837/942/437/assassin-s-creed-valhalla-viking-video-games-video-game-art-digital-art-hd-wallpaper-preview.jpg' },
    { id: 8, title: 'Max Payne-3 ',  image: 'https://c4.wallpaperflare.com/wallpaper/247/100/843/max-payne-rockstar-games-max-payne-3-movies-wallpaper-preview.jpg' },
    { id: 9, title: 'CyberPunk 2077',  image: 'https://c4.wallpaperflare.com/wallpaper/410/716/989/cyberpunk-2077-video-games-gun-3d-yellow-background-hd-wallpaper-preview.jpg' },
    { id: 10, title: 'Battlefield 2042',  image: 'https://c4.wallpaperflare.com/wallpaper/826/768/1017/battlefield-2042-battlefield-hd-wallpaper-preview.jpg' },
];

function renderGameItems() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <span>${game.title}</span>
            <button class="buy-btn" onclick="checkout('${game.title}')">
                <i class="fab fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
            </button>
        `;
        gameList.appendChild(gameItem);
    });
}

function checkout(title, price) {
    const whatsappNumber = '+918383853597'; 
    const message = encodeURIComponent(`Hello\n I want to buy ${title}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappURL;
}

renderGameItems();


//  <span>$${game.price.toFixed(2)}</span>