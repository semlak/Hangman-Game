const defaultTheme = "tolkien";
const defaultMaxGuesses = 10;
const maxHeight = 540;
const delayAfterGameOver = 3000;  //3 seconds
const delayToStartNewGame = 1000;

var audioElement  // will be set later


const EventEnum = {
	NEWGAME: "NEWGAME",
	GAMEWIN: "GAMEWIN",
	GAMELOSE: "GAMELOSE",
	GAMEOVER: "GAMEOVER"
}

const OutcomeEnum = {
	WIN: 1,
	LOSE: 2,
	INPROGRESS: 3
};


const GameData = {
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
		quote: "For a great madness of rage was upon him, so that his eyes shone like the eyes of the Valar. Thus he came alone to Angband’s gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat.\n\nAnd Morgoth came.",
		quoteSource: "Quenta Silmarillion: Of the Ruin of Beleriand and the Fall of Fingolfin",
		aliases: [],
		hints: [
			"Was the first High-King of the Noldor after the rising of the Sun and the Moon",
			"Died in single combat against Morgoth"
		],
		image: "./assets/images/fingolfin.png",
		audio: "./assets/audio/fingolfin.mp3"
	},
	"Fingon": {
		quote: "Then he turned upon Fingon. That was a grim meeting. At last Fingon stood alone with his guard dead about him; and he fought with Gothmog, until another Balrog came behind and cast a thong of fire about him. Then Gothmog hewed him with his black axe, and a white flame sprang up from the helm of Fingon as it was cloven. Thus fell the High King of the Noldor.",
		quoteSource: "Quenta Silmarillion: Of the Fifth Battle: Nirnaeth Arnoediad",
		aliases: [],
		hints: [],
		image: "./assets/images/fingon.jpg",
		audio: "./assets/audio/fingon.mp3"

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
		image: "./assets/images/manwe.jpg",
		audio: "./assets/audio/manwe.mp3"
		},


	"Feanor": {
		quote: "For Fëanor was made the mightiest in all parts of body and mind: in valour, in endurance, in beauty, in understanding, in skill, in strength and subtlety alike: of all the Children of Ilúvatar, and a bright flame was in him.",
		quoteSource: "Quenta Silmarillion:  Of the Sun and Moon and the Hiding of Valinor",
		aliases: ["Curufinwë", "Fëanáro"],
		hints: ["Creator of the Silmarils"],
		image: "./assets/images/feanor.jpg",
		audio: "./assets/audio/feanor.mp3"
		},

	"Finarfin": {
		quote: "But Finarfin spoke softly, as was his wont, and sought to calm the Noldor, persuading them to pause and ponder ere deeds were done that could not be undone; and Orodreth, alone of his sons, spoke in like manner.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: [],
		hints: [],
		image: "./assets/images/finarfin.jpg",
		audio: "./assets/audio/finarfin.mp3"
		},

	"Finwe": {
		quote: "But Melkor was also there, and he came to the house of Fëanor and there he slew Finwë King of the Noldor before his doors, and spilled the first blood in the Blessed Realm; for Finwë alone had not fled from the horror of the Dark.",
		quoteSource: "Quenta Silmarillion: Of the Flight of the Noldor",
		aliases: ["King of the Noldor"],
		hints: ["Father of Feanor", "Was one of the three ambassadors chosen by Orome who should go to Valinor and speak for their people"],
		image: "./assets/images/finwe.jpg",
		audio: "./assets/audio/finwe.mp3"
		},


	"Ungoliant": {
		quote: "There in Avathar, secret and unknown, Ungoliant had made her abode. The Eldar knew not whence she came; but some have said that in ages long before she descended from the darkness that lies about Arda, when Melkor first looked down in envy upon the Kingdom of Manwë, and that in the beginning she was one of those that he corrupted to his service.",
		quoteSource: "Quenta Silmarillion: Of the Darkening of Valinor",
		aliases: ["Ungweliantë, Spider of Night, Ungweliant, Wirilómë, Gloomweaver, Móru, Primeval Night, Night"],
		hints: [],
		image: "./assets/images/Melkor-and-Ungoliant.jpg",
		audio: "./assets/audio/ungoliant.mp3"
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
		image: "./assets/images/Melkor-and-Ungoliant.jpg",
		audio: "./assets/audio/melkor.mp3"
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
		image: "./assets/images/grond.jpg",
		audio: "./assets/audio/grond.mp3"
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
		image: "./assets/images/ringil.jpg",
		audio: "./assets/audio/ringil.mp3"
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

	get guessesLeft() {
		return this.maxGuesses - this.wrongWholeWordGuesses - Object.keys(this.wrongGuesses).length;
	}


	get maskedString() {
		var game = this;
		// if the game is over, just return the whole word. Otherwise, return the masked word.
		if (game.outcome === OutcomeEnum.WIN || game.outcome === OutcomeEnum.LOSE ) {
			return game.word;
		}
		else {
			let maskedString = game.word.split("").map(function(letter) {
				let lcLetter = letter.toLowerCase();
				return ((typeof game.userGuesses[lcLetter] !== "undefined") || !(/[a-z]/.test(lcLetter)) ? letter : "*") ;
			}).join("");
			return maskedString;
		}
	}

	guessLetter(guess) {
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
			return true;
		}
		else {
			return false;
		}
	}

	checkForWin() {
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
			me.startGame();
			me.showGame();
		});

		// $("body").on(EventEnum.GAMEWIN, function(e) {
		// 	me.handleWin();
		// });

		// $("body").on(EventEnum.GAMELOSE, function(e) {
		// 	me.handleLoss();
		// });

		$("body").on(EventEnum.GAMEOVER, function(e) {
			if (me.game.outcome === OutcomeEnum.WIN) {
				me.handleWin();
			}
			else {
				me.handleLoss();
			}

			// Wait a few seconds, and then update app-status to say new game is starting
			setTimeout(function() {
				// $("#app-status")
				$("#app-status .card-header").removeClass("alert-success alert-danger alert-info alert-warning in").addClass("alert alert-warning fade in").text("Starting new game...");
				setTimeout(function() {
					$("body").trigger(EventEnum.NEWGAME);
				}, delayToStartNewGame);
			}, delayAfterGameOver);

		});


	}


	getPossibleWords(theme) {
		// convert the "keys" of GameData object into an array. They are the possible hangman words
		let words = Object.keys(GameData);
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

	get guessesLeft() {
		return this.game.guessesLeft;
	}

	handleWin() {
		var me = this;
		// remove the word just completed from the array of unused words (used filter)
		this.unusedWords = this.unusedWords.filter( word => word !== me.word);
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
		$("#app-status .card-header").html("Sorry. You lossed. <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>");
		$("#app-status .card-header").removeClass("alert-success alert-danger alert-info alert-warning in").addClass("alert alert-danger fade in")
	}

	updateQuote() {
		// okay. this function is a bit of a mess. It removes the old quote and picture and updates to a new one.
		// All my images and quotes are of different lengths, and so try to keep the entire container a reasonable height,
		// I add them to the div, and make it visible momentarily, get the element heights, and then hide, resize, and finally fade in.
		// I don't seem to see any flicker doing this.
		// I couldn't seem to manage to get things to work relying on just bootstrap.

		var me = this;
		// only try to update if info for the word is not undefined.
		if (typeof GameData[me.word] !== "undefined") {
			var itemData = GameData[me.word]

			var blockQuote = $("<div>", {class: "card-blockquote", id: "quote-text", text: "\"" + itemData.quote + "\""});
			//if there are line breaks "\n" in quote text, replace with <br>
			blockQuote.html(blockQuote.html().replace(/\n/g,'<br/>'));

			// get quote source
			var quoteSource = $("<div>", {class: "blockquote-footer", id: "quote-source", text: itemData.quoteSource});

			// get quote image
			var quoteImage = $("<img>", {class: "card-image-bottom img-fluid", id: "quote-image", src: itemData.image, alt: me.word});
			//update #character-quote element.

			// create new elements
			var cardBody = ("<div>", {class: "card-body", id: "character-quote"});

			$("#word-info-card").fadeOut(1000, function() {
				// remove any previously set css settings from jquery
				$("#image-container").width("");
				$("#image-container").height("");
				$("#character-quote div").css("line-height", "");

				$("#character-quote").empty();
				$("#image-container").remove();
				$("#character-quote").append(blockQuote).append("<br>").append(quoteSource);

				$("#word-info-card").append(cardBody, $("<div id='image-container'>").append(quoteImage)).fadeIn(0, function() {
					// the combined height of the quote and image might be too big. Check the height and resize image if needed.
					if ($("#word-info-card").outerHeight() > maxHeight) {

						var quoteHeight = $("#character-quote").outerHeight();
						// first, if quote height is more than half of the height of the container, shrink line-height.
						// it might still be greater than half height, but should be better.
						if (quoteHeight > maxHeight /2){
							$("#character-quote div").css("line-height", 1);
							quoteHeight = $("#character-quote").outerHeight();
						}

						// It seems the best way to change the height is by reducing container width, since using responsive image
						var imageHeight = $("#word-info-card").outerHeight() - quoteHeight
						var imageWidth = $("#image-container").outerWidth();
						var newImageHeight = maxHeight - quoteHeight;
						var newImageWidth = imageWidth / imageHeight * newImageHeight;

						// only peform change if new width less than old.
						if (newImageWidth < imageWidth) {
							//change container width to appropriate height, but also set height of image (only an issue for for tall images)
							$("#image-container").width(newImageWidth);
							$("#quote-image").height(newImageHeight);
						}
					}
					// did all this while the images were visible. However, hopefully so quick user won't notice. Fade Out
					$("#word-info-card").fadeOut(0, function() {
						// finally do nice fadeIn
						$("#word-info-card").fadeIn(500);
					});
				});
			});
			if (typeof itemData.audio !== "undefined") {
				var audioURL = itemData.audio;
				if (/github\.io/.test(document.URL)) {
					audioURL = "https://raw.githubusercontent.com/semlak/Hangman-Game/master/" + audioURL;
				}
				audioElement.setAttribute("src", audioURL);
				audioElement.play();
			}
		}
		else {
			// shouldn't get here. I didn't have quotes for all items initially.
			$("#word-info-card").fadeOut(1000, function() {
				$("#character-quote").empty();
				$("#image-container").remove();
			});
		}
	}

	prepareWordDiv() {
		/*
		 so, if the current word is "HANGMAN", with only the letter H and N visible,
		 me.maskedString will be "H*N****N". We want the page to look like "H _ N _ _ _ _ N"
		The following maps that maskedString to an array of span elements (each span as HTML text).
		Each span will contain either the letter (if already guessed) or a &nbsp character.

		Each Span will have a class saying if it is underline or non-underline.

		CSS styling will be applied to have a bottom border for letters (whether or not they are guessed)
		Note that if the word has a space or dash in the word, that will be shown to the user, and will not have a bottom border
		*/

		var me = this;

		var wordSpans = me.maskedString.split("").map(function(letter) {
			let spanClass = letter === "*" ||  (/[a-z]/.test(letter.toLowerCase())) ? "underline" : "non-underline";
			// if letter is *, replace with emptyness (&nbsp)
			if (letter === "*") letter = "&nbsp"
			return "<span class=" + spanClass +">"+ letter + "</span>";
		});

		// now, combine all those span elements and wrap in a div
		var wordDiv = ("<div class='word-div'>" + wordSpans.join("") + "</div>");
		return wordDiv;
	}

	showGame() {
		// Actually draw game on page.
		var me = this;
		$("#guesses-left").text(me.guessesLeft);
		var wordDiv = this.prepareWordDiv()

		$("#current-word-card .card-body").html(wordDiv);
		$("#guessed-letters").text(Object.keys(this.game.userGuesses).toString().split(",").join(" "));

		if (me.game.outcome !== OutcomeEnum.INPROGRESS) {
			console.log("emitting GAMEOVER event");
			$("body").trigger(EventEnum.GAMEOVER);
			this.updateQuote();
		}

	}
}




$(document).ready(function() {
	var app = new HangmanApp(defaultMaxGuesses, defaultTheme);
	// var evtGameLoss = jQuery.event(EventEnum.GAMELOSE);
	// var evtGameWin = jQuery.event(EventEnum.GAMEWIN);


	// this variable will be set momentarily to true at the end of each game to prevent user from
	// accidently starting a new game right away
	var ignoreUserInput = false;

	audioElement = document.createElement("audio");

	document.onkeyup = function(event) {
		// if game is not in progress, then any key starts new game.
		// Keyboard input is ignored if game is just inbetween the end of one game and the beginning of another
		// if (typeof app.game === "undefined" || app.game.outcome !== OutcomeEnum.INPROGRESS ) {
		if (typeof app.game === "undefined") {
			$("body").trigger(EventEnum.NEWGAME);
		}
		else if (app.game.outcome === OutcomeEnum.INPROGRESS && /^Key[A-Z]$/.test(event.code)) {
			app.guessLetter(event.key);
		}

	}

	window.addEventListener('keydown', function(e) {
  		if(e.keyCode == 32 && e.target == document.body) {
    		e.preventDefault();
  	}
});


});