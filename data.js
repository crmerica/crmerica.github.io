if (answerBot) {
    answerBot.prototype.specialContext = {
        "wrongInput": ["En ymmärtänyt kysymystä.", "Voisitko muotoilla kysymyksen uudelleen?"],
        "emptyInput": ["Vain kysymällä selviää!", "Kysy rohkeasti.", "Mitä haluat tietää CRM?."],
        "rephrase": ["Tässä on muutamia avainsanoja, jotka voivat auttaa sinua / kontakti, account, mergaaminen, lahjoittaja, tiedonhaku, erikoishaku"]
    };

    answerBot.prototype.keywords = [
        { "keys": ["hei"], "value": 0 },
        { "keys": ["päivää"], "value": 0 },
        { "keys": ["life", "universe", "everything"], "value": 1 },
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
            "values": ["Hei!", "Hei, kuinka voin auttaa tänään", "Hei! Mikä mieltäsi askarruttaa CRM liittyen?"]
        },
        {
            "description": "Account",
            "values": ["Account on..."]
        },
        {
            "description": "Kontakti",
            "values": ["Kontakti tarkoittaa..."]
        },
        {
            "description": "Mergaus",
            "values": ["Mergaus tarkoittaa..."]
        },
        {
            "description": "Duplikaatti",
            "values": ["Duplikaatti tarkoittaa..."]
        },
        {
            "description": "Tiedonhaku",
            "values": ["Tiedonhaku tarkoittaa..."]
        },
        {
            "description": "Erikoishaku",
            "values": ["Erikoishaku tarkoittaa..."]
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
