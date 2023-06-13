![bob dylan](https://www.bobdylan.com/wp-content/themes/icon-bobdylan/img/bob-dylan-title-small.png)


# apiDylan

While learning to webdeveloping, I missed some "old-school" content to diplay on the UI. I got tyred of [rickymorty](https://rickandmortyapi.com/) and [pokeapi](https://pokeapi.co/).

Don't get me wrong but those cartoons make no sense to me, I'am on my early fifties and I'll rather work with some other value content to display on the screen while learning how to work with api rest.

No bussiness (apart from bobdylan's bussiness) could be generated with these endpoints. Fell free to use these endpoints for learning purposes and give support to bob dylan.

In all returned data items, there's a link to the official bobdylan.com webpage that you could use to give extra infomation about the item as giving bob dylan all the credit that he deserves.

## Endpoints

This first version of the apidylan provides 3 different endpoints:

1. All dylan songs (around 490 songs).
2. All dylan's songs paginated by 10 items.
3. Random bob dylan's sentence.

### All dylan songs (around 490 songs)

`````
https://loremdylan-production.up.railway.app/api/v1/all
`````

This will return an object with the full data.

```
{
	"data": [
		{
			"song": "‘Cross the Green Mountain",
			"lyrics": " I crossed the green mountain, I slept by the stream Heaven blazin’ in my head, I dreamt a monstrous dream Something came up out of the seaSwept through the land of the rich and the freeI look into the eyes of my merciful friendAnd then I ask myself, is this the end? Memories linger, sad yet sweetAnd I think of the souls in heaven who will meetAltars are burning with flames falling wideThe foe has crossed over from the other sideThey tip their caps from the top of the hillYou can feel them come, more brave blood to spillAlong the dim Atlantic lineThe ravaged land lies for miles behindThe light’s comin’ forward and the streets are broad All must yield to the avenging GodThe world is old, the world is grayLessons of life can’t be learned in a dayI watch and I wait and I listen while I standTo the music that comes from a far better landClose the eyes of our Captain, peace may he know His long night is done, the great leader is laid low He was ready to fall, he was quick to defendKilled outright he was by his own menIt’s the last day’s last hour of the last happy year I feel that the unknown world is so nearPride will vanish and glory will rotBut virtue lives and cannot be forgotThe bells of evening have rungThere’s blasphemy on every tongueLet them say that I walked in fair nature’s light And that I was loyal to truth and to rightServe God and be cheerful, look upward beyondBeyond the darkness that masks the surprises of dawnIn the deep green grasses of the blood stained woodThey never dreamed of surrendering. They fell where they stoodStars fell over Alabama, I saw each starYou’re walkin’ in dreams whoever you are Chilled are the skies, keen is the frostThe ground’s froze hard and the morning is lostA letter to mother came todayGunshot wound to the breast is what it did say But he’ll be better soon he’s in a hospital bed But he’ll never be better, he’s already deadI’m ten miles outside the city and I’m lifted awayIn an ancient light that is not of dayThey were calm, they were blunt, we knew ’em all too well We loved each other more than we ever dared to tell ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992273_399.jpg",
			"album": "https://www.bobdylan.com/albums/bootleg-series-vol-8-tell-tale-signs/",
			"id": "f291fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "‘Til I Fell in Love with You",
			"lyrics": "Well, my nerves are exploding and my body’s tenseI feel like the whole world got me pinned up against the fenceI’ve been hit too hard, I’ve seen too muchNothing can heal me now, but your touchI don’t know what I’m gonna doI was all right ’til I fell in love with youWell, my house is on fire, burning to the skyI thought it would rain but the clouds passed byNow I feel like I’m coming to the end of my wayBut I know God is my shield and he won’t lead me astrayStill I don’t know what I’m gonna doI was all right ’til I fell in love with youBoys in the street beginning to playGirls like birds flying awayWhen I’m gone you will remember my nameI’m gonna win my way to wealth and fameI don’t know what I’m gonna doI was all right ’til I fell in love with youJunk is piling up, taking up spaceMy eyes feel like they’re falling off my faceSweat falling down, I’m staring at the floorI’m thinking about that girl who won’t be back no moreI don’t know what I’m gonna doI was all right ’til I fell in love with youWell, I’m tired of talking, I’m tired of trying to explainMy attempts to please you were all in vainTomorrow night before the sun goes downIf I’m still among the living, I’ll be Dixie boundI just don’t know what I’m gonna doI was all right ’til I fell in love with you. ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992270_169.jpg",
			"album": "https://www.bobdylan.com/albums/time-out-of-mind/",
			"id": "fdf1fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		}
	]
}

```
### All dylan's songs paginated by 10 items.

```
https://loremdylan-production.up.railway.app/api/v1/paginated?page=2

```
This will return a json object with the following props in order to be able to paginate it with ease: ```count``` : number of items of the data array, ```current``` : current page we are browser in, ```pages``` : number of pages, ```prevPage``` : url to get previous page, ```nextPage``` : url to get next page.
```
{
	"count": 489,
	"current": 2,
	"pages": 49,
	"prevPage": "https://apidylan.up.railway.app/api/v1/paginated?page=1",
	"nextPage": "https://apidylan.up.railway.app/api/v1/paginated?page=3",
	"data": [
		{
			"song": "Ain’t No More Cane",
			"lyrics": "Ain't no more cane on the brazosOh, oh, oh, oh...Its all been ground down to molassesOh, oh- oh, oh- oh...You shoulda been on the river in 1910They were driving the women just like they drove the men.Go down old hannah, don'cha rise no moreDon't you rise up til judgment day's for sureAin't no more cane on the brazosIts all been ground down to molassesCaptain, don't you do me like you done poor old shineWell ya drove that bully til he went stone blindWake up on a lifetime, hold up your own headWell you may get a pardon and then you might drop deadAin't no more cane on the brazosIts all been ground down to molasses.",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/4777152_326.jpg",
			"album": "https://www.bobdylan.com/albums/basement-tapes/",
			"id": "f291fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Ain’t Talkin’",
			"lyrics": "As I walked out tonight in the mystic gardenThe wounded flowers were dangling from the vines I was passing by yon cool and crystal fountain Someone hit me from behindAin’t talkin’, just walkin’Through this weary world of woe Heart burnin’, still yearnin’No one on earth would ever knowThey say prayer has the power to helpSo pray for me motherIn the human heart an evil spirit can dwellI’m trying to love my neighbor and do good unto others But oh, mother, things ain’t going wellAin’t talkin’, just walkin’I’ll burn that bridge before you can cross Heart burnin’, still yearnin’They’ll be no mercy for you once you’ve lostNow I’m all worn down by weepin’My eyes are filled with tears, my lips are dryIf I catch my opponents ever sleepin’I’ll just slaughter them where they lieAin’t talkin’, just walkin’Through a world mysterious and vague Heart burnin’, still yearnin’Walking through the cities of the plagueThe whole world is filled with speculationThe whole wide world which people say is round They will tear your mind away from contemplation They will jump on your misfortune when you’re downAin’t talkin’, just walkin’Eatin’ hog-eyed grease in hog-eyed town Heart burnin’, still yearnin’Someday you’ll be glad to have me aroundThey will crush you with wealth and power Every waking moment you could crackI’ll make the most of one last extra hourI’ll avenge my father’s death then I’ll step backAin’t talkin’, just walkin’Hand me down my walkin’ caneHeart burnin’, still yearnin’Got to get you out of my miserable brainIt’s bright in the heavens and the wheels are flying Fame and honor never seem to fadeThe fire’s gone out but the light is never dying Who says I can’t get heavenly aid?Ain’t talkin’, just walkin’Carrying a dead man’s shieldHeart burnin’, still yearnin’Walkin’ with a toothache in my heelThe suffering is unendingEvery nook and cranny has its tears I’m not playing, I’m not pretending I’m not nursing any superfluous fearsAin’t talkin’, just walkin’Walkin’ ever since the other night Heart burnin’, still yearnin’ Walkin’ ’til I’m clean out of sightAs I walked out in the mystic gardenOn a hot summer day, hot summer lawn Excuse me, ma’am, I beg your pardon There’s no one here, the gardener is goneAin’t talkin’, just walkin’Up the road around the bendHeart burnin’, still yearnin’In the last outback, at the world’s end 2006 ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992202_167.jpg",
			"album": "https://www.bobdylan.com/albums/modern-times/",
			"id": "f32591fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Alberta #1",
			"lyrics": "Alberta let your hair hang lowAlberta let your hair hang lowI'll give you more goldThan your apron can holdIf you'd only let your hair hang lowAlberta what's on your mindAlberta what's on your mindYou keep me worried and botheredAll of the timeAlberta what's on your mindAlberta don't you treat me unkindAlberta don't you treat me unkindOh my heart is so sadCause I want you so badAlberta don't you treat me unkindAlberta let your hair hang lowAlberta let your hair hang lowI'll give you more goldThan your apron can holdIf you'll only let your hair hang low 1970 by Big Sky Music",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992257_488.jpg",
			"album": "https://www.bobdylan.com/albums/self-portrait/",
			"id": "53291fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Alberta #2",
			"lyrics": "Alberta let your hair hang lowAlberta let your hair hang lowI'll give you more goldThan your apron can holdIf you'd only let your hair hang lowAlberta what's on your mindAlberta what's on your mindYou keep me worried and botheredAll of the timeAlberta what's on your mindAlberta don't you treat me unkindAlberta don't you treat me unkindOh my heart is so sadCause I want you so badAlberta don't you treat me unkindAlberta let your hair hang lowAlberta let your hair hang lowI'll give you more goldThan your apron can holdIf you'll only let your hair hang low1970 Big Sky Music",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992257_488.jpg",
			"album": "https://www.bobdylan.com/albums/self-portrait/",
			"id": "qw1fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "All Along the Watchtower",
			"lyrics": "“There must be some way out of here,” said the joker to the thief“There’s too much confusion, I can’t get no reliefBusinessmen, they drink my wine, plowmen dig my earthNone of them along the line know what any of it is worth”“No reason to get excited,” the thief, he kindly spoke“There are many here among us who feel that life is but a jokeBut you and I, we’ve been through that, and this is not our fateSo let us not talk falsely now, the hour is getting late”All along the watchtower, princes kept the viewWhile all the women came and went, barefoot servants, tooOutside in the distance a wildcat did growlTwo riders were approaching, the wind began to howl 1968 by Dwarf Music; renewed 1996 by Dwarf Music",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/5701838_159.jpg",
			"album": "https://www.bobdylan.com/albums/john-wesley-harding/",
			"id": "op291fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "All I Really Want to Do",
			"lyrics": "I ain’t lookin’ to compete with youBeat or cheat or mistreat youSimplify you, classify youDeny, defy or crucify youAll I really want to doIs, baby, be friends with youNo, and I ain’t lookin’ to fight with youFrighten you or tighten youDrag you down or drain you downChain you down or bring you downAll I really want to doIs, baby, be friends with youI ain’t lookin’ to block you upShock or knock or lock you upAnalyze you, categorize youFinalize you or advertise youAll I really want to doIs, baby, be friends with youI don’t want to straight-face youRace or chase you, track or trace youOr disgrace you or displace youOr define you or confine youAll I really want to doIs, baby, be friends with youI don’t want to meet your kinMake you spin or do you inOr select you or dissect youOr inspect you or reject youAll I really want to doIs, baby, be friends with youI don’t want to fake you outTake or shake or forsake you outI ain’t lookin’ for you to feel like meSee like me or be like meAll I really want to doIs, baby, be friends with you 1964 by Warner Bros. Inc.; renewed 1992 ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/5701844_147.jpg",
			"album": "https://www.bobdylan.com/albums/another-side-of-bob-dylan/",
			"id": "909e0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "All Over You",
			"lyrics": "Well, if I had to do it all over againBabe, I’d do it all over youAnd if I had to wait for ten thousand yearsBabe, I’d even do that tooWell, a dog’s got his bone in the alleyA cat, she’s got nine livesA millionaire’s got a million dollarsKing Saud’s got four hundred wivesWell, ev’rybody’s got somethin’That they’re lookin’ forward toI’m lookin’ forward to when I can do it all againAnd babe, I’ll do it all over youWell, if I had my way tomorrow or todayBabe, I’d run circles all aroundI’d jump up in the wind, do a somersault and spinI’d even dance a jig on the groundWell, everybody gets their hourEverybody gets their timeLittle David when he picked up his pebblesEven Sampson after he went blindWell, everybody gets the chanceTo do what they want to doWhen my time arrives you better run for your life’Cause babe, I’ll do it all over youWell, I don’t need no money, I just need a day that’s sunnyBaby, and my days are gonna comeAnd I grab me a pint, you know that I’m a giantWhen you hear me yellin’, “Fee-fi-fo-fum”Well, you cut me like a jigsaw puzzleYou made me to a walkin’ wreckThen you pushed my heart through my backboneThen you knocked off my head from my neckWell, if I’m ever standin’ steadyA-doin’ what I want to doWell, I tell you little lover that you better run for cover’Cause babe, I’ll do it all over youI’m just restin’ at your gate so that I won’t be lateAnd, momma, I’m a-just sittin’ on the shelfLook out your window fair and you’ll see me squattin’ thereJust a-fumblin’ and a-mumblin’ to myselfWell, after my cigarette’s been smoked upAfter all my liquor’s been drunkAfter my dreams are dreamed outAfter all my thoughts have been thunkWell, after I do some of these thingsI’m gonna do what I have to doAnd I tell you on the side, that you better run and hide’Cause babe, I’ll do it all over you 1968, 1970 Warner Bros. Inc.; renewed 1996, 1998 ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/5697812_552.jpg",
			"album": "https://www.bobdylan.com/albums/bootleg-series-vol-9-witmark-demos-1962-1964/",
			"id": "fs91fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Angelina",
			"lyrics": "Well, it’s always been my nature to take chancesMy right hand drawing back while my left hand advancesWhere the current is strong and the monkey dancesTo the tune of a concertinaBlood dryin’ in my yellow hair as I go from shore to shoreI know what it is that has drawn me to your doorBut whatever it could be, makes me think you’ve seen me beforeAngelinaOh, Angelina. Oh, AngelinaHis eyes were two slits that would make a snake proudWith a face that any painter would paint as he walked through the crowdWorshipping a god with the body of a woman well endowedAnd the head of a hyenaDo I need your permission to turn the other cheek?If you can read my mind, why must I speak?No, I have heard nothing about the man that you seekAngelinaOh, Angelina. Oh, AngelinaIn the valley of the giants where the stars and stripes explodeThe peaches they were sweet and the milk and honey flowedI was only following instructions when the judge sent me down the roadWith your subpoenaWhen you cease to exist, then who will you blameI’ve tried my best to love you but I cannot play this gameYour best friend and my worst enemy is one and the sameAngelinaOh, Angelina. Oh, AngelinaThere’s a black Mercedes rollin’ through the combat zoneYour servants are half dead, you’re down to the boneTell me, tall men, where would you like to be overthrownMaybe down in Jerusalem or Argentina?She was stolen from her mother when she was three days oldNow her vengeance has been satisfied and her possessions have been soldHe’s surrounded by God’s angels and she’s wearin’ a blindfoldAnd so are you, AngelinaOh, Angelina. Oh, AngelinaI see pieces of men marching, trying to take heaven by forceI can see the unknown rider, I can see the pale white horseIn God’s truth tell me what you want and you’ll have it of courseJust step into the arenaBeat a path of retreat up them spiral staircasesPass the tree of smoke, pass the angel with four facesBegging God for mercy and weepin’ in unholy placesAngelinaOh, Angelina. Oh, Angelina 1981 ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992231_879.jpg",
			"album": "https://www.bobdylan.com/albums/the-bootleg-series-vol-1-3-rare-and-unreleased-1961-1991/",
			"id": "rr1fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Apple Suckling Tree",
			"lyrics": "Old man sailin’ in a dinghy boatDown thereOld man down is baitin’ a hookOn thereGonna pull man down on a suckling hookGonna pull man into the suckling brookOh yeah!Now, he’s underneath that apple suckling treeOh yeah!Under that apple suckling treeOh yeah!That’s underneath that treeThere’s gonna be just you and meUnderneath that apple suckling treeOh yeah!I push him back and I stand in lineOh yeah!Then I hush my Sadie and stand in lineOh yeah!Then I hush my Sadie and stand in lineI get on board in two-eyed timeOh yeah!Under that apple suckling treeOh yeah!Under that apple suckling treeOh yeah!Underneath that treeThere’s just gonna be you and meUnderneath that apple suckling treeOh yeah!Now, who’s on the table, who’s to tell me?Oh yeah!Who’s on the table, who’s to tell me?Oh yeah!Who should I tell, oh, who should I tell?The forty-nine of you like bats out of hellOh underneath that old apple suckling tree1969 by Dwarf Music; renewed 1997 by Dwarf Music",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/4777152_326.jpg",
			"album": "https://www.bobdylan.com/albums/basement-tapes/",
			"id": "343fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		},
		{
			"song": "Are You Ready?",
			"lyrics": "Are you ready, are you ready?Are you ready, are you ready?Are you ready to meet Jesus?Are you where you ought to be?Will He know you when He sees youOr will He say, “Depart from Me”?Are you ready, hope you’re readyAm I ready, am I ready?Am I ready, am I ready?Am I ready to lay down my life for the brethrenAnd to take up my cross?Have I surrendered to the will of GodOr am I still acting like the boss?Am I ready, hope I’m readyWhen destruction cometh swiftlyAnd there’s no time to say a fare-thee-wellHave you decided whether you want to beIn heaven or in hell?Are you ready, are you ready?Have you got some unfinished business?Is there something holding you back?Are you thinking for yourselfOr are you following the pack?Are you ready, hope you’re readyAre you ready?Are you ready for the judgment?Are you ready for that terrible swift sword?Are you ready for Armageddon?Are you ready for the day of the Lord?Are you ready, I hope you’re ready 1980 ",
			"cover": "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992207_180.jpg",
			"album": "https://www.bobdylan.com/albums/saved/",
			"id": "545fe0c-fe4c-4195-93dc-b7f21b22f7e1"
		}
	]
}

```


### Random bob dylan's sentence


`````
https://loremdylan-production.up.railway.app/api/v1/sentence
`````
This will return a random object with the following props every time we hit that url.

```
{
	"sentence": "I’ll sing you a song, ain’t very long’Bout an old man who never done wrong. How he died nobody can say. They ...",
	"song": "Man on the Street",
	"album": "https://www.bobdylan.com/albums/the-bootleg-series-vol-1-3-rare-and-unreleased-1961-1991/",
	"id": "545fe0c-fe4c-4195-93dc-b7f21b22f7e1"
	
}
```


## Webscraping

To get the dylan's raw data I did some webscraping on bob dylan's official website at [www.bobdylan.com](https://www.bobdylan.com/).

If you run ```npm run dylanToJson``` on the console you could get updated content from [bobdylan songs page](https://www.bobdylan.com/songs/). This command will store the data in a json file inside ```data``` folder.


![lista de canicones](songsPage.png)