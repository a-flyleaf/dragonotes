---
layout: none

dragons:
- id: 51317268

  dates:
# changed this a bit: w=what, d=date, h=how
    - w: hatch
      d: 2019-04-25
    - w: obtain
      d: 2019-05-08
      h: "found on the Auction&nbsp;House"
    - d: 2021-01-21
      h: "breed change"
    - d: 2021-10-16
      g: [falcon,trail,opal]
    - w: hibern
#      d: 2021-10-16 [same as above]
      h: "hibernating"

# EVERYTHING BELOW THIS is unique to the fandragon bio

  fullnm: Serena Johnson
  clr: "#ff9600"
  oc: The Firebird Effect
  tagline: Not dying yet.

  item: sunspot clouddancer hide
# does NOT use the color id as described in `colors.yml` because the actual urls are different thanks to the color wheel expanson lmao.
  search:
    body: 48
    wings: 48
    tert: 8

  txt1: |-
    Somewhat lost, but tries to get along and help out. Major soft spot for reckless youth and/or catastrophe victims; would defend them with her life. Seems convinced she can’t actually die.
  txt2: |-
    Complicated relationship with [Malva](https://www1.flightrising.com/dragon/97666606). Has run into [Shauna](https://www1.flightrising.com/dragon/22012254) and [Calem](https://www1.flightrising.com/dragon/48944088) but doesn’t stay close to either. Watches [this youth](https://www1.flightrising.com/dragon/50340433) like an unsolicited (but not strictly unwelcome) guardian.

  og-url: "https://www1.flightrising.com/dgen/preview/dragon?age=1&body=48&bodygene=1&breed=11&element=11&eyetype=0&gender=1&tert=8&tertgene=5&winggene=9&wings=48&auth=66662affe5d2134afc265183338bd5e32c865654&dummyext=prev.png"
  og-img: "https://www1.flightrising.com/dgen/preview/dragon?age=1&body=48&bodygene=1&breed=11&element=11&eyetype=0&gender=1&tert=8&tertgene=5&winggene=9&wings=48&auth=66662affe5d2134afc265183338bd5e32c865654&dummyext=prev.png"
---
<style>
	textarea{width:100%; min-height:30.5em; resize:vertical; font-family:verdana,sans-serif; font-size:12px;}
	h2{margin-bottom:-.5em;}
</style>

# automatic bio generator
futzing around atm, using [Serena](https://www1.flightrising.com/dragon/51317268) as a guinea pig. can't use the <code>clr</code> variable within the link-replacement so it's <span style="color:#00ff00">eye-searing green</span> as an impossible-to-miss placeholder

{%for d in page.dragons%}
## {{d.fullnm}}
replace <code>#00FF00</code> with <code>{{d.clr}}</code>
<textarea>
[center]

{%if d.img%}[img alt=""]{{d.img}}[/img]{%else%}[img]TBA[/img]{%endif%}

[size=7][color=#484848][b]{{d.fullnm}}[/b][/color][/size]

[size=6][url=https://a-flyleaf.github.io/tfe][color={{d.clr}}][i]{{d.oc}}[/i][/color][/url][/size]


[size=4][color=#484848]{{d.tagline}}[/color][/size][/center]



-----

[columns][center]

[item={{d.item}}]
[url=https://www1.flightrising.com/search/dragons?exalted=&body={{d.search.body}}&wings={{d.search.wings}}&tert={{d.search.tert}}&sort=id_asc][emoji=palette][/url] [url=https://www1.flightrising.com/search/forums?term={{d.id}}&sort=recent][emoji=comment][/url][/center][nextcol]
{%for dt in d.dates%}{%if dt.h or dt.g%}[font=monospace]{%if dt.d%}{{dt.d|date:"%F"|replace:"-","/"}} {%else%}[color=transparent]...........[/color]{%endif%}[/font]{%for g in dt.g%}+{{g}} {%endfor%}{{dt.h|replace:"<br>","
[font=monospace][color=transparent]...........[/color][/font]"|replace:"hibernating","[i]hibernating[/i]"}}{%else%}{%endif%}
{%endfor%}
[columns][font=monospace][color=transparent]..[/color][/font][nextcol][list][*]{{d.txt1|markdownify|replace:'<a href="','[url='|replace:'">','][color=#00FF00]'|replace:'</a>','[/color][/url]'|remove:"<p>"|remove:"</p>"}}
[*]{{d.txt2|markdownify|replace:'<a href="','[url='|replace:'">','][color=#00FF00]'|replace:'</a>','[/color][/url]'|remove:"<p>"|remove:"</p>"}}[/list][/columns][/columns]

[center][url={{d.og-url}}][img]{{d.og-img}}[/img][/url][/center]

[right][sub][i][color=#eee]bio v3 (2020/06/25): dragonsona edition (11/12), auto-updated 2024/09/10; lore based on notes from 2019/06/10[/color][/i][/sub][/right]
</textarea>
{%endfor%}