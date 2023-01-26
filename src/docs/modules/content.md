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

## Contenido general {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/general_content.njk*{.comments}
**Objeto de configuración**: ***blockContent***{.vars}
**Extiende**: */src/_includes/componentsbasic_content.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **items**: *Array*{.vars}
  - **table**: *Object* ver ***módulo table*** para las opciones
  - **image**: *Object* ver ***macro image*** para las opciones
    - **outerTable**: *Object*{.vars} agrega una tabla adicional como contenedor del elemento, ver ***nmacro generic*** para las opciones
    {.ul-list}

  - **cta**: *Object* ver ***módulo CTA*** para las opciones
    - **outerTable**: *Object*{.vars} agrega una tabla adicional como contenedor del elemento, ver ***macro generic*** para las opciones
    {.ul-list}

  - **text** ó **title**: *String*{.vars} texto a mostrar, el identificador *title* solo pretende mostrar de forma explicita cuando el texto colocado orresponde a un título
    - **outerTable**: *Object*{.vars} agrega una tabla adicional como contenedor del elemento, ver ***macro generic*** para las opciones
    {.ul-list}

  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/general_content.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockContent*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-hero",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;bottom: { size: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*items*: [
&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "/images/vintage-radio.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: "100%",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;domain: main.imagesUrlProduction
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 30 },
&nbsp;&nbsp;&nbsp;&nbsp;{ title: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outerTable: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:  "\*\*Variable title\*\* {.h3 .white}"
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;{ cta: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outerTable: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "Call 2 action{.white .h4}",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link: "#"
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 40 },
&nbsp;&nbsp;&nbsp;&nbsp;{ title: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outerTable: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Paragraph\*\* \*text\* {.h5 .white}"
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outerTable: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "Lorem ...{.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 30},
&nbsp;&nbsp;&nbsp;&nbsp;{ table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rows: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 40 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 40
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: { size: 5 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 10 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ cta: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align: "center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: "auto"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_whatsapp-white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 30,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: "left",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Call 2 action\*\*{.h4 .white}",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link: "#"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 40 } }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;{ spacer: 10 }
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/general_content.njk"** \%\}
  
{% endcall %}

{% endcall %}