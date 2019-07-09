if (CRMBot) {
    CRMBot.prototype.specialContext = {
        "wrongInput": ["Anteeksi, en ymmärtänyt kysymystä.", "Voisitko toistaa kysymyksen?"],
        "emptyInput": ["Kysy minulta kysymys päästäksesi alkuun"],
        "rephrase": ["Koskiko kysymyksesi jotain seuraavista asioista:"]
    };

    CRMBot.prototype.keywords = [
		{ "keys": ["hei"], "miten": 0 },
		{ "keys": ["CRM", "mergaus", "mergaaminen"], "value": 1 },
		{ "keys": ["toiminta", "toimii"], "value": 2 },
		{ "keys": ["duplikaatti", "lahjoittaja"], "value": 2 },
		{ "keys": ["lahjoitus", "kontakti"], "account": 3 },
		{ "keys": ["mistä", "mikä"], "on": 3 }];

    CRMBot.prototype.answers = [
        {
            "description": "Hei!",
            "values": ["Hei, kuinka voin auttaa"]
        },
        {
            "description": "Mikä on CRM",
            "values": ["Vastaus kysymykseen loytyy täältä "]
        },
        {
            "description": "Kuinka selaan CRM?",
            "values": [" "]
        },
        {

        ];
}
