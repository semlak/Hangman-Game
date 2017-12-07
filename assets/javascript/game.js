const defaultTheme = "tolkien";
const defaultMaxGuesses = 10;
const maxHeight = 540;


const EventEnum = {
	NEWGAME: "NEWGAME",
	GAMEWIN: "GAMEWIN",
	GAMELOSE: "GAMELOSE"
}

const OutcomeEnum = {
	WIN: 1,
	LOSE: 2,
	INPROGRESS: 3
};


const quotesForWords = {
	"Amon Sul": {
		quote: "But long before, in the first days of the North Kingdom, they built a great watch-tower on Weathertop, Amon Sûl they called it. It was burned and broken, and nothing remains of it now but a tumbled ring, like a rough crown on the old hill’s head. Yet once it was tall and fair. It is told that Elendil stood there watching for the coming of Gil-Galad out of the West, in the days of the Last Alliance.",
		quoteSource: "Aragorn",
		aliases: ["Weathertop"],
		hints: ["Also the place where Frodo was stabbed by the Witch-King."],
		image: "./assets/images/amon-sul.png"
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
		],
		image: "./assets/images/gil-galad.jpg"
	},
	"Elrond": {
		quote: ". . . my memory reaches back even to the Elder Days. Edrendil was my sire, who was born in Gondolin before its fall; and my mother was Elwing, daughter of Dior, son of Luthien of Doriath. I have seen three ages in the West of the world, and many defeats, and many fruitless victories.",
		quoteSource: "Elrond, from The Council of Elrond",
		aliases: [],
		hints: ["Was the Herald of Gil-Galad in the War of the Last Alliance"],
		image: "./assets/images/elrond.jpg"
	},
	"Fingolfin": {
		quote: "Thus he came alone to Angband’s gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat.\n\nAnd Morgoth came.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [
			"Was the first High-King of the Noldor after the rising of the Sun and the Moon",
			"Died in single combat against Morgoth"
		],
		image: "./assets/images/fingolfin.png"
	},
	"Fingon": {
		quote: "Then Gothmog hewed him with his black axe, and a white flame sprang up from the helm of Fingon as it was cloven.",
		quoteSource: "Quenta Silmarillion: Of the Fifth Battle: Nirnaeth Arnoediad",
		aliases: [],
		hints: [],
		image: "./assets/images/fingon.jpg"

	},

	"Gandalf": {
		quote: "He wore a tall pointed grey hat, a long grey cloak, and a silver scarf. He had a long white beard and bushy eyebrows that stuck out beyond the brim of his hat.",
		quoteSource: "The Fellowship of the Ring, A Long-expected Party",
		aliases: ["Olórin", "Mithrandir", "Incánus", "Tharkûn", "Greyhame", "Old Greybeard", "Gandalf the Grey", "Gandalf the White", "the Grey Pilgrim", "Stormcrow", "the White Rider", "Láthspell", "Big Greybeard", "Long Greybeard", "Pointy Hat", "Tall Fellow", "Gandalf the Fool", "Gandalf the Wondering Wizard"],
		hints: [],
		image: "./assets/images/gandalf.jpg"
		},

	"Manwe": {
		quote: "Manwe has no thought for his own honour, and is not jealous of his power, but rules all to peace",
		quoteSource: "Quenta Silmarillion: Of the Beginning of Days",
		aliases: ["King of Arda, Lord of the Breath of Arda, King of the Valar, Elder King, Lord of the West, Lord of Aman"],
		hints: ["name means \"Blessed one\" or \"blessed person", "Ruler of Arda"],
		image: "./assets/images/manwe.jpg"
		},


	"Feanor": {
		quote: "For Fëanor was made the mightiest in all parts of body and mind: in valour, in endurance, in beauty, in understanding, in skill, in strength and subtlety alike: of all the Children of Ilúvatar, and a bright flame was in him.",
		quoteSource: "Quenta Silmarillion:  Of the Sun and Moon and the Hiding of Valinor",
		aliases: ["Curufinwë", "Fëanáro"],
		hints: ["Creator of the Silmarils"],
		image: "./assets/images/feanor.jpg"
		},

	"Finarfin": {
		quote: "But Finarfin spoke softly, as was his wont, and sought to calm the Noldor, persuading them to pause and ponder ere deeds were done that could not be undone; and Orodreth, alone of his sons, spoke in like manner.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: [],
		hints: [],
		image: "./assets/images/finarfin.jpg"
		},

	"Finwe": {
		quote: "But Melkor was also there, and he came to the house of Fëanor and there he slew Finwë King of the Noldor before his doors, and spilled the first blood in the Blessed Realm; for Finwë alone had not fled from the horror of the Dark.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: ["King of the Noldor"],
		hints: ["Father of Feanor", "Was one of the three ambassadors chosen by Orome who should go to Valinor and speak for their people"],
		image: "./assets/images/finwe.jpg"
		},


	"Ungoliant": {
		quote: "The Eldar knew not whence she came; but some have said that in ages long before she descended from the darkness that lies about Arda, when Melkor first looked down in envy upon the Kingdom of Manwë, and that in the beginning she was one of those that he corrupted to his service.",
		quoteSource: "Quenta Silmarillion: Of the Darkening of Valinor",
		aliases: ["Ungweliantë, Spider of Night, Ungweliant, Wirilómë, Gloomweaver, Móru, Primeval Night, Night"],
		hints: [],
		image: "./assets/images/Melkor-and-Ungoliant.jpg"
		},


	"Nazgul": {
		quote: "They are the Nazgul, Ringwraiths, neither living or dead. At all times they feel the presence of the ring...drawn to the power of the one..they will never stop hunting you.",
		quoteSource: "Aragorn explaining the nazgûl to Frodo, Pippin, Merry and Sam",
		aliases: ["Ringwraiths", "The Nine", "The Fallen Kings", "Black Riders", "Nunbolg", "Ulairi"],
		hints: [],
		image: "./assets/images/nazgul.jpg"
		},


	"Ingwe": {
		quote: "The smallest host and the first to set forth was led by Ingwë, the most high lord of all the Elvish race. He entered into Valinor and sits at the feet of the Powers, and all Elves revere his name; but he came never back, nor looked again upon Middle-earth.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: [],
		image: "./assets/images/ingwe.jpg"
	},


	"Melkor": {
		quote: ". . . and thus did Melkor breed the hideous race of the Orcs in envy and mockery of the Elves, of whom they were afterwards the bitterest foes. For the Orcs had life and multiplied after the manner of the Children of Ilúvatar; and naught that had life of its own, nor the semblance of life, could ever Melkor make since his rebellion in the Ainulindalë before the Beginning: so say the wise.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: [],
		image: "./assets/images/Melkor-and-Ungoliant.jpg"
	},

	"Morgoth": {
		quote: "I am the Elder King: Melkor, first and mightiest of all the Valar, who was before the world and made it. The shadow of my purpose lies upon Arda, and all that is in it bends slowly and surely to my will.",
		quoteSource: "Quenta Silmarillion: The Words of Hurin and Morgoth.",
		aliases: [],
		hints: [],
		image: "./assets/images/morgoth.jpg"
	},


	"Grond": {
		quote: "Then Morgoth hurled aloft Grond, the Hammer of the Underworld, and swung it down like a bolt of thunder. But Fingolfin sprang aside, and Grond rent a mighty pit in the earth, whence smoke and fire darted.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [],
		image: "./assets/images/grond.jpg"
	},


	"Angband": {
		quote: "And Melkor made also a fortress and armoury not far from the north-western shores of the sea, to resist any assault that might come from Aman. That stronghold was commanded by Sauron, lieutenant of Melkor; and it was named Angband.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: [],
		image: "./assets/images/angband.jpg"
	},


	"Silmaril": {
		quote: "And the inner fire of the Silmarils Fëanor made of the blended light of the Trees of Valinor, which lives in them yet, though the Trees have long withered and shine no more.",
		quoteSource: "Quenta Silmarillion: Of the Silmarils and the Unrest of the Noldor",
		aliases: [],
		hints: [],
		image: "./assets/images/silmaril.jpg"
	},


	"Utumno": {
		quote: "Now Melkor began the delving and building of a vast fortress, deep under Earth, beneath dark mountains where the beams of Illuin were cold and dim. That stronghold was named Utumno.",
		quoteSource: "Quenta Silmarillion: Of the Coming of the Elves and the Captivity of Melkor",
		aliases: [],
		hints: [],
		image: "./assets/images/utumno.jpg"
	},



	"Galadriel": {
		quote: "A sister they had, Galadriel, most beautiful of all the house of Finwë; her hair was lit with gold as though it had caught in a mesh the radiance of Laurelin.",
		quoteSource: "Quenta Silmarillion: Of Eldamar and the Princes of the Eldalië",
		aliases: [],
		hints: [],
		image: "./assets/images/galadriel.jpg"
	},

	"Luthien": {
		quote: "The song of Lúthien before Mandos was the song most fair that ever in words was woven, and the song most sorrowful that ever the world shall ever hear. . . and Mandos was moved to pity, who never before was so moved, nor has been since.",
		quoteSource: "Quenta Silmarillion: Of Beren and Lúthien",
		aliases: [],
		hints: [],
		image: "./assets/images/luthien.jpg"
	},


	"Ringil": {
		quote: "But Fingolfin gleamed beneath it as a star; for his mail was overlaid with silver, and his blue shield was set with crystals; and he drew his sword Ringil, that glittered like ice.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [],
		image: "./assets/images/ringil.jpg"
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


	// get getGuesses() {
	// 	console.log("game is in getGuesses()")
	// 	return this.userGuesses;
	// }

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
			// return this.maskedString;
			return true;
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
		// keep track of last word used. For a given game, we don't want to use the last word used for the next word
		this.lastWordUsed = "";

		this.possibleWords = this.getPossibleWords(this.theme);

		var me = this;

		// at start of app, load all of the possibleWords into the unused word collection. They will be removed as they are used.
		this.unusedWords = this.possibleWords.slice(0);  //this clones array by taking slice from first element to end


		$("body").on(EventEnum.NEWGAME, function(e) {
			// console.log("Detected NEWGAME event signal")
			me.startGame();
			me.showGame();
		});

		$("body").on(EventEnum.GAMEWIN, function(e) {
			me.handleWin();
		});

		$("body").on(EventEnum.GAMELOSE, function(e) {
			me.handleLoss();
		});

	}


	getPossibleWords(theme) {
		console.log("Loading possible words");
		let words = ["Gandalf", "Manwe", "Feanor", "Fingolfin", "Finarfin", "Finwe", "Ingwe", "Melkor", "Morgoth", "Grond", "Angband", "Silmaril", "Utumno", "Elrond", "Gil-Galad", "Galadriel", "Fingon", "Ungoliant", "Ringil", "Amon Sul", "Nazgul", "Luthien"];
		// let words = ["Gandalf", "Manwe", "Feanor", "Fingolfin", "Finarfin", "Finwe", "Amon Sul"];
		return words;
	}



	startGame() {
		console.log("App is starting game");
		// get unused word from unusedWords. However, if all unused words are used, reset all unused words with the possible words
		var me = this;
		// potential words used is simply the array of unusedWords, but filtered to remove the word just played.
		// note that the word just played won't be in there if the player won. However, if the player lost, we want to avoid the same word coming up again.
		var filteredUnusedWords = this.unusedWords.filter(word => word !== this.lastWordUsed);
		// Now, if filteredUnusedWords is of length 0, then just reset the word list.

		if (filteredUnusedWords.length < 1) {
			this.unusedWords = this.possibleWords.slice(0);
			// refilter to remove last word played
			var filteredUnusedWords = this.unusedWords.filter(word => word !== this.lastWordUsed);
		}


		this.word = filteredUnusedWords[Math.floor(Math.random()*filteredUnusedWords.length)];
		// this.word = "Fingolfin";
		// this.word = "Melkor";
		// this.word = "Gil-Galad";
		// me.updateQuote();
		this.game = new HangmanGame(this.word, this.maxGuesses);
		this.lastWordUsed = this.word;
		//We don't remove word from unusedWord list yet, because we only remove when player wins on that word

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
		// return (output);
		// update game's display
		this.showGame();

	}

	guessWord(guessedWord) {
		return this.game.guessWord(guessedWord);
	}

	get guessesLeft() {
		return this.game.guessesLeft;
	}

	handleWin() {
		var me = this;
		// remove the word just completed from the array of unused words (used filter)
		this.unusedWords = this.unusedWords.filter( word => word !== me.word);
		// $("#app-status").empty().append("<div class='card-header'>You Win!!</div>");
		$("#app-status .card-header").text("You Win!!");
		$("#app-status .card-header").addClass("out").removeClass("alert-success alert-danger alert-info alert-warning in out").addClass("alert alert-success fade in")
		// $(this).effect("highlight", {}, 3000);
		me.wins++;
		$("#wins-count").addClass("wins-count-updating").fadeOut("slow", function() {
			$("#wins-count").text(me.wins).fadeIn("slow", function() {
					$("#wins-count").removeClass("wins-count-updating");
			});
		});
	}

	handleLoss() {
		var me = this;
		// $("#app-status").empty().append("<p>Sorry. You lossed this one. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></p>");
		// $("#app-status").empty().append("<div class='card-header'>Sorry. You lossed. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>");
		$("#app-status .card-header").html("Sorry. You lossed. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>");
		$("#app-status .card-header").removeClass("alert-success alert-danger alert-info alert-warning in").addClass("alert alert-danger fade in")
		// console.log(me.maskedString);
	}

	updateQuote() {
		var me = this;
		if (typeof quotesForWords[me.word] !== "undefined") {
			var itemData = quotesForWords[me.word]

			// get new quote
			var blockQuote = $("<div>", {class: "card-blockquote", id: "quote-text", text: "\"" + itemData.quote + "\""});
			//if there are line breaks "\n" in quote text, replace with <br>
			blockQuote.html(blockQuote.html().replace(/\n/g,'<br/>'));

			// get quote source

			var quoteSource = $("<div>", {class: "blockquote-footer", id: "quote-source", text: itemData.quoteSource});
			var cardImage = $("<img>", {class: "card-image-bottom img-fluid", id: "word-image", src: itemData.image, alt: me.word});
			//update #character-quote element.
			var cardBody = ("<div>", {class: "card-body", id: "character-quote"});

			// to fade in element, help from https://stackoverflow.com/questions/4687579/append-an-element-with-fade-in-effect-jquery
			// $("#word-info-card").empty();
			$("#word-info-card").fadeOut(1000, function() {
				// console.log("starting callback");
				// $("#word-info-card").empty();
				// remove any of the manual css settings from jquery
				$("#image-container").width("");
				$("#image-container").height("");
				$("#character-quote div").css("line-height", "");

				$("#character-quote").empty();
				// $("#word-image").remove();
				$("#image-container").remove();
				$("#character-quote").append(blockQuote).append("<br>").append(quoteSource);

				$("#word-info-card").append(cardBody, $("<div id='image-container'>").append(cardImage)).fadeIn(0, function() {
					// the combined height of the quote and image might be too big. Check the height and resize image if needed.
					console.log("current card height", $("#word-info-card").outerHeight() );
					if ($("#word-info-card").outerHeight() > maxHeight) {

						var quoteHeight = $("#character-quote").outerHeight();
						// first, if quote height is more than half of the height of the container, shrink line-height.
						// it might still be greater than half height, but should be better.
						if (quoteHeight > maxHeight /2){
							$("#character-quote div").css("line-height", 1);
							quoteHeight = $("#character-quote").outerHeight();
						}

						// It seems the best way to change the height is by reducing container width, since using responsive image
						var imageContainerHeight = $("#word-info-card").outerHeight() - quoteHeight

						var imageContainerWidth = $("#image-container").outerWidth();
						var newImageHeight = maxHeight - quoteHeight;
						var newImageWidth = imageContainerWidth / imageContainerHeight * newImageHeight;
						console.log("quoteHeight", quoteHeight);
						console.log("old image width and height:", imageContainerWidth, imageContainerHeight);
						console.log("trying to set new width and height of ", newImageWidth, newImageHeight);
						// only peform change if new width less than old.
						if (newImageWidth < imageContainerWidth) {
							//change container width to appropriate height, but also set height of image
							$("#image-container").width(newImageWidth);
							$("#word-image").height(newImageHeight);
						}
					}
					$("#word-info-card").fadeOut(0, function() {
						$("#word-info-card").fadeIn(500);
					});


				});
			});
			// cardBody = $("word")
			// cardBody.append(blockQuote).append("<br>").append(quoteSource);

			//this keeps adding to the card while it is fading in.

			// append(image);
			// $("#character-quote").append()
				// $("<div>", {class: "card-blockquote", id: "quote-text", text: quotesForWords[me.word].quote})).
				// append($("<div>", {class: "blockquote-footer", id: "quote-source", text: quotesForWords[me.word].quoteSource}));

				//if there are line breaks "\n" in quote text, replace with <br>

			// $("#quote-text").text(quotesForWords[me.word].quote);
			// $("#quote-footer").text(quotesForWords[me.word].quoteSource);
		}
		else {
			// no quote for this word.
			$("#character-quote").empty();
			// $("#quote-text").text("");
			// $("#quote-footer").text("");
		}
	}

	prepareWordDiv() {
		var me = this;
		console.log("maskedString: " + me.maskedString);
		var wordSpans = me.maskedString.split("").map(function(letter) {
			let spanClass = letter === "*" ? "masked-letter" : (/[a-z]/.test(letter.toLowerCase())) ? "unmasked-letter" : "no-underline";
			if (letter === "*") letter = "&nbsp"
			return "<span class=" + spanClass +">"+ letter + "</span>";
		}).join("");


		var wordDiv = ("<div class='word-div'>" + wordSpans + "</div>");
		return wordDiv;
	}

	showGame() {
		// Actually draw game on page.
		var me = this;
		// console.log(app);
		// let guessesLeft = me.guessesLeft;
		// console.log("guessesLeft: " + guessesLeft);
		$("#guesses-left").text(me.guessesLeft);
		console.log(app);
		var wordDiv = this.prepareWordDiv()

		// console.log(wordSpans);
		$("#current-word-card .card-body").html(wordDiv);
		// console.log("hi", Object.keys(this.game.userGuesses).toString());
		$("#guessed-letters").text(Object.keys(this.game.userGuesses).toString().split(",").join(" "));

		if (me.game.outcome !== OutcomeEnum.INPROGRESS) {
			if (me.game.outcome === OutcomeEnum.WIN) {
				$("body").trigger(EventEnum.GAMEWIN);
				// me.handleWin();
			}
			else if (me.game.outcome === OutcomeEnum.LOSE) {
				// me.handleLoss();
				$("body").trigger(EventEnum.GAMELOSE);
			}
			this.updateQuote();
		}

		// $(".active-game").show();
	}
}




// $(document).ready(function() {
	var app = new HangmanApp(defaultMaxGuesses, defaultTheme);
	// var evtNewGame = $("body").event(EventEnum.NEWGAME);
	// var evtGameLoss = jQuery.event(EventEnum.GAMELOSE);
	// var evtGameWin = jQuery.event(EventEnum.GAMEWIN);




	document.onkeyup = function(event) {
		// if game is not in progress, then any key starts new game.
		if (typeof app.game === "undefined" || app.game.outcome !== OutcomeEnum.INPROGRESS ) {
			$("body").trigger(EventEnum.NEWGAME);
		}
		else if (/^Key[A-Z]$/.test(event.code)) {
			// console.log(event)
			app.guessLetter(event.key);
		}

	}



// });