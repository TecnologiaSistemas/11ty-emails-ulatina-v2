---
layout: base_content.njk

tableCode: {
  class: "code",
  table: {
    bgcolor: "#f5f5f5"
  },
  gutters: {
    width: 20
  },
  spacer: {
    size: 20
  }
}
---
{% import "components/functions.njk" as function %}
{% import "components/modules.njk" as module %}

{% include "general/header.njk" %}

{% call module.generic({
  table: { class: "body" },
  gutters: { width: 40 },
  spacer: { size: 40 }
}) %}

[Inicio](/){.small} / [Módulos](/docs/modules/){.small}

{{ module.spacer(20) }}

## Destacados {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/highlights.njk*{.comments}
**Objeto de configuración**: ***blockHighlights***{.vars}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***macro generic*** más:

{{ module.spacer(10) }}

- **text**: *String*{.vars} texto a mostrar

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/highlights.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHighlights*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*text*:  "\*\*Lorem ipsum dolor sit amet, consectetur adipiscing elit\*\* {.h3 .white .d-center}"
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/highlights.njk"** \%\}

{% endcall %}

{% endcall %}