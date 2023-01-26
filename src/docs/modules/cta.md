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

## Call 2 Action {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/cta.njk*{.comments}
**Objeto de configuración**: ***blockCTA***{.vars}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del **macro imageContent** más:

{{ module.spacer(10) }}

- **link**: *String*{.vars} url destino, si no existe se omite agregar el **tag a**
- **text**: *String*{.vars} texto a mostrar

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/cta/cta_text.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockCTA*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black",
&nbsp;&nbsp;&nbsp;&nbsp;width: "auto"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40},
&nbsp;&nbsp;*spacer*: { size: 10 },
&nbsp;&nbsp;*text*: "\*\*Call 2 action\*\*{.h4 .white}",
&nbsp;&nbsp;*link*: "#"
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/cta.njk"** \%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/cta/cta_icon.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockCTA*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black",
&nbsp;&nbsp;&nbsp;&nbsp;width: "auto"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 10 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 15 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_whatsapp-white.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;height: 20,
&nbsp;&nbsp;&nbsp;&nbsp;position: "left",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*Call 2 action\*\*{.h4 .white}",
&nbsp;&nbsp;*link*: "#"
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/cta.njk"** \%\}

{% endcall %}

{% endcall %}