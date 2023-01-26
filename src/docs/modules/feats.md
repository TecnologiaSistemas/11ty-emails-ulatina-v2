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

## Características {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/features.njk*{.comments}
**Objeto de configuración**: ***blockFeatures***{.vars}
**Extiende**: */src/_includes/components/list.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente list*** más:

{{ module.spacer(10) }}

- **type**: *String*{.vars} indica el tipo de acomodo ***vertical (list)*** u ***horizontal (column)***

{.ul-list}

{{ module.spacer(10) }}

***NOTA:*** La opción *responsive* se anula en este módulo.

{{ module.spacer(30) }}

#### **Lista** {.h5}

{{ module.spacer(10) }}

{% include "docs/modules/feats/lista.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockFeatures*** = {
&nbsp;&nbsp;*type*: "list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 10 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "image",
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: { valign: "top" },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: { valign: "top" }
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;spacer: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: { size: 20 }
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 40
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Lorem ipsum dolor sit amet\*\*
consectetur adipiscing elit. Quisque eget lorem posuere, mollis lacus non, tempus nibh."
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 40
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Lorem ipsum dolor sit amet\*\*
consectetur adipiscing elit. Quisque eget lorem posuere, mollis lacus non, tempus nibh."
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/features.njk"** \%\}

{% endcall %}


{{ module.spacer(80) }}

#### **Columna** {.h5}

{{ module.spacer(10) }}

{% include "docs/modules/feats/columna.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockFeatures*** = {
&nbsp;&nbsp;*type*: "column",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-table",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "image",
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: { align: "center" },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: { align: "center" }
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;spacer: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 80,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 80
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Lorem ipsum dolor sit amet\*\*
consectetur adipiscing elit. Quisque eget lorem posuere, mollis lacus non, tempus nibh. {.white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 80,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 80
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Lorem ipsum dolor sit amet\*\*
consectetur adipiscing elit. Quisque eget lorem posuere, mollis lacus non, tempus nibh. {.white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} %}

{{ module.spacer(20) }}

\{\% ***include* "modules/features.njk"** \%\}

{% endcall %}

{% endcall %}