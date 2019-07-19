if (answerBot) {
    answerBot.prototype.specialContext = {
        "wrongInput": ["En ymmärtänyt kysymystä.", "Voisitko muotoilla kysymyksen uudelleen?"],
        "emptyInput": ["Vain kysymällä selviää!", "Kysy rohkeasti.", "Mitä haluat tietää CRM?."],
        "rephrase": ["Tässä on muutamia avainsanoja, jotka voivat auttaa sinua / kontakti, account, mergaaminen, lahjoittaja, tiedonhaku, erikoishaku"]
    };

    answerBot.prototype.keywords = [
        { "keys": ["hei"], "value": 0 },
        { "keys": ["päivää"], "value": 0 },
        { "keys": ["account"], "value": 1 },
        { "keys": ["contact"], "value": 2 },
	{ "keys": ["kontakti"], "value": 2 },
        { "keys": ["mitä", "tarkoittaa"], "value": 2 },
        { "keys": ["mergaus", "mergaaminen", "merge"], "value": 3 },
        { "keys": ["mikä", "on", "mergaus"], "value": 3 },
        { "keys": ["duplikaatti", "duplikaatit", "yhdistäminen"], "value": 3 },
        { "keys": ["mikä", "on", "duplikaatti", "CRMssä"], "value": 4 },
        { "keys": ["miten", "haen", "tietoa"], "value": 5 },
        { "keys": ["miten", "loydän", "tietoa", "CRMstä"], "value": 5 },
        { "keys": ["mikä", "on", "erikoishaku"], "value": 6 },
        { "keys": ["mikä", "on", "advanced search"], "value": 6 },
        { "keys": ["miten", "käytän", "erikoishakua"], "value": 6 },
        { "keys": ["mikä", "on", "lahjoittaja"], "value": 7 },
	    { "keys": ["kuka", "mikä", "tämä", "on"], "value": 8 }];

    answerBot.prototype.answers = [
        {
            "description": "Hei!",
            "values": ["Hei! Tässä on muutamia avainsanoja, jotka voivat auttaa sinua / kontakti, account, mergaaminen, lahjoittaja, tiedonhaku, erikoishaku", "Hei, tässä on muutamia avainsanoja, jotka voivat auttaa sinua / kontakti, account, mergaaminen, lahjoittaja, tiedonhaku, erikoishaku", "Hei! Mikä mieltäsi askarruttaa CRM liittyen? Anna avainsana muodossa kontakti, account jne."]
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
            "description": "Lahjoittaja?",
            "values": ["Lahjoittaja on..."]
        },
        {
            "description": "Kenelle puhun?",
            "values": ["Puhut CRM botille!"]
        }
        ];
}
