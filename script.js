document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cards = [
        'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
        'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
    ];

    // Shuffle cards
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(cards);

    // Create the game board
    cards.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter;
        card.innerText = '';
        gameBoard.appendChild(card);
    });

    let firstCard = null;
    let secondCard = null;
    let lockBoard = true;

    // Initial reveal of cards for 1 minute
    function revealCards() {
        document.querySelectorAll('.card').forEach(card => {
            card.innerText = card.dataset.letter;
            card.classList.add('flipped');
        });

        setTimeout(() => {
            document.querySelectorAll('.card').forEach(card => {
                card.innerText = '';
                card.classList.remove('flipped');
                card.addEventListener('click', handleCardClick);
            });
            lockBoard = false;
        }, 60000); // 1 minute = 60000 milliseconds
    }

    function handleCardClick(e) {
        if (lockBoard) return;
        const clickedCard = e.target;

        if (clickedCard === firstCard) return;

        clickedCard.classList.add('flipped');
        clickedCard.innerText = clickedCard.dataset.letter;

        if (!firstCard) {
            firstCard = clickedCard;
            return;
        }

        secondCard = clickedCard;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.letter === secondCard.dataset.letter;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            firstCard.innerText = '';
            secondCard.classList.remove('flipped');
            secondCard.innerText = '';
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    revealCards();
});
