---
layout: page
title: "Parts of Speech"
date: 2013-01-06 22:12
sharing: true
footer: true
---

<ul>
{% for item in site.categories %}
    <li><a href="/parts-of-speech/{{ item[0] }}/">{{ item[0] | capitalize }}</a> [ {{ item[1].size }} ]</li>
{% endfor %}
</ul>
