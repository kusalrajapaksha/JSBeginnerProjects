function generate(){
    var quotes = {
        "Albert Camus" : "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        "Albert Einstein" : "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
        "Mary Astell" : "If all men are born free, how is it that all women are born slaves?",
        "Monique Duval" : "She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}