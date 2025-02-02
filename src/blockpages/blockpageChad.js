chrome.storage.local.get(['updatedQuotes'], (res) => {
	let defaultQuotes = [
		[
		  'Abraham Lincoln',
		  'You cannot escape the responsibility of tomorrow by evading it today.'
		],
		[
		  'Alexis Carrel',
		  'Man cannot remake himself without suffering, for he is both the marble and the sculptor.'
		],
		[
		  'Andrew Carnegie',
		  'The man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.'
		],
		[ 'Batman', 'I have one power. I never give up.' ],
		[
		  'Batman',
		  'Why do we fall? So that we can learn to pick ourselves back up.'
		],
		[
		  'Batman',
		  "It's not who I am underneath, but what I do that defines me."
		],
		[
		  'Batman',
		  "But if I do that, if I allow myself to go down into that place... I'll never come back."
		],
		[
		  'Bruce Lee',
		  'Do not pray for an easy life. Pray for the strength to endure a difficult one.'
		],
		[
		  'Conor McGregor',
		  "Doubt is only removed by action. If you're not working then that's where doubt comes in."
		],
		[ 'Conor McGregor', 'All that matters is how you see yourself.' ],
		[
		  'Conor McGregor',
		  'The thing about the truth is, not a lot of people can handle it.'
		],
		[
		  'Conor McGregor',
		  'Life is about growing and improving and getting better.'
		],
		[
		  'Conor McGregor',
		  'The more you seek the uncomfortable the more you will become comfortable.'
		],
		[
		  'Conor McGregor',
		  'What defines us is how well we rise after falling.'
		],
		[ 'Conor McGregor', 'Real champions fight through adversity.' ],
		[
		  'Edwin Louis Cole',
		  'Being a male is a matter of birth. Being a man is a matter of choice.'
		],
		[
		  'Elon Musk',
		  'Persistence is very important. You should not give up unless you are forced to give up.'
		],
		[
		  'Elon Musk',
		  'I think it is possible for ordinary people to choose to be extraordinary.'
		],
		[
		  'Elon Musk',
		  "If humanity doesn't land on Mars in my lifetime, I would be very disappointed."
		],
		[
		  'Elon Musk',
		  "Why do you want to live? What's the point? What inspires you? What do you love about the future?"
		],
		[
		  'Friedrich Nietzsche',
		  'When we are tired, we are attacked by ideas we conquered long ago.'
		],
		[
		  'Friedrich Nietzsche',
		  'Invisible threads are the strongest ties.'
		],
		[
		  'Friedrich Nietzsche',
		  'The lonely one offers his hand too quickly to whomever he encounters.'
		],
		[
		  'Friedrich Nietzsche',
		  'There is not enough love and goodness in the world to permit giving any of it away to imaginary beings.'
		],
		[
		  'Friedrich Nietzsche',
		  'To live is to suffer, to survive is to find some meaning in the suffering.'
		],
		[
		  'Friedrich Nietzsche',
		  'Today as always, men fall into two groups: slaves and free men.'
		],
		[
		  'Friedrich Nietzsche',
		  'I hate who steals my solitude, without really offer me in exchange company.'
		],
		[
		  'Hemingway',
		  'True nobility is being superior to your former self.'
		],
		[
		  'Henry Ford',
		  'My best friend is the one who brings out the best in me.'
		],
		[ 'Isaiah 54:17', 'No weapon formed against you shall prosper.' ],
		[ 'James Bond', 'Bond. James Bond.' ],
		[
		  'Jean Paul Sartre',
		  'Man is nothing else, but what he makes of himself.'
		],
		[ 'Jocko Willink', 'All excuses are lie' ],
		[
		  'Johann Wolfgang von Goethe',
		  'One cannot always be a hero, but one can always be a man.'
		],
		[
		  'Jordan Peterson',
		  "The masculine spirit is under assault. It's obvious."
		],
		[
		  'Jordan Peterson',
		  'Once someone has spent enough time cultivating bad habits and biding their time, they are much diminished. Much of what they could have been has dissipated.'
		],
		[
		  'Jordan Peterson',
		  'Can you imagine yourself in 10 years if, instead of avoiding the things you know you should do, you actually did them every single day?'
		],
		[
		  'Jordan Peterson',
		  'The successful among us delay gratification. The successful among us bargain with the future.'
		],
		[
		  'Jordan Peterson',
		  "Don't compare yourself with other people; compare yourself with who you were yesterday."
		],
		[
		  'Jordan Peterson',
		  'To suffer terribly and to know yourself as the cause: that is Hell.'
		],
		[ 'Jordan Peterson', 'Dare to be dangerous.' ],
		[
		  'Jordan Peterson',
		  'Accept the terrible responsibility of life with eyes wide open.'
		],
		[
		  'Jordan Peterson',
		  "It's very difficult to regulate yourself, and if you learn to do that, well, it starts to spill over."
		],
		[
		  'Jordan Peterson',
		  "Don't compare yourself with other people; compare yourself with who you were yesterday."
		],
		[
		  'Jordan Peterson',
		  'Define who you are. Refine your personality. Choose your destination and articulate your Being.'
		],
		[
		  'Jordan Peterson',
		  "You're going to pay a price for every bloody thing you do and everything you don't do."
		],
		[ 'Jordan Peterson', 'Happiness is a pointless goal.' ],
		[
		  'Jordan Peterson',
		  'Quit drooping and hunching around. Walk tall and gaze forthrightly ahead.'
		],
		[
		  'Lord Baelish',
		  "It doesn't matter what we want. Once we get it, then we want something else."
		],
		[
		  'Lord of the Rings',
		  "'Precious, precious, precious!' Gollum cried. 'My Precious! O my Precious!'"
		],
		[
		  'Marcus Aurelius',
		  'Do every act of your life as though it were the very last act of your life.'
		],
		[
		  'Marcus Aurelius',
		  'You have power over your mind — not outside events. Realize this, and you will find strength.'
		],
		[ 'Marcus Aurelius', 'If it is not right do not do it.' ],
		[
		  'Marcus Aurelius',
		  'You have power over your mind – not outside events. Realize this, and you will find strength.'
		],
		[ 'Marcus Aurelius', "If it's endurable, then endure it." ],
		[
		  'Marcus Aurelius',
		  'Because a thing seems difficult for you, do not think it impossible.'
		],
		[
		  'Marcus Aurelius',
		  'Let men see, let them know, a real man, who lives as he was meant to live.'
		],
		[
		  'Martin Luther King Jr.',
		  'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.'
		],
		[
		  'Max Landis',
		  "What's special about Superman is that he will always make the right choice."
		],
		[
		  'Patrick Henry',
		  'Adversity toughens manhood, and the characteristic of the good or the great man is not that he has been exempt from the evils of life, but that he has surmounted them.'
		],
		[
		  'Ramsay Bolton',
		  "If you think this has a happy ending you haven't been paying attention."
		],
		[ 'Robert Bolt', "A man should go where he won't be tempted." ],
		[
		  'Robert Jordan',
		  'There is one rule, above all others, for being a man. Whatever comes, face it on your feet.'
		],
		[ 'Samwise Gamgee', 'Wake up, Mr. Frodo!' ],
		[
		  'Seneca',
		  'No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.'
		],
		[ 'Seneca', 'All cruelty spawns from weakness.' ],
		[
		  'Sigmund Freud',
		  'One day, in retrospect, the years of struggle will strike you as the most beautiful.'
		],
		[ 'Spiderman', 'With great power comes great responsibility.' ],
		[ 'Superman', 'Dreams save us.' ],
		[ 'Superman', "You're much stronger than you think you are. " ],
		[
		  'Superman',
		  "It doesn't take X-Ray vision to see you are up to no good."
		],
		[
		  'Tyler Durden',
		  'Without pain, without sacrifice we would have nothing. Like the first monkey shot into space.'
		],
		[
		  'Tyler Durden',
		  'This is your life and its ending one moment at a time.'
		],
		[
		  'Victor Frankl',
		  'When men cannot find a deep sense of meaning, they distract themselves with pleasure.'
		],
		[
		  'Vito Corleone',
		  'I spent my life trying not to be careless. Women and children can be careless, but not men.'
		],
		[
		  'Washington',
		  'Human happiness and moral duty are inseparably connected.'
		],
		[
		  'Yukio Mishima',
		  'The special quality of hell is to see everything clearly down to the last detail.'
		]
	  ]

	let quotes = res.updatedQuotes ?? defaultQuotes;
	let rand = Math.floor(Math.random() * quotes.length);
	document.getElementById('author').innerHTML = quotes[rand][0];
	document.getElementById('quote').innerHTML = quotes[rand][1];
});

chrome.storage.sync.get(['blockingType'], (res) => {
	let blockingType = res.blockingType;
	let randImage = Math.floor(Math.random() * 6);
	    if (blockingType == 1) {
        document.getElementById('imageid').style.backgroundImage =
            `url(./blockChads/wall${randImage}r.jpg)`;
    } else {
        document.getElementById('imageid').style.backgroundImage =
            `url(./blockChads/wall${randImage}.jpg)`;
    }
});
