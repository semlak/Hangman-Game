const defaultTheme = "tolkien";
const defaultMaxGuesses = 10;


var EventEnum = {
	NEWGAME: "NEWGAME",
	GAMEWIN: "GAMEWIN",
	GAMELOSE: "GAMELOSE"
}

var OutcomeEnum = {
	WIN: 1,
	LOSE: 2,
	INPROGRESS: 3
};


var quotesForWords = {
	"Amon Sul": {
		quote: "But long before, in the first days of the North Kingdom, they built a great watch-tower on Weathertop, Amon Sûl they called it. It was burned and broken, and nothing remains of it now but a tumbled ring, like a rough crown on the old hill’s head. Yet once it was tall and fair. It is told that Elendil stood there watching for the coming of Gil-Galad out of the West, in the days of the Last Alliance.",
		quoteSource: "Aragorn",
		aliases: ["Weathertop"],
		hints: ["Also the place where Frodo was stabbed by the Witch-King."]
	},
	"Gil-Galad": {
		quote: 	`Gil-Galad was an Elven-king.
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
		quoteSource: "The Fall of Gil-Galad, as translated by Bilbo Baggins",
		aliases: [],
		hints: [
			'Ruled as High King of the Noldor for over 3,500 years',
			"Died in combat against Sauron alongside Elendil, in Sauron himself was slain",
			"Wielded the spear Aeglos"
		]
	},
	"Elrond": {
		// quote: 'It recalled to me the glory of the Elder Days and the hosts of Beleriand, so many great princes and captains were assembled. And yet not so many, nor so fair, as when Thangorodrim was broken, and the Elves deemed that evil was ended for ever, and it was not so.',
		quote: ". . . my memory reaches back even to the Elder Days. Edrendil was my sire, who was born in Gondolin before its fall; and my mother was Elwing, daughter of Dior, son of Luthien of Doriath. I have seen three ages in the West of the world, and many defeats, and many fruitless victories.",
		quoteSource: "Elrond, from The Council of Elrond",
		aliases: [],
		hints: ["Was the Herald of Gil-Galad in the War of the Last Alliance"]
	},
	"Fingolfin": {
		quote: "Thus he came alone to Angband’s gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat. And Morgoth came.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [
			"Was the first High-King of the Noldor after the rising of the Sun and the Moon",
			"Died in single combat against Morgoth"
		]
	},
	"Fingon": {
		quote: "Then Gothmog hewed him with his black axe, and a white flame sprang up from the helm of Fingon as it was cloven. Thus fell the High King of the Noldor; and they beat him into the dust with their maces, and his banner, blue and silver, they trod into the mire of his blood.",
		quoteSource: "Quenta Silmarillion: Of the Fifth Battle: Nirnaeth Arnoediad",
		aliases: [],
		hints: []

	},

	"Gandalf": {
		quote: "He wore a tall pointed grey hat, a long grey cloak, and a silver scarf. He had a long white beard and bushy eyebrows that stuck out beyond the brim of his hat.",
		quoteSource: "The Fellowship of the Ring, A Long-expected Party",
		aliases: ["Olórin, Mithrandir, Incánus, Tharkûn, Greyhame, Old Greybeard, Gandalf the Grey, Gandalf the White, the Grey Pilgrim, Stormcrow, the White Rider, Láthspell, Big Greybeard, Long Greybeard, Pointy Hat, Tall Fellow, Gandalf the Fool, Gandalf the Wondering Wizard"],
		hints: []
		},

	"Manwe": {
		quote: "Manwe has no thought for his own honour, and is not jealous of his power, but rules all to peace",
		quoteSource: "Quenta Silmarillion: Of the Beginning of Days",
		aliases: ["King of Arda, Lord of the Breath of Arda, King of the Valar, Elder King, Lord of the West, Lord of Aman"],
		hints: ["name means \"Blessed one\" or \"blessed person", "Ruler of Arda"]
		},


	"Feanor": {
		quote: "For Fëanor was made the mightiest in all parts of body and mind: in valour, in endurance, in beauty, in understanding, in skill, in strength and subtlety alike: of all the Children of Ilúvatar, and a bright flame was in him.",
		quoteSource: "Quenta Silmarillion:  Of the Sun and Moon and the Hiding of Valinor",
		aliases: ["Curufinwë", "Fëanáro"],
		hints: ["Creator of the Silmarils"]
		},

	"Finarfin": {
		quote: "But Finarfin spoke softly, as was his wont, and sought to calm the Noldor, persuading them to pause and ponder ere deeds were done that could not be undone; and Orodreth, alone of his sons, spoke in like manner.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: [],
		hints: []
		},

	"Finwe": {
		quote: "But Melkor was also there, and he came to the house of Fëanor and there he slew Finwë King of the Noldor before his doors, and spilled the first blood in the Blessed Realm; for Finwë alone had not fled from the horror of the Dark.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: ["King of the Noldor"],
		hints: ["Father of Feanor", "Was one of the three ambassadors chosen by Orome who should go to Valinor and speak for their people"]
		},


	"Ungoliant": {
		quote: "The Eldar knew not whence she came; but some have said that in ages long before she descended from the darkness that lies about Arda, when Melkor first looked down in envy upon the Kingdom of Manwë, and that in the beginning she was one of those that he corrupted to his service.",
		quoteSource: "Quenta Silmarillion: Of the Darkening of Valinor",
		aliases: ["Ungweliantë, Spider of Night, Ungweliant, Wirilómë, Gloomweaver, Móru, Primeval Night, Night"],
		hints: []
		},


	"Nazgul": {
		quote: "They are the Nazgul, Ringwraiths, neither living or dead. At all times they feel the presence of the ring...drawn to the power of the one..they will never stop hunting you.",
		quoteSource: "Aragorn explaining the nazgûl to Frodo, Pippin, Merry and Sam",
		aliases: ["Ringwraiths", "The Nine", "The Fallen Kings", "Black Riders", "Nunbolg", "Ulairi"],
		hints: []
		},


	"Ingwe": {
		quote: "The smallest host and the first to set forth was led by Ingwë, the most high lord of all the Elvish race. He entered into Valinor and sits at the feet of the Powers, and all Elves revere his name; but he came never back, nor looked again upon Middle-earth.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: []
	},


	"Melkor": {
		quote: "and thus did Melkor breed the hideous race of the Orcs in envy and mockery of the Elves, of whom they were afterwards the bitterest foes. For the Orcs had life and multiplied after the manner of the Children of Ilúvatar; and naught that had life of its own, nor the semblance of life, could ever Melkor make since his rebellion in the Ainulindalë before the Beginning: so say the wise.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: []
	},

	"Morgoth": {
		quote: "I am the Elder King: Melkor, first and mightiest of all the Valar, who was before the world and made it. The shadow of my purpose lies upon Arda, and all that is in it bends slowly and surely to my will.",
		quoteSource: "Quenta Silmarillion: The Words of Hurin and Morgoth.",
		aliases: [],
		hints: []
	},


	"Grond": {
		quote: "Then Morgoth hurled aloft Grond, the Hammer of the Underworld, and swung it down like a bolt of thunder. But Fingolfin sprang aside, and Grond rent a mighty pit in the earth, whence smoke and fire darted.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: []
	},


	"Angband": {
		quote: "And Melkor made also a fortress and armoury not far from the north-western shores of the sea, to resist any assault that might come from Aman. That stronghold was commanded by Sauron, lieutenant of Melkor; and it was named Angband.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: []
	},


	"Silmaril": {
		quote: "And the inner fire of the Silmarils Fëanor made of the blended light of the Trees of Valinor, which lives in them yet, though the Trees have long withered and shine no more.",
		quoteSource: "Quenta Silmarillion: Of the Silmarils and the Unrest of the Noldor",
		aliases: [],
		hints: []
	},


	"Utumno": {
		quote: "Now Melkor began the delving and building of a vast fortress, deep under Earth, beneath dark mountains where the beams of Illuin were cold and dim. That stronghold was named Utumno.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: []
	},



	"Galadriel": {
		quote: "A sister they had, Galadriel, most beautiful of all the house of Finwë; her hair was lit with gold as though it had caught in a mesh the radiance of Laurelin.",
		quoteSource: "Quenta Silmarillion: Of Eldamar and the Princes of the Eldalië",
		aliases: [],
		hints: []
	},

	"Luthien": {
		quote: "The song of Lúthien before Mandos was the song most fair that ever in words was woven, and the song most sorrowful that ever the world shall ever hear. . . and Mandos was moved to pity, who never before was so moved, nor has been since.",
		quoteSource: "Quenta Silmarillion: Of Beren and Lúthien",
		aliases: [],
		hints: []
	},


	"Ringil": {
		quote: "But Fingolfin gleamed beneath it as a star; for his mail was overlaid with silver, and his blue shield was set with crystals; and he drew his sword Ringil, that glittered like ice.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: []
	}
}


var HangmanGame = class {
	constructor(word, maxGuesses) {
		console.log("Game is initializing.");
		// this.guesses = 0;
		this.word = word;
		this.maxGuesses = maxGuesses;

		this.userGuesses = {};
		this.wrongGuesses = {};
		this.wrongWholeWordGuesses = 0;
		this.rightGuesses = {};
		this.lettersInWord = {};
		var game = this;
		// populate the lettersInWord with the letters in word
		this.word.toLowerCase().split("").forEach(letter => {
			if (/[a-z]/.test(letter)) game.lettersInWord[letter] = letter
		});


		this.outcome = OutcomeEnum.INPROGRESS;

	}


	get getGuesses() {
		console.log("game is in getGuesses()")
		return this.userGuesses;
	}

	get guessesLeft() {
		console.log("game is in guessesLeft()")
		return this.maxGuesses - this.wrongWholeWordGuesses - Object.keys(this.wrongGuesses).length;
	}


	get maskedString() {
		console.log("game is in maskedString getter()")
		var game = this;
		if (game.outcome === OutcomeEnum.WIN || game.outcome === OutcomeEnum.LOSE ) {
			return game.word;
		}
		else {
			let maskedString = game.word.split("").map(function(letter) {
				let lcLetter = letter.toLowerCase();
				// console.log("checking letter", letter, "word:", game.word);
				return ((typeof game.userGuesses[lcLetter] !== "undefined") || !(/[a-z]/.test(lcLetter)) ? letter : "*") ;
			}).join("");
			return maskedString;
			// return game.word.split("").map(letter => "_").join("");
		}
	}

	guessWord(guessedWord) {
		console.log("game is in guessWord()")
		//add all letters to userGuesses so that masked word will show.
		//This will count all letters that were previously not guessed as single guesses.
		if (guessedWord !== this.word) {
			this.wrongWholeWordGuesses++;
			if (this.checkForLoss()) {
				this.outcome = OutcomeEnum.LOSE;
			}
			return false;
		}
		else {
			this.outcome = OutcomeEnum.WIN;
			var e = jQuery.event(EventEnum.GAMEWIN);
			return true;
		}

	}

	guessLetter(guess) {
		console.log("in game.guessLetter. User guessed " + guess);
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
						this.outcome = OutcomeEnum.WIN;
					}

				}
				else {
					this.wrongGuesses[guessLowerCase] = guessLowerCase;
					if (this.checkForLoss()) {
						this.outcome = OutcomeEnum.LOSE;

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
		console.log(this.rightGuesses, Object.keys(this.rightGuesses).length, this.lettersInWord);
		return Object.keys(this.rightGuesses).length >= Object.keys(this.lettersInWord).length;
	}

	checkForLoss() {
		return Object.keys(this.wrongGuesses).length + this.wrongWholeWordGuesses >= this.maxGuesses;

	}

}



var HangmanApp = class {
	constructor(maxGuesses, theme) {
		console.log("Initializing App");
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
		console.log("Loading possible words");
		let words = ["Gandalf", "Manwe", "Feanor", "Fingolfin", "Finarfin", "Finwe", "Ingwe", "Melkor", "Morgoth", "Grond", "Angband", "Silmaril", "Utumno", "Elrond", "Gil-Galad", "Galadriel", "Fingon", "Ungoliant", "Ringil", "Amon Sul", "Nazgul", "Luthien"];
		return words;
	}



	startGame() {
		console.log("App is starting game");
		// get unused word from unusedWords. However, if all unused words are used, reset all unused words with the possible words
		var app = this;
		var possibleWordsArray = Object.keys(this.unusedWords);
		if (possibleWordsArray.length === 0) {
			this.possibleWords.forEach(word => app.unusedWords[word] = word);
			possibleWordsArray = Object.keys(this.unusedWords);
		}

		this.word = possibleWordsArray[Math.floor(Math.random()*possibleWordsArray.length)];
		// this.word = "Amon Sul"
		this.game = new HangmanGame(this.word, this.maxGuesses);
		//remove word from collection of unused words.
		if (typeof this.unusedWords[this.word] !== "undefined") {
			delete this.unusedWords[this.word];
		}

		$("#app-status .card-header").text("New game in progress.");
		$("#app-status .card-header").removeClass("alert-success alert-danger alert-info alert-warning in").addClass("alert alert-info fade in")
	}

	get maskedString() {
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

	get guessesLeft() {
		return this.game.guessesLeft;
	}

	handleWin() {
		var app = this;
		// $("#app-status").empty().append("<div class='card-header'>You Win!!</div>");
		$("#app-status .card-header").text("You Win!!");
		$("#app-status .card-header").addClass("out").removeClass("alert-success alert-danger alert-info alert-warning in out").addClass("alert alert-success fade in")
		// $(this).effect("highlight", {}, 3000);
		app.wins++;
		$("#wins-count").addClass("wins-count-updating").fadeOut("slow", function() {
			$("#wins-count").text(app.wins).fadeIn("slow", function() {
					$("#wins-count").removeClass("wins-count-updating");
			});
		});
	}

	handleLoss() {
		var app = this;
		// $("#app-status").empty().append("<p>Sorry. You lossed this one. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></p>");
		// $("#app-status").empty().append("<div class='card-header'>Sorry. You lossed. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>");
		$("#app-status .card-header").html("Sorry. You lossed. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>");
		$("#app-status .card-header").removeClass("alert-success alert-danger alert-info alert-warning in").addClass("alert alert-danger fade in")
		// console.log(app.maskedString);
	}

	updateQuote() {
		var app = this;
		if (typeof quotesForWords[app.word] !== "undefined") {

			// get new quote
			var blockQuote = $("<div>", {class: "card-blockquote", id: "quote-text", text: quotesForWords[app.word].quote});
			//if there are line breaks "\n" in quote text, replace with <br>
			blockQuote.html(blockQuote.html().replace(/\n/g,'<br/>'));

			// get quote source
			var quoteSource = $("<div>", {class: "blockquote-footer", id: "quote-source", text: quotesForWords[app.word].quoteSource});

			//update #character-quote element.
			$("#character-quote").empty().append(blockQuote).append("<br>").append(quoteSource)
				// $("<div>", {class: "card-blockquote", id: "quote-text", text: quotesForWords[app.word].quote})).
				// append($("<div>", {class: "blockquote-footer", id: "quote-source", text: quotesForWords[app.word].quoteSource}));

				//if there are line breaks "\n" in quote text, replace with <br>

			// $("#quote-text").text(quotesForWords[app.word].quote);
			// $("#quote-footer").text(quotesForWords[app.word].quoteSource);
		}
		else {
			// no quote for this word.
			$("#character-quote").empty();
			// $("#quote-text").text("");
			// $("#quote-footer").text("");
		}
	}

	prepareWordDiv() {
		var app = this;
		console.log("maskedString: " + app.maskedString);
		var wordSpans = app.maskedString.split("").map(function(letter) {
			let spanClass = letter === "*" ? "masked-letter" : (/[a-z]/.test(letter.toLowerCase())) ? "unmasked-letter" : "no-underline";
			if (letter === "*") letter = "&nbsp"
			return "<span class=" + spanClass +">"+ letter + "</span>";
		}).join("");


		var wordDiv = ("<div class='word-div'>" + wordSpans + "</div>");
		return wordDiv;
	}

	showGame() {
		// Actually draw game on page.
		var app = this;
		// console.log(app);
		// let guessesLeft = app.guessesLeft;
		// console.log("guessesLeft: " + guessesLeft);
		$("#guesses-left").text(app.guessesLeft);
		console.log(app);
		var wordDiv = this.prepareWordDiv()

		// console.log(wordSpans);
		$("#current-word-card .card-body").html(wordDiv);
		// console.log("hi", Object.keys(this.game.userGuesses).toString());
		$("#guessed-letters").text(Object.keys(this.game.userGuesses).toString().split(",").join(" "));

		if (app.game.outcome !== OutcomeEnum.INPROGRESS) {
			if (app.game.outcome === OutcomeEnum.WIN) {
				$("body").trigger(EventEnum.GAMEWIN);
				// app.handleWin();
			}
			else if (app.game.outcome === OutcomeEnum.LOSE) {
				// app.handleLoss();
				$("body").trigger(EventEnum.NEWLOSE);
			}
			this.updateQuote();
		}

		// $(".active-game").show();
	}
}




$(document).ready(function() {
	var app = new HangmanApp(defaultMaxGuesses, defaultTheme);
	// var evtNewGame = $("body").event(EventEnum.NEWGAME);
	// var evtGameLoss = jQuery.event(EventEnum.GAMELOSE);
	// var evtGameWin = jQuery.event(EventEnum.GAMEWIN);




	document.onkeyup = function(event) {
		// if game is not in progress, then any key starts new game.
		if (typeof app.game === "undefined" || app.game.outcome !== OutcomeEnum.INPROGRESS ) {
			$("body").trigger(EventEnum.NEWGAME);
			// app.startGame();
			// app.showGame()
		}
		else if (/^Key[A-Z]$/.test(event.code)) {
			console.log(event)
			app.guessLetter(event.key);
			app.showGame();
		}

	}

	$("body").on(EventEnum.NEWGAME, function(e) {
		console.log("Detected NEWGAME event signal")
		app.startGame();
		app.showGame();
	});

	$("body").on(EventEnum.GAMEWIN, function(e) {
		app.handleWin();
	});

	$("body").on(EventEnum.GAMELOSE, function(e) {
		app.handleLoss();
	});



});