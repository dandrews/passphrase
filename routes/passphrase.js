exports.generate = function(req, res) {
    console.log('generating phrase');
    var phrase = passphrase_gen();
    console.log('generated phrase: ' + phrase );
    res.send({passphrase: phrase});
};

exports.generate_n = function(req, res) {

    var n = parseInt(req.params.n);
    if (n > 0)
    {
        var passphrases = [];
        var phrase = '';
        console.log('generating phrases');
        for (var i = 0; i < n; i++ )
        {
            console.log('generating phrase');
            phrase = passphrase_gen();
            console.log('generated phrase: ' + phrase );
            passphrases.push( phrase );
        }
        console.log('generated phrases: ' + passphrases );
        res.send({ n: n, passphrases: passphrases });
    }
    else
    {
        res.send({});
    }
};
 

/*----------------------------------------------------------------------------*/
// A SHA-1 hash generated on the server which is unique for each visit:
var passphrase_server_hash = "762623f33d652782082f8af95ca2f492c549aba1";

var passphrase_wordlist = [
    "ability","able","aboard","about","above","accept","accident","according",
    "account","accurate","acres","across","act","action","active","activity",
    "actual","actually","add","addition","additional","adjective","adult","adventure",
    "advice","affect","afraid","after","afternoon","again","against","age",
    "ago","agree","ahead","aid","air","airplane","alike","alive",
    "all","allow","almost","alone","along","aloud","alphabet","already",
    "also","although","am","among","amount","ancient","angle","angry",
    "animal","announced","another","answer","ants","any","anybody","anyone",
    "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
    "appropriate","are","area","arm","army","around","arrange","arrangement",
    "arrive","arrow","art","article","as","aside","ask","asleep",
    "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
    "attention","audience","author","automobile","available","average","avoid","aware",
    "away","baby","back","bad","badly","bag","balance","ball",
    "balloon","band","bank","bar","bare","bark","barn","base",
    "baseball","basic","basis","basket","bat","battle","be","bean",
    "bear","beat","beautiful","beauty","became","because","become","becoming",
    "bee","been","before","began","beginning","begun","behavior","behind",
    "being","believed","bell","belong","below","belt","bend","beneath",
    "bent","beside","best","bet","better","between","beyond","bicycle",
    "bigger","biggest","bill","birds","birth","birthday","bit","bite",
    "black","blank","blanket","blew","blind","block","blood","blow",
    "blue","board","boat","body","bone","book","border","born",
    "both","bottle","bottom","bound","bow","bowl","box","boy",
    "brain","branch","brass","brave","bread","break","breakfast","breath",
    "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
    "broad","broke","broken","brother","brought","brown","brush","buffalo",
    "build","building","built","buried","burn","burst","bus","bush",
    "business","busy","but","butter","buy","by","cabin","cage",
    "cake","call","calm","came","camera","camp","can","canal",
    "cannot","cap","capital","captain","captured","car","carbon","card",
    "care","careful","carefully","carried","carry","case","cast","castle",
    "cat","catch","cattle","caught","cause","cave","cell","cent",
    "center","central","century","certain","certainly","chain","chair","chamber",
    "chance","change","changing","chapter","character","characteristic","charge","chart",
    "check","cheese","chemical","chest","chicken","chief","child","children",
    "choice","choose","chose","chosen","church","circle","circus","citizen",
    "city","class","classroom","claws","clay","clean","clear","clearly",
    "climate","climb","clock","close","closely","closer","cloth","clothes",
    "clothing","cloud","club","coach","coal","coast","coat","coffee",
    "cold","collect","college","colony","color","column","combination","combine",
    "come","comfortable","coming","command","common","community","company","compare",
    "compass","complete","completely","complex","composed","composition","compound","concerned",
    "condition","congress","connected","consider","consist","consonant","constantly","construction",
    "contain","continent","continued","contrast","control","conversation","cook","cookies",
    "cool","copper","copy","corn","corner","correct","correctly","cost",
    "cotton","could","count","country","couple","courage","course","court",
    "cover","cow","cowboy","crack","cream","create","creature","crew",
    "crop","cross","crowd","cry","cup","curious","current","curve",
    "customs","cut","cutting","daily","damage","dance","danger","dangerous",
    "dark","darkness","date","daughter","dawn","day","dead","deal",
    "dear","death","decide","declared","deep","deeply","deer","definition",
    "degree","depend","depth","describe","desert","design","desk","detail",
    "determine","develop","development","diagram","diameter","did","die","differ",
    "difference","different","difficult","difficulty","dig","dinner","direct","direction",
    "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
    "disease","dish","distance","distant","divide","division","do","doctor",
    "does","dog","doing","doll","dollar","done","donkey","door",
    "dot","double","doubt","down","dozen","draw","drawn","dream",
    "dress","drew","dried","drink","drive","driven","driver","driving",
    "drop","dropped","drove","dry","duck","due","dug","dull",
    "during","dust","duty","each","eager","ear","earlier","early",
    "earn","earth","easier","easily","east","easy","eat","eaten",
    "edge","education","effect","effort","egg","eight","either","electric",
    "electricity","element","elephant","eleven","else","empty","end","enemy",
    "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
    "environment","equal","equally","equator","equipment","escape","especially","essential",
    "establish","even","evening","event","eventually","ever","every","everybody",
    "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
    "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
    "exist","expect","experience","experiment","explain","explanation","explore","express",
    "expression","extra","eye","face","facing","fact","factor","factory",
    "failed","fair","fairly","fall","fallen","familiar","family","famous",
    "far","farm","farmer","farther","fast","fastened","faster","fat",
    "father","favorite","fear","feathers","feature","fed","feed","feel",
    "feet","fell","fellow","felt","fence","few","fewer","field",
    "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
    "film","final","finally","find","fine","finest","finger","finish",
    "fire","fireplace","firm","first","fish","five","fix","flag",
    "flame","flat","flew","flies","flight","floating","floor","flow",
    "flower","fly","fog","folks","follow","food","foot","football",
    "for","force","foreign","forest","forget","forgot","forgotten","form",
    "former","fort","forth","forty","forward","fought","found","four",
    "fourth","fox","frame","free","freedom","frequently","fresh","friend",
    "friendly","frighten","frog","from","front","frozen","fruit","fuel",
    "full","fully","fun","function","funny","fur","furniture","further",
    "future","gain","game","garage","garden","gas","gasoline","gate",
    "gather","gave","general","generally","gentle","gently","get","getting",
    "giant","gift","girl","give","given","giving","glad","glass",
    "globe","go","goes","gold","golden","gone","good","goose",
    "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
    "graph","grass","gravity","gray","great","greater","greatest","greatly",
    "green","grew","ground","group","grow","grown","growth","guard",
    "guess","guide","gulf","gun","habit","had","hair","half",
    "halfway","hall","hand","handle","handsome","hang","happen","happened",
    "happily","happy","harbor","hard","harder","hardly","has","hat",
    "have","having","hay","he","headed","heading","health","heard",
    "hearing","heart","heat","heavy","height","held","hello","help",
    "helpful","her","herd","here","herself","hidden","hide","high",
    "higher","highest","highway","hill","him","himself","his","history",
    "hit","hold","hole","hollow","home","honor","hope","horn",
    "horse","hospital","hot","hour","house","how","however","huge",
    "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
    "hurt","husband","ice","idea","identity","if","ill","image",
    "imagine","immediately","importance","important","impossible","improve","in","inch",
    "include","including","income","increase","indeed","independent","indicate","individual",
    "industrial","industry","influence","information","inside","instance","instant","instead",
    "instrument","interest","interior","into","introduced","invented","involved","iron",
    "is","island","it","its","itself","jack","jar","jet",
    "job","join","joined","journey","joy","judge","jump","jungle",
    "just","keep","kept","key","kids","kill","kind","kitchen",
    "knew","knife","know","knowledge","known","label","labor","lack",
    "lady","laid","lake","lamp","land","language","large","larger",
    "largest","last","late","later","laugh","law","lay","layers",
    "lead","leader","leaf","learn","least","leather","leave","leaving",
    "led","left","leg","length","lesson","let","letter","level",
    "library","lie","life","lift","light","like","likely","limited",
    "line","lion","lips","liquid","list","listen","little","live",
    "living","load","local","locate","location","log","lonely","long",
    "longer","look","loose","lose","loss","lost","lot","loud",
    "love","lovely","low","lower","luck","lucky","lunch","lungs",
    "lying","machine","machinery","mad","made","magic","magnet","mail",
    "main","mainly","major","make","making","man","managed","manner",
    "manufacturing","many","map","mark","market","married","mass","massage",
    "master","material","mathematics","matter","may","maybe","me","meal",
    "mean","means","meant","measure","meat","medicine","meet","melted",
    "member","memory","men","mental","merely","met","metal","method",
    "mice","middle","might","mighty","mile","military","milk","mill",
    "mind","mine","minerals","minute","mirror","missing","mission","mistake",
    "mix","mixture","model","modern","molecular","moment","money","monkey",
    "month","mood","moon","more","morning","most","mostly","mother",
    "motion","motor","mountain","mouse","mouth","move","movement","movie",
    "moving","mud","muscle","music","musical","must","my","myself",
    "mysterious","nails","name","nation","national","native","natural","naturally",
    "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
    "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
    "never","new","news","newspaper","next","nice","night","nine",
    "no","nobody","nodded","noise","none","noon","nor","north",
    "nose","not","note","noted","nothing","notice","noun","now",
    "number","numeral","nuts","object","observe","obtain","occasionally","occur",
    "ocean","of","off","offer","office","officer","official","oil",
    "old","older","oldest","on","once","one","only","onto",
    "open","operation","opinion","opportunity","opposite","or","orange","orbit",
    "order","ordinary","organization","organized","origin","original","other","ought",
    "our","ourselves","out","outer","outline","outside","over","own",
    "owner","oxygen","pack","package","page","paid","pain","paint",
    "pair","palace","pale","pan","paper","paragraph","parallel","parent",
    "park","part","particles","particular","particularly","partly","parts","party",
    "pass","passage","past","path","pattern","pay","peace","pen",
    "pencil","people","per","percent","perfect","perfectly","perhaps","period",
    "person","personal","pet","phrase","physical","piano","pick","picture",
    "pictured","pie","piece","pig","pile","pilot","pine","pink",
    "pipe","pitch","place","plain","plan","plane","planet","planned",
    "planning","plant","plastic","plate","plates","play","pleasant","please",
    "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
    "point","pole","police","policeman","political","pond","pony","pool",
    "poor","popular","population","porch","port","position","positive","possible",
    "possibly","post","pot","potatoes","pound","pour","powder","power",
    "powerful","practical","practice","prepare","present","president","press","pressure",
    "pretty","prevent","previous","price","pride","primitive","principal","principle",
    "printed","private","prize","probably","problem","process","produce","product",
    "production","program","progress","promised","proper","properly","property","protection",
    "proud","prove","provide","public","pull","pupil","pure","purple",
    "purpose","push","put","putting","quarter","queen","question","quick",
    "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
    "rain","raise","ran","ranch","range","rapidly","rate","rather",
    "raw","rays","reach","read","reader","ready","real","realize",
    "rear","reason","recall","receive","recent","recently","recognize","record",
    "red","refer","refused","region","regular","related","relationship","religious",
    "remain","remarkable","remember","remove","repeat","replace","replied","report",
    "represent","require","research","respect","rest","result","return","review",
    "rhyme","rhythm","rice","rich","ride","riding","right","ring",
    "rise","rising","river","road","roar","rock","rocket","rocky",
    "rod","roll","roof","room","root","rope","rose","rough",
    "round","route","row","rubbed","rubber","rule","ruler","run",
    "running","rush","sad","saddle","safe","safety","said","sail",
    "sale","salmon","salt","same","sand","sang","sat","satellites",
    "satisfied","save","saved","saw","say","scale","scared","scene",
    "school","science","scientific","scientist","score","screen","sea","search",
    "season","seat","second","secret","section","see","seed","seeing",
    "seems","seen","seldom","select","selection","sell","send","sense",
    "sent","sentence","separate","series","serious","serve","service","sets",
    "setting","settle","settlers","seven","several","shade","shadow","shake",
    "shaking","shall","shallow","shape","share","sharp","she","sheep",
    "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
    "shoe","shoot","shop","shore","short","shorter","shot","should",
    "shoulder","shout","show","shown","shut","sick","sides","sight",
    "sign","signal","silence","silent","silk","silly","silver","similar",
    "simple","simplest","simply","since","sing","single","sink","sister",
    "sit","sitting","situation","six","size","skill","skin","sky",
    "slabs","slave","sleep","slept","slide","slight","slightly","slip",
    "slipped","slope","slow","slowly","small","smaller","smallest","smell",
    "smile","smoke","smooth","snake","snow","so","soap","social",
    "society","soft","softly","soil","solar","sold","soldier","solid",
    "solution","solve","some","somebody","somehow","someone","something","sometime",
    "somewhere","son","song","soon","sort","sound","source","south",
    "southern","space","speak","special","species","specific","speech","speed",
    "spell","spend","spent","spider","spin","spirit","spite","split",
    "spoken","sport","spread","spring","square","stage","stairs","stand",
    "standard","star","stared","start","state","statement","station","stay",
    "steady","steam","steel","steep","stems","step","stepped","stick",
    "stiff","still","stock","stomach","stone","stood","stop","stopped",
    "store","storm","story","stove","straight","strange","stranger","straw",
    "stream","street","strength","stretch","strike","string","strip","strong",
    "stronger","struck","structure","struggle","stuck","student","studied","studying",
    "subject","substance","success","successful","such","sudden","suddenly","sugar",
    "suggest","suit","sum","summer","sun","sunlight","supper","supply",
    "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
    "swept","swim","swimming","swing","swung","syllable","symbol","system",
    "table","tail","take","taken","tales","talk","tall","tank",
    "tape","task","taste","taught","tax","tea","teach","teacher",
    "team","tears","teeth","telephone","television","tell","temperature","ten",
    "tent","term","terrible","test","than","thank","that","thee",
    "them","themselves","then","theory","there","therefore","these","they",
    "thick","thin","thing","think","third","thirty","this","those",
    "thou","though","thought","thousand","thread","three","threw","throat",
    "through","throughout","throw","thrown","thumb","thus","thy","tide",
    "tie","tight","tightly","till","time","tin","tiny","tip",
    "tired","title","to","tobacco","today","together","told","tomorrow",
    "tone","tongue","tonight","too","took","tool","top","topic",
    "torn","total","touch","toward","tower","town","toy","trace",
    "track","trade","traffic","trail","train","transportation","trap","travel",
    "treated","tree","triangle","tribe","trick","tried","trip","troops",
    "tropical","trouble","truck","trunk","truth","try","tube","tune",
    "turn","twelve","twenty","twice","two","type","typical","uncle",
    "under","underline","understanding","unhappy","union","unit","universe","unknown",
    "unless","until","unusual","up","upon","upper","upward","us",
    "use","useful","using","usual","usually","valley","valuable","value",
    "vapor","variety","various","vast","vegetable","verb","vertical","very",
    "vessels","victory","view","village","visit","visitor","voice","volume",
    "vote","vowel","voyage","wagon","wait","walk","wall","want",
    "war","warm","warn","was","wash","waste","watch","water",
    "wave","way","we","weak","wealth","wear","weather","week",
    "weigh","weight","welcome","well","went","were","west","western",
    "wet","whale","what","whatever","wheat","wheel","when","whenever",
    "where","wherever","whether","which","while","whispered","whistle","white",
    "who","whole","whom","whose","why","wide","widely","wife",
    "wild","will","willing","win","wind","window","wing","winter",
    "wire","wise","wish","with","within","without","wolf","women",
    "won","wonder","wonderful","wood","wooden","wool","word","wore",
    "work","worker","world","worried","worry","worse","worth","would",
    "wrapped","write","writer","writing","written","wrong","wrote","yard",
    "year","yellow","yes","yesterday","yet","you","young","younger",
    "your","yourself","youth","zero","zoo"
];

// Get some entropy from the system clock:
function passphrase_time_ent()
{
    var d = 1 * new Date();
    var i = 0;
    while (1 * new Date() == d)
        i++; // Measure iterations until next tick
    return "" + d + i;
}

// Return a pseudorandom array of four 32-bit integers:
function passphrase_create_hash()
{
    // Entropy string built in a manner inspired by David Finch:
    var entropy = passphrase_server_hash + passphrase_time_ent();
    entropy += Math.random() + Math.random() + Math.random() + Math.random();
    entropy += passphrase_time_ent();
        
    // Hash and convert to 32-bit integers:
    var hexString = hex_sha1(entropy); // from sha1-min.js code below
    var result = [];
    for (var i = 0; i < 32; i += 8)
    {
        result.push(parseInt(hexString.substr(i, 8), 16));
    }
    return result;
}

// Generate a new passphrase and update the document:
function passphrase_gen()
{
    var hash = passphrase_create_hash();
    var choices = [];
    for (var w = 0; w < 4; w++)
    {
        var jsRandom = Math.floor(Math.random() * 0x100000000);
        var index = ((jsRandom ^ hash[w]) + 0x100000000) % passphrase_wordlist.length;
        choices.push(passphrase_wordlist[index]);
    }
    return choices.join(" ");
}

// from sha1-min.js
var hexcase=0;var b64pad="";function hex_sha1(a){return rstr2hex(rstr_sha1(str2rstr_utf8(a)))}function hex_hmac_sha1(a,b){return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(a),str2rstr_utf8(b)))}function sha1_vm_test(){return hex_sha1("abc").toLowerCase()=="a9993e364706816aba3e25717850c26c9cd0d89d"}function rstr_sha1(a){return binb2rstr(binb_sha1(rstr2binb(a),a.length*8))}function rstr_hmac_sha1(c,f){var e=rstr2binb(c);if(e.length>16){e=binb_sha1(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binb_sha1(a.concat(rstr2binb(f)),512+f.length*8);return binb2rstr(binb_sha1(d.concat(g),512+160))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binb(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(24-c%32)}return a}function binb2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(24-c%32))&255)}return a}function binb_sha1(v,o){v[o>>5]|=128<<(24-o%32);v[((o+64>>9)<<4)+15]=o;var y=Array(80);var u=1732584193;var s=-271733879;var r=-1732584194;var q=271733878;var p=-1009589776;for(var l=0;l<v.length;l+=16){var n=u;var m=s;var k=r;var h=q;var f=p;for(var g=0;g<80;g++){if(g<16){y[g]=v[l+g]}else{y[g]=bit_rol(y[g-3]^y[g-8]^y[g-14]^y[g-16],1)}var z=safe_add(safe_add(bit_rol(u,5),sha1_ft(g,s,r,q)),safe_add(safe_add(p,y[g]),sha1_kt(g)));p=q;q=r;r=bit_rol(s,30);s=u;u=z}u=safe_add(u,n);s=safe_add(s,m);r=safe_add(r,k);q=safe_add(q,h);p=safe_add(p,f)}return Array(u,s,r,q,p)}function sha1_ft(e,a,g,f){if(e<20){return(a&g)|((~a)&f)}if(e<40){return a^g^f}if(e<60){return(a&g)|(a&f)|(g&f)}return a^g^f}function sha1_kt(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};