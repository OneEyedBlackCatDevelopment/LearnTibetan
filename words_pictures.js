const l = new Map();
l.set('ka', {name:'ka', letter:'ཀ', picture:'🍎',word_tibetan:' ཀུ་ཤུ།',word_transliteration:'ku shu',word_english:'apple'});
l.set('kha', {name:'kha', letter:'ཁ', picture:'👄',word_tibetan:'ཁ༌',word_transliteration:'kha',word_english:'mouth'});
l.set('ga', {name:'ga', letter:'ག', picture:'🌨️',word_tibetan:'གངས ',word_transliteration:'gangs',word_english:'snow'});

l.set('nga', {name:'nga', letter:'ང', picture:'👃',word_tibetan:'ཤངས ',word_transliteration:'shangs',word_english:'nose'});
l.set('ca', {name:'ca', letter:'ཅ', picture:'⓵',word_tibetan:'གཅིག ',word_transliteration:'gcig',word_english:'one'});
l.set('cha', {name:'cha', letter:'ཆ', picture:'🧦',word_tibetan:'ཆ༌',word_transliteration:'cha',word_english:'pair'});
l.set('ja', {name:'ja', letter:'ཇ', picture:'🍵',word_tibetan:'ཇ༌',word_transliteration:'ja',word_english:'tea'});
l.set('nya', {name:'nya', letter:'ཉ', picture:'🐟',word_tibetan:'ཉ༌',word_transliteration:'nya',word_english:'fish'});

l.set('ta', {name:'ta', letter:'ཏ', picture:'🐎',word_tibetan:'རྟ༌',word_transliteration:'rta',word_english:'horse'});
l.set('tha', {name:'tha', letter:'ཐ', picture:'🥄',word_tibetan:'ཐུར་མ།',word_transliteration:'thur ma',word_english:'spoon'});
l.set('da', {name:'da', letter:'ད', picture:'🐻',word_tibetan:'དོམ',word_transliteration:'dom',word_english:'bear'});

l.set('na', {name:'na', letter:'ན', picture:'🤒',word_tibetan:'ནད',word_transliteration:'nad',word_english:'illness'});
l.set('pa', {name:'pa', letter:'པ', picture:'🦉',word_tibetan:'འུག་པ ',word_transliteration:'ug pa',word_english:'owl'});
l.set('pha', {name:'pha', letter:'ཕ', picture:'‍👨‍👧',word_tibetan:'པ་ཕ',word_transliteration:'pa pha',word_english:'father'});
l.set('ba', {name:'ba', letter:'བ', picture:'🐄',word_tibetan:'བ་ཕྱུགས',word_transliteration:'ba phyugs',word_english:'cow'});

l.set('ma', {name:'ma', letter:'མ', picture:'👩‍👦',word_tibetan:'ཨ་མ ',word_transliteration:'a ma',word_english:'mother'});
l.set('tsa', {name:'tsa', letter:'ཙ', picture:'🐭',word_tibetan:'ཙི་ཙི',word_transliteration:'tsi tsi',word_english:'mouse'});
l.set('tsha', {name:'tsha', letter:'ཚ', picture:'🕑',word_tibetan:'ཆུ་ཚོད',word_transliteration:'chu tshod',word_english:'clock'});
l.set('dza', {name:'dza', letter:'ཛ', picture:'👆',word_tibetan:'མཛུག་གུ་',word_transliteration:'mdzug gu',word_english:'finger'});

l.set('wa', {name:'wa', letter:'ཝ', picture:'🦊',word_tibetan:'ཝ་',word_transliteration:'wa',word_english:'fox'});
l.set('zha', {name:'zha', letter:'ཞ', picture:'👒',word_tibetan:'ཞྭ་མོ',word_transliteration:'zhwa mo',word_english:'hat'});
l.set('za', {name:'za', letter:'ཟ', picture:'🍽',word_tibetan:'ཟ',word_transliteration:'za',word_english:'eat'});
l.set('\'a', {name:'\'a', letter:'འ', picture:'🥛',word_tibetan:'འོ་མ ',word_transliteration:'\'o ma',word_english:'milk'});
l.set('ya', {name:'ya', letter:'ཡ', picture:'🐇',word_tibetan:'ཡོས ',word_transliteration:'yos',word_english:'hare (rabbit)'});
l.set('ra', {name:'ra', letter:'ར', picture:'🐐',word_tibetan:'ར་',word_transliteration:'ra',word_english:'goat'});
l.set('la', {name:'la', letter:'ལ', picture:'🐸',word_tibetan:'སྦལ་པ ',word_transliteration:'sbal pa',word_english:'frog'});
l.set('sha', {name:'sha', letter:'ཤ', picture:'🍖',word_tibetan:'ཤ་',word_transliteration:'sha',word_english:'meat'});

l.set('sa', {name:'sa', letter:'ས', picture:'🌏',word_tibetan:'ས་',word_transliteration:'sa',word_english:'earth'});
l.set('ha', {name:'ha', letter:'ཧ', picture:'🏔',word_tibetan:'ཧི་མ་ལ་ཡ',word_transliteration:'hi ma la ya',word_english:'Himalaya'});
l.set('a', {name:'a', letter:'ཨ', picture:'🥭',word_tibetan:'ཨམ',word_transliteration:'am',word_english:'mango'});




class Level {	
	letters;
	levelname;
}


level01 = new Level();
level01.levelname = "Picture Memory";
level01.letters =  new Array(
'ka', 'kha', 'ga', 'nga',
'ca', 'cha', 'ja', 'nya',
'ta', 'tha', 'da', 'na', 
'pa', 'pha', 'ba', 'ma', 
'tsa', 'tsha', 'dza', 'wa', 
'zha', 'za', '\'a', 'ya', 
'ra', 'la', 'sha', 'sa', 
'ha', 'a');
                            
levels = new Array( level01 );
currentLevel = 0;
	  
	  
function filldata() {
	const mainElement = document.querySelector('#game');
	mainElement.innerHTML = '';

	const tempT = document.createElement('table');
	html="<tl><th>Letter</th><th>English</th><th>Tibetan</th></tl>";
	tempT.insertAdjacentHTML('beforeEnd', html);
	
	for( i=0; i<levels[currentLevel].letters.length; i++) {
		const key = levels[currentLevel].letters[i];
		html="<tl>" + 
		"<td><span class='tibetan_letter'>" + l.get(key).letter +  "</span><br/>" + 
		"<span class='tibetan_transliteration'>" + l.get(key).name +  "</span></td>" + 
		"<td><span class='unicode_picture'>" + l.get(key).picture +  "</span><br/>" + 
		"<span class='english_text'>" + l.get(key).word_english +  "</span></td>" + 
		"<td><span class='tibetan_text'>" + l.get(key).word_tibetan +  "</span><br/>" + 
		"<span class='tibetan_transliteration'>" + l.get(key).word_transliteration +  "</span></td>" + 
		"<tl>"; 
		tempT.insertAdjacentHTML('beforeEnd', html);
	}
	
	mainElement.insertAdjacentElement('beforeEnd',tempT);
}



