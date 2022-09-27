---
layout: default2
---
# dragonotes

Notes which are for dragons. Ugly and barest-of-bones for now, since I'm basically trying to start from scratch.

Have a list of posts.

{%assign feed = site.posts|reverse%}
<ul>{%for post in feed%}{%if post.layout=="default2"%}
	<li><b><a href="{{post.url}}">{{post.title}}</a></b></li>
{%endif%}{%endfor%}</ul>

The original version of the site [still exists](v1) but will be gradually reshuffled as I figure stuff out. Yes, this new theme is a tumblr blog clone, specifically of [the theme on my first blog](https://archaeoraptor-archive.tumblr.com/post/127184518325/permafrostimpaler-dohmalores-theme-i-had-a).