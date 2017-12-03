var OutcomeEnum = {
	WIN: 1,
	LOSS: 2,
	INPROGRESS: 3
};


var quotesForWords = {
	"Amon Sul": {
		quotes: "But long before, in the first days of the North Kingdom, they built a great watch-tower on Weathertop, Amon Sûl they called it. It was burned and broken, and nothing remains of it now but a tumbled ring, like a rough crown on the old hill’s head. Yet once it was tall and fair. It is told that Elendil stood there watching for the coming of Gil-galad out of the West, in the days of the Last Alliance.",
		quoteSource: "Aragorn",
		aliases: ["Weathertop"],
		hints: ["Also the place where Frodo was stabbed by the Witch-King."]
	},
	"Gil-Galad": {
		quote: 	`Gil-galad was an Elven-king.
				Of him the harpers sadly sing;
				the last whose realm was fair and free
				between the Mountains and the Sea.

				His sword was long, his lance was keen.
				His shining helm afar was seen;
				the countless stars of heaven's field
				were mirrored in his silver shield.

				But long ago he rode away,
				and where he dwelleth none can say;
				for into darkness fell his star
				in Mordor where the shadows are.`,
		quoteSource: "The Fall of Gil-galad, as translated by Bilbo Baggins",
		aliases: [],
		hints: [
			'Ruled as High King of the Noldor for over 3,500 years',
			"Died in combat against Sauron alongside Elendil, in Sauron himself was slain",
			"Wielded the spear Aeglos"
		]
	},
	"Elrond": {
		quote: 'It recalled to me the glory of the Elder Days and the hosts of Beleriand, so many great princes and captains were assembled. And yet not so many, nor so fair, as when Thangorodrim was broken, and the Elves deemed that evil was ended for ever, and it was not so.',
		quoteSource: "Elrond, from The Council of Elrond",
		aliases: [],
		hints: ["Was the Herald of Gil-Galad in the War of the Last Alliance"]
	},
	"Fingolfin": {
		quote: "Thus he came alone to Angband’s gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat. And Morgoth came.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [
			"Was the first High-King of the Noldor after the rising of the Sun and the Moon"
		]
	},
	"Fingon": {
		quote: "Then Gothmog hewed him with his black axe, and a white flame sprang up from the helm of Fingon as it was cloven. Thus fell the High King of the Noldor; and they beat him into the dust with their maces, and his banner, blue and silver, they trod into the mire of his blood.",
		quoteSource: "Quenta Silmarillion: Of the Fifth Battle: Nirnaeth Arnoediad",
		aliases: [],
		hints: []

	}
}


var HangmanGame = class {
	constructor(word, maxGuesses) {
		console.log("hi");
		// this.guesses = 0;
		this.word = word;
		this.maxGuesses = maxGuesses;

		this.userGuesses = {};
		this.wrongGuesses = {};
		this.wrongWholeWordGuesses = 0;
		this.rightGuesses = {};
		// this.maskedString = "";
		this.lettersInWord = {};
		var game = this;
		this.word.toLowerCase().split("").forEach(letter => {
			if (letter !== " ") game.lettersInWord[letter] = letter
		});

		this.outcome = OutcomeEnum.INPROGRESS;

	}


	get getGuesses() {
		return this.userGuesses;
	}

	// get word() {
	// 	return this.word;
	// }

	// set word(word) {
	// 	this.word = word;
	// }

	// get wins() {
	// 	return this.wins;
	// }

	get maskedString() {
		var game = this;

		let maskedString = this.word.split("").map(function(letter) {
			let lcLetter = letter.toLowerCase();
			console.log("checking letter", letter, "word:", game.word);
			return ((typeof game.userGuesses[lcLetter] !== "undefined") || lcLetter === " " ? letter : "_") + "  ";
		}).join("");
		return maskedString;
	}

	guessWord(guessedWord) {
		//add all letters to userGuesses so that masked word will show.
		//This will count all letters that were previously not guessed as single guesses.
		if (guessedWord !== this.word) {
			this.wrongWholeWordGuesses++;
			if (this.checkForLoss()) {
				this.outcome = OutcomeEnum.LOSS;
			}
			return false;
		}
		else {
			this.outcome = OutcomeEnum.WIN;
			return true;
		}

	}

	guessLetter(guess) {
		// console.log("in game.guessLetter. User guessed " + guess);
		if (this.outcome === OutcomeEnum.INPROGRESS) {
			let guessLowerCase = guess.toLowerCase();
			if (typeof (this.userGuesses[guessLowerCase]) === "undefined") {

				// user had not already guessed this letter. Add it to userGuesses

				this.userGuesses[guessLowerCase] = guessLowerCase;

				// now, check if it is in word
				if (this.word.toLowerCase().indexOf(guessLowerCase) !== -1 ) {
					// update maskedString to show these letters
					this.rightGuesses[guessLowerCase] = guessLowerCase;
					if (this.checkForWin()) {
						// this.wins++;
						// this.gameInProgress = false;
						this.outcome = OutcomeEnum.WIN;
					}

				}
				else {
					this.wrongGuesses[guessLowerCase] = guessLowerCase;
					if (this.checkForLoss()) {
						// this.losses++;
						// this.gameInProgress = false;
						this.outcome = OutcomeEnum.LOSS;

					}
				}

			}
			// return true;
			return this.maskedString;
		}
		else {
			return false;
		}
	}

	checkForWin() {
		return Object.keys(this.rightGuesses).length === Object.keys(this.lettersInWord).length;
	}

	checkForLoss() {
		return Object.keys(this.wrongGuesses).length + this.wrongWholeWordGuesses === this.maxGuesses;

	}

}



var HangmanApp = class {
	constructor(maxGuesses, theme) {
		this.game;
		this.theme = theme;
		this.maxGuesses = maxGuesses;
		this.wins = 0;
		this.losses = 0;

		this.unusedWords = {};
		this.possibleWords = this.getPossibleWords(this.theme);

		var app = this;
		this.unusedWords = {};
		// at start of app, load all of the possibleWords into the unused word collection. They will be removed as they are used.
		this.possibleWords.forEach(word => app.unusedWords[word] = word);
	}


	getPossibleWords(theme) {
		let words = ["Gandalf", "Manwe", "Olorin", "Feanor", "Fingolfin", "Finarfin", "Finwe", "Ingwe", "Olwe", "Melkor", "Morgoth", "Grond", "Angband", "Silmaril", "Utumno", "Elrond", "Gil-Galad", "Galadriel", "Fingon", "Turgon", "Ungoliant", "Telperion", "Laurelin", "Ringil", "Amon Sul", "Amen Hen", "Nazgul", "The Witch-King of Angmar"];
		return words;
	}



	startGame() {
		// get unused word from unusedWords. However, if all unused words are used, reset all unused words with the possible words
		var app = this;
		var possibleWordsArray = Object.keys(this.unusedWords);
		if (possibleWordsArray.length === 0) {
			this.possibleWords.forEach(word => app.unusedWords[word] = word);
			possibleWordsArray = Object.keys(this.unusedWords);
		}

		this.word = possibleWordsArray[Math.floor(Math.random()*possibleWordsArray.length)];

		this.game = new HangmanGame(this.word, this.maxGuesses);
	}

	getMaskedString() {
		if (this.game.outcome === OutcomeEnum.WIN) {
			return this.word;
		}
		else {
			return this.game.maskedString;
		}
	}

	guessLetter(letter) {
		var output = this.game.guessLetter(letter);
		return (output);
	}

	guessWord(guessedWord) {
		return this.game.guessWord(guessedWord);
	}
}




$(document).ready(function() {


});