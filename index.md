---
layout: default2
---
Notes which are for dragons. Barest-of-bones for now, and effectively a blog; recent posts below.

{%assign feed = site.posts|reverse%}
<ul>{%for post in feed%}{%if post.layout=="default2"%}
	<li><b><a href="{%include url.html%}{{post.url}}">{{post.title}}</a></b></li>
{%endif%}{%endfor%}</ul>

The original version of this site [still exists](v1) but will be gradually reshuffled as I figure stuff out.

## credits
Colors largely picked or modified from Flight Rising's official site palette. Current layout is a tumblr blog lookalike, specifically of [the theme on my first blog](https://archaeoraptor-archive.tumblr.com/post/127184518325/permafrostimpaler-dohmalores-theme-i-had-a), with some additional design cues from [Flight Rising forum posts](https://www1.flightrising.com/forums).

<!--put about page link in "sidebar"/site desc, maybe add header image?, and figure out what to do with the index here-->