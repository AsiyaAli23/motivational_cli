const quotes = [
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does."
];

test("should return a valid quote", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    expect(quotes).toContain(randomQuote);
});
