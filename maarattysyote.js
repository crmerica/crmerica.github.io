if (CRMBot) {
    CRMBot.prototype.specialContext = {
        "wrongInput": ["Anteeksi, en ymmärtänyt kysymystä.", "Voisitko toistaa kysymyksen?"],
        "emptyInput": ["Kysy minulta kysymys päästäksesi alkuun"],
        "rephrase": ["Koskiko kysymyksesi jotain seuraavista asioista: "]
    };

    CRMBot.prototype.keywords = [
        { "keys": ["hei"], "value": 0 },
		{ "keys": ["hei"], "miten": 0 },
		{ "keys": ["CRM", "mergaus", "mergaaminen"], "value": 1 },
		{ "keys": ["toiminta", "toimii"], "value": 2 },
		{ "keys": ["duplikaatti", "lahjoittaja"], "value": 2 },
		{ "keys": ["lahjoitus", "kontakti"], "account": 3 },
		{ "keys": ["mistä", "mikä"], "on": 3 }];

    CRMBot.prototype.answers = [
		{
			"description": "Mikä on CRM?",
			"values": ["CRM on..."]
		},
		{
			"description": "Kuinka selaan CRM?",
			"values": ["42!"]
		},
		{
			"description": "What is software development?",
			"values": ["Programming! Do you speak it?"]
		},
		{
			"description": "What is sales?",
			"values": ["Cashing out!"]
		}
	];
}
