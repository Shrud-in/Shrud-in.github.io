document.addEventListener('DOMContentLoaded', function () {
    const loadingDiv = document.getElementById('loading');
    const mainContentDiv = document.getElementById('main-content');
    const confettiContainer = document.getElementById('confetti-container');
    const balloonsContainer = document.getElementById('balloons-container');

    // Show the loader for a few seconds
    setTimeout(() => {
        loadingDiv.style.opacity = '0'; // Hide the loader
        setTimeout(() => {
            loadingDiv.style.display = 'none'; // Remove the loader from the DOM
        }, 500); // Change the duration if needed
        mainContentDiv.style.opacity = '1'; // Make the main content visible
    }, 3000);

    // Only animate the heart during preloader
    if (loadingDiv.style.opacity === '1') {
        const heartElement = document.querySelector('.heart');
        heartElement.style.animation = 'heartbeat 1s infinite';
    }

    // createShapes(confettiContainer);

    const confettiQuantity = parseInt(confettiContainer.getAttribute('data-confetti')) || 0;
    const balloonsQuantity = parseInt(balloonsContainer.getAttribute('data-balloons')) || 0;

    console.log(confettiQuantity, balloonsQuantity);

    // createElements(confettiContainer, 'confetti', confettiQuantity);
    // createElements(balloonsContainer, 'balloons', balloonsQuantity);
    // createShapes(document.querySelector('.background-shapes'));

    // Additional code for confetti animation
    createConfetti(confettiContainer, confettiQuantity);

    function createElements(container, className, quantity) {
        for (let i = 0; i < quantity; i++) {
            const element = document.createElement('div');
            element.className = className;
            container.appendChild(element);
        }
    }

    function createShapes(container) {
        if (!container) {
            return;
        }

        const shapes = [
            { class: 'confetti-circle', color: '#d13447' },
            { class: 'confetti-rectangle', color: '#ffbf00' },
            { class: 'confetti-triangle', color: '#263672' },
        ];

        shapes.forEach(shapeData => {
            const shape = document.createElement('div');
            shape.className = shapeData.class;
            shape.style.backgroundColor = shapeData.color;
            setPosition(shape, container.clientWidth, container.clientHeight);
            container.appendChild(shape);
        });
    }

    function createConfetti(container, quantity) {
        for (let i = 0; i < quantity; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = getRandomColor();
            setPosition(confetti, container.clientWidth, container.clientHeight);
            container.appendChild(confetti);
        }
    }

    function setPosition(element, containerWidth, containerHeight) {
        const randomX = Math.random() * containerWidth;
        const randomY = Math.random() * containerHeight;

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to update the clue text
    function updateClue(link) {
        const clues = {
            link1: "In a realm of whimsy and cuddles so dear, where dreams take flight and rainbows appear. Find a fluffy friend, our son so clear, where bedtime stories and laughter endear",
            link2: "Where fashion whispers in fabrics so fine, your birthday look awaits in a place that's divine. In the store where your style does shine, find your next gift, my fashion valentine",
            link3: "A journey awaits, just you and me, in a car of dreams, where love is the key. Seek your next delight, where the waves meet the sea, in a day made for us, where laughter is free",
            link4: "In the heart of our favorite recipes, where sweet dreams and cocoa kisses meet, find your first delight where our love story is sweetly complete",
            link5: "In the oven's warm embrace, where sweetness transforms into delight, seek your next surprise in a pan where chocolaty dreams take flight",
            link6: "When life gets busy, and you need a sweet retreat, have a break, have a Kit Kat, where our next gift is discreet",
            // Add clues for other links
        };

        // Update the clue text in the modal
        clueTextElement.textContent = clues[link];
    }

    // Function to redirect to the specified link
    function redirectTo(link) {
        window.location.href = link;
    }

    const clueTextElement = document.getElementById('clueText');

    // Event listener for button clicks
    document.getElementById('buttons').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const link = event.target.getAttribute('data-link');
            updateClue(link);
        }
    });

    // Function to redirect to the specified link
    function redirectTo(link) {
        window.location.href = link;
    }
});
