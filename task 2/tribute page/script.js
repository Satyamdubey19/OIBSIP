document.getElementById('newQuote').addEventListener('click', function() {
    const quotes = [
        "Self-belief and hard work will always earn you success.",
        "The bat is not a toy, it's a weapon.",
        "I love playing under pressure. In fact, if there's no pressure, then I'm not in the perfect zone.",
        "I like people who do not need everyone to like them.",
        "I always dreamt of holding the bat and winning games for India."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').textContent = randomQuote;
});
