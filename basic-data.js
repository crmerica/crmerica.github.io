if (answerBot) {
    answerBot.prototype.specialContext = {
        "wrongInput": ["En ymmärtänyt kysymystä.", "Voisitko muotoilla kysymyksen uudelleen?"],
        "emptyInput": ["Vain kysymällä selviää!", "Kysy rohkeasti.", "Mitä haluat tietää CRM?"],
        "rephrase": ["Tässä on muutamia avainsanoja, jotka voivat auttaa sinua / kontakti, account, mergaaminen, lahjoittaja, tiedonhaku, erikoishaku"]
    };

    answerBot.prototype.keywords = [
	{ "keys": ["hei"], "value": 0 },
        { "keys": ["päivää"], "value": 0 },
        { "keys": ["mitä", "tarkoittaa", "account"], "value": 1 },
        { "keys": ["mikä", "contact", "kontakti"], "value": 2 },
        { "keys": ["mitä", "tarkoittaa"], "value": 2 },
        { "keys": ["mergaus", "mergaaminen", "merge"], "value": 3 },


    answerBot.prototype.answers = [
		{
			"description": "Tarkoititko hei?",
			"values": ["Minulle kuuluu hyvää, mitä haluat tietää CRM liittyen?", "Hei, kuinka voisin auttaa sinua?"]
		},
		{
			"description": "Kuinka pääsen CRM?",
			"values": ["Osoitteesta *osoite*"]
		},
		{
			"description": "Mikä on CRM?",
			"values": ["CRM on..."]
		},
		{
			"description": "Mikä on kontakti?",
			"values": ["Kontakti on..."]
		}
	];
}
