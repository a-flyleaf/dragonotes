---
layout: default2
title: shameless collection of shiny things

css: "#badges{margin-top:1em; text-align:center; display:flex; flex-wrap:wrap;} figure{width:46%; display:inline-block; background:#efefef; margin:2%; padding:.5em; border-radius:5px;} figure img{padding-top:.5em;} figure p{margin:.25em 0;} .b-title{line-height:1.15;} .b-info{font-size:.85em; margin-bottom:.5em;} .b-info p:last-child{margin-top:.5em;} @media only screen and (min-width:55em) {figure{max-width:30%; margin:1.5%;}}"

badges:
  - url: drw/3367491/1#post_3367491
    title: Bionic Birdwatching (Lightning PB)
    date: 2024-10-06
    goal: sent 750 levels
    img:
      - url: https://i.postimg.cc/CKyXrK3P/bird.png
        artist: TacoTequila#497217

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

- Ordered chronologically by date earned, which is based on the event's end date.
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
			<p>{{badge.goal}}</p>
		</div>
	</figcaption>
</figure>{%endfor%}</div>