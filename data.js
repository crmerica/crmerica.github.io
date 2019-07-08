if (answerBot) {
    answerBot.prototype.specialContext = {
        "wrongInput": ["Anteeksi, en ymmärtänyt kysymystä.", "Voisitko toistaa kysymyksen?"],
        "emptyInput": ["Please say something", "Speak louder", "Well i can't read minds."],
        "rephrase": ["Koskiko kysymyksesi jotain seuraavista asioista:"]
    };

    answerBot.prototype.keywords = [
        { "keys": ["hei"], "value": 0 },
        { "keys": ["päivää"], "value": 0 },
        { "keys": ["crm", "mergaus", "mergaaminen"], "value": 1 },
        { "keys": ["software", "development"], "value": 2 },
        { "keys": ["software", "engineering"], "value": 2 },
        { "keys": ["who", "made", "you"], "value": 3 },
        { "keys": ["who", "wrote", "you"], "value": 3 },
        { "keys": ["who", "coded", "you"], "value": 3 },
        { "keys": ["is", "this", "real", "life"], "value": 4 },
        { "keys": ["who", "is", "deni"], "value": 5 },
        { "keys": ["tell", "me", "about", "deni"], "value": 5 },
        { "keys": ["tell", "me", "about", "author"], "value": 5 },
	    { "keys": ["show", "me", "author"], "value": 5 },
        { "keys": ["can", "see", "source"], "value": 6 },
        { "keys": ["can", "see", "sourcecode"], "value": 6 },
        { "keys": ["show", "me", "code"], "value": 6 },
        { "keys": ["how", "are", "you"], "value": 7 },
	    { "keys": ["who", "is", "this"], "value": 8 }];

    answerBot.prototype.answers = [
        {
            "description": "Hei!",
            "values": ["Hei, kuinka voin auttaa"]
        },
        {
            "description": "What is the answer to life the universe and everything?",
            "values": ["Vastaus kysymykseen loytyy täältä "]
        },
        {
            "description": "What is software development?",
            "values": ["Programming! Do you speak it?"]
        },
        {
            "description": "Who created me?",
            "values": ["I was created by another <a href='http://about.me/deni' target='_blank'>bot</a>.", "The question is who sent you here?"]
        },
        {
            "description": "Is this real life?",
            "values": ["No this is the internetz!", "Find out <a href='http://www.youtube.com/watch?v=txqiwrbYGrs' target='_blank'>yourself</a>!"]
        },
        {
            "description": "Who is Deni?",
            "values": ["This is his <a href='https://plus.google.com/+DeniSpasovski/' target='_blank'>G+ profile</a>.", "This is his <a href='www.linkedin.com/in/denispasovski' target='_blank'>Linkedin profile</a>."]
        },
        {
            "description": "Where is your source?",
            "values": ["Here is the <a href='https://github.com/denimf/Answer-bot' target='_blank'>source</a>."]
        },
        {
            "description": "How are you?",
            "values": ["I'm good how are you?"]
        },
        {
            "description": "Who is this?",
            "values": ["StackOverflow Exception occurred", "The question is who are you?"]
        }
        ];
}
