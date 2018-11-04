export const quizQuestions = [
    {
        "key": "gender",
        "type": "single",
        "data": {
            "question": "Verrätst du uns dein Geschlecht?",
            "answers": [
                {
                    "label": "Männlich",
                    "value": "m"
                },
                {
                    "label" :"Weiblich",
                    "value": "f"
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "age",
        "type": "select",
        "data": {
            "question": "Wann wurdest du geboren?",
            "body":"Dein Alter ist entscheidend dafür, wie gut man deine Zähne bewegen kann.",
            "answers": [2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990]
        },
        "isRequired": true
    },
    {
        "key": "braces",
        "type": "single",
        "data": {
            "question": "Hast du schon mal eine Zahnspange getragen?",
            "answers": [
                {
                    "label": "Ja",
                    "value": true
                },
                {
                    "label" :"Nein",
                    "value": false
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "teeth",
        "type": "multiple",
        "data": {
            "question": "Wie beschreibt man deine Zähne am besten:",
            "answers": [
                {
                    "key": "teeth_jutting",
                    "label": "Vorstehende Zähne",
                    "options": [
                        {
                            "label": "Keine",
                            "value": "none"
                        },
                        {
                            "label" :"Mittel",
                            "value": "medium"
                        },
                        {
                            "label" :"Stark",
                            "value": "strong"
                        }
                    ]   
                },  
                {
                    "key": "teeth_spaces",
                    "label": "Zahnlücken",
                    "options": [
                        {
                            "label": "Keine",
                            "value": "none"
                        },
                        {
                            "label" :"Mittel",
                            "value": "medium"
                        },
                        {
                            "label" :"Stark",
                            "value": "strong"
                        }
                    ]   
                },
                {
                    "key": "teeth_tight",
                    "label": "Zu eng stehende Zähne",
                    "options": [
                        {
                            "label": "Keine",
                            "value": "none"
                        },
                        {
                            "label" :"Mittel",
                            "value": "medium"
                        },
                        {
                            "label" :"Stark",
                            "value": "strong"
                        }
                    ]   
                },
                {
                    "key": "teeth_colored",
                    "label": "Verfärbte Zähne",
                    "options": [
                        {
                            "label": "Keine",
                            "value": "none"
                        },
                        {
                            "label" :"Mittel",
                            "value": "medium"
                        },
                        {
                            "label" :"Stark",
                            "value": "strong"
                        }
                    ]   
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "treatment_needed",
        "type": "single",
        "data": {
            "question": "Ist an deinen Zähnen aktuell die Notwendigkeit für zahnärztliche Behandlungen (neben deiner Zahnfehlstellung) festgestellt worden?",
            "answers": [
                {
                    "label": "Ja",
                    "value": true,
                    "isTreatmentPossible": false
                },
                {
                    "label" :"Nein",
                    "value": false
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "jaw",
        "type": "single",
        "data": {
            "question": "Leidest du an Kiefergelenkbeschwerden?",
            "answers": [
                {
                    "label": "Ja",
                    "value": true,
                    "isTreatmentPossible": false
                },
                {
                    "label" :"Nein",
                    "value": false
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "jaw",
        "type": "single",
        "data": {
            "question": "Leidest du an Zahnfleischproblemen?",
            "body": "(entzündetes oder blutendes Zahnfleisch, Zahnlockerungen, Parodontitis)",
            "answers": [
                {
                    "label": "Ja",
                    "value": true,
                    "isTreatmentPossible": false
                },
                {
                    "label" :"Nein",
                    "value": false
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "silicon_allergy",
        "type": "single",
        "data": {
            "question": "Leidest du an einer Allergie gegen Silikon?",
            "answers": [
                {
                    "label": "Ja",
                    "value": true
                },
                {
                    "label" :"Nein",
                    "value": false
                }
            ]
        },
        "isRequired": true
    },
    {
        "key": "silicon_allergy",
        "type": "textarea",
        "data": {
            "question": "Was stört dich an deinem Lächeln am meisten?",
            "body":"Schreibe uns ein paar Worte."
        },
        "isRequired": false
    },
    {
        "key": "email",
        "type": "text",
        "data": {
            "question": "Vielen Dank für deine Ausdauer!",
            "body":"Wir würden dir gerne deine Auswertung zusenden"
        },
        "isRequired": true
    }
]