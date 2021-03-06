class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number')
        this.spanWins = document.querySelector('.score span.win')
        this.spanLosses = document.querySelector('.score span.loss')
        this.render()
    }
    render(colors = ['gray', 'gray', 'gray'], bid = 0, wonMoney = 0, money = this.wallet.getWalletValue(), stats = [0, 0, 0], result = '') {
        // console.log('gramy')
        this.boards.forEach((card, index) => {
            card.style.backgroundColor = colors[index]
        })
        if (result) {
            result = `Wygrałeś ${wonMoney}`
        } else if (!result && result != '') {
            result = `Przegrałeś ${bid}`
        }
        this.spanResult.textContent = result
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[0]
        this.spanLosses.textContent = stats[0]

    }
    startGame() {

    }
}