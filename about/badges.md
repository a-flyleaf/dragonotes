---
layout: default2
title: shameless collection of shiny things

css: "#badges{margin-top:1em; text-align:center; display:flex; flex-wrap:wrap;} figure{width:46%; display:inline-block; background:#efefef; margin:2%; padding:.5em; border-radius:5px;} figure img{padding-top:.5em;} figure p{margin:.25em 0;} .b-title{line-height:1.15;} .b-info{font-size:.85em; margin-bottom:.5em;} .b-info p:last-child{margin-top:.5em;} @media only screen and (min-width:55em) {figure{max-width:30%; margin:1.5%;}}"

badges:
  - url: drw/3367491/1#post_3367491
    title: Bionic Birdwatching (Lightning&nbsp;PB)
    date: 2024-10-05
    goal: sent 750 levels
    img:
      - url: https://i.postimg.cc/CKyXrK3P/bird.png
        artist: TacoTequila#497217
  - url: qnc/3367392/1#post_3367392
    title: Fire Tour Scavenger Hunt
    date: 2024-10-12
    goal: gained 1,000 points
    img:
      - url: https://i.postimg.cc/dkHpcWk6/FR2.png
        artist: AkaPanuka#4907
  - url: fd2/3371209
    title: Riot of Rotcon Raffle
    date: 2024-10-26
    goal: exalted 600 levels
    img:
      - url: https://i.imgur.com/HG8Sbp6.gif
        artist: puq#303478
  - url: fd2/3371153/1#post_3371153
    title: Army of Rot
    date: 2024-10-26
    goal: exalted 1,000 levels
    img:
      - url: https://i.imgur.com/VYcJGel.png
        artist: TheSunTheGodsSaw#35038 (original badge design) & ufology#296565 (recolors)
  - url: fd2/3371283#post_3371283
    title: Goals & Incentives
    date: 
    goal: exalted 50 lvl5s · exalted 25 lvl8s · aged up 10 hatchlings · exalted 5 daily bonuses · hatched 1 fodder nest · raided the AH 5 times
    img:
      - url: https://i.imgur.com/tPk75UP.png
        artist: "[unlisted]"
      - url: https://i.imgur.com/twzPUO7.png
        artist: "[unlisted]"
      - url: https://i.imgur.com/kp9ZWEH.png
        artist: "[unlisted]"
      - url: https://i.imgur.com/aq1amo0.png
        artist: "[unlisted]"
      - url: https://i.imgur.com/GFDZaVS.png
        artist: "[unlisted]"
      - url: https://i.imgur.com/ekwWttT.png
        artist: "[unlisted]"
  - url: drw/3371968#post_3371968
    title: Nature Public&nbsp;Buy
    date: 2024-11-02
    goal: sent 750 levels
    img:
      - url: https://i.imgur.com/WQw4hWi.png
        artist: Kieren#665871
  - url: qnc/3374188#post_3374188
    title: Astronaut Academy
    date: 2024-11-08
    goal: completed word&nbsp;search & maze puzzles
    img:
      - url: https://i.imgur.com/6qmnRZ1.png
        artist: Kywren#539771
      - url: https://i.imgur.com/NYqePvv.png
        artist: Kywren#539771
  - url: raf/3375250#post_3375250
    title: (Shadow) Veilaversary Raffle
    date: 2042-11-16
    goal: sent 1,000 levels
    img:
      - url: https://orig13.deviantart.net/81fa/f/2017/210/d/d/p4_by_empressfiraya-dbi65t6.gif
        artist: AlienaCordis#144520
  - url: raf/3377536/1#post_3377536
    title: Earth Raffle
    date: 2024-11-23
    goal: sent 350 levels
    img:
      - url: https://i.imgur.com/Ya9VQDQ.png
#           "archaeoraptor that's the monday batch" flamin lego go brr
        artist: "Vendrus#4101 and/or large#379282"


#  - url: 
#    title: 
#    date: 
#    goal: 
#    img:
#      - url: 
#        artist: 
---
Picks up where [the previous page]({%include url.html%}/v1/about/badges) left off, kind of. That page was most actively updated between 2015 and early 2022; I'm not sure if I just didn't *do* badge-related stuff between then and the following, or if I did but didn't track it :I

Oh well. As of October&nbsp;2024, here we go again...!

- Ordered chronologically by date earned, which is based on the event's end date (typically a Saturday).
- Images have **not** been reuploaded and may break later.
- Artist credit in alt text, also visible on hover.
- If I earned multiple badges, I usually grab the one that gets me the most bragging rights (e.g. between exalting 1 dragon per day or 100 dragons total, I'll clip to the 100).

<!-- not relevant atm
- Badges link to forum threads, some of which aren't visible to those outside the Plague flight. If the **title** is clickable, *then* it's publicly-viewable.
-->

<div id="badges" class="small">{%for badge in page.badges%}<figure>
	<a href="https://www1.flightrising.com/forums/{{badge.url}}">{%for img in badge.img%}<img src="{{img.url}}" alt="badge by {{img.artist}}" title="by {{img.artist}}"/>{%endfor%}</a>
	<figcaption>
		<p class="b-title">{%unless badge.url contains "fl2" or badge.url contains "fd2"%}<a href="https://www1.flightrising.com/forums/{{badge.url}}">{%endunless%}<b>{{badge.title}}</b>{%unless badge.url contains "fl2" or badge.url contains "fd2"%}</a>{%endunless%}</p>
		<div class="b-info">
			<p>{{badge.date|date:"%B %-d, %Y"}}</p>
			<p><i>{{badge.goal}}</i></p>
		</div>
	</figcaption>
</figure>{%endfor%}</div>