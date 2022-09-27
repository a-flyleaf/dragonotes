---
layout: default2
title: blog
---
{%assign feed = site.posts%}
<ul>{%for post in feed%}{%if post.layout=="default2"%}
	<li><b><a href="{%include url.html%}{{post.url}}">{{post.title}}</a></b></li>
{%endif%}{%endfor%}</ul>