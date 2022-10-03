---
layout: default2
title: posts tagged “lair revival”
---
I need to figure out a way to automate tag pages but for now have this list.

{%assign feed = site.posts|reverse%}
<ul>{%for post in feed%}{%if post.tags contains "lair revival"%}
	<li><b><a href="{%include url.html%}{{post.url}}">{{post.title}}</a></b></li>
{%endif%}{%endfor%}</ul>