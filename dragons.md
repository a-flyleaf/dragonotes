---
layout: none
---
<style>.opt{color:#808080;}</style>

{%for drg in site.data.dragons%}<ul>
	<li>id: <a href="https://www1.flightrising.com/dragon/{{drg.id}}" class="fr">{{drg.id}}</a></li>
	<li>name: {{drg.nm}}</li>
	<li>sex: {{drg.sex}}</li>
	{%if drg.age%}<li class="opt">is permabab</li>{%endif%}
	<li>breed: {{drg.breed}}</li>
	{%if drg.gen%}<li class="opt">is G1</li>{%endif%}
	{%if drg.bred%}<li class="opt">offspring:
		<ul>{%for o in drg.bred%}<li>id: {{o.id}} | nm: {{o.nm}}</li>{%endfor%}</ul></li>{%endif%}
	<li>lvl: {%if drg.lvl%}<span class="opt">{{drg.lvl}}{%if drg.stats%} ({{drg.stats}}){%endif%}</span>{%else%}1{%endif%}</li>
	<li>measurements:
		<ul><li>length: {{drg.length}}m</li>
		<li>wingspan: {{drg.wings}}m</li>
		<li>weight: {{drg.weight}}kg</li></ul></li>
	<li>genes:
		<ul><li>primary: {{drg.genes.pri.clr}} {{drg.genes.pri.gn}}</li>
		<li>secondary: {{drg.genes.sec.clr}} {{drg.genes.sec.gn}}</li>
		<li>tertiary: {{drg.genes.tert.clr}} {{drg.genes.tert.gn}}</li>
		<li>eyes: {{drg.element}} {{drg.genes.eye}}</li></ul></li>
	<li>dates:
		<ul><li>hatchdate: {{drg.dates.hatch}}</li>
		{%if drg.dates.obtain%}<li class="opt">obtained: {{drg.dates.obtain}}</li>{%endif%}
		{%if drg.dates.genes%}<li class="opt">genes:
			<ul>{%for gne in drg.dates.genes%}<li>{{gne.dt}}: {{gne.gn}}</li>{%endfor%}</ul></li>{%endif%}
		<li>hibernating: {{drg.hibern}}</li></ul></li>
	{%if drg.has%}<li class="opt">has:<ul>
		{%if drg.has.familiar%}<li>familiar: {{drg.has.familiar}}</li>{%endif%}
		{%if drg.breed=='ancients'%}{%else%}<li>apparel: {%if drg.has.apparel%}yes{%else%}no{%endif%}</li>{%endif%}
		<li>accent: {%if drg.has.apparel%}yes{%else%}no{%endif%}</li>
		<li>bio: {%if drg.has.bio%}yes{%else%}no{%endif%}</li>
		<li>art: {%if drg.has.art%}yes{%else%}no{%endif%}</li>
		<li>vista: {%if drg.has.vista%}yes{%else%}no{%endif%}</li>
		<li>scene: {%if drg.has.scene%}yes{%else%}no{%endif%}</li>
		{%if drg.has.broadcast%}<li>broadcast: {{drg.has.broadcast}}</li>{%endif%}
	</ul></li>{%endif%}<!--/has-->
	<li>category: <ul>{%for ct in drg.cat%}<li>{{ct}}</li>{%endfor%}</ul></li>
</ul>{%endfor%}