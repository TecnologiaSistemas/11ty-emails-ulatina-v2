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

## Hero Banner {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/hero.njk*{.comments}
**Objeto de configuración**: ***blockHero***{.vars}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **spacer**: *Boolean/Object*{.vars} ver ***macro spacer*** para las opciones
  - **inner**: *Object* ver ***macro spacer*** para las opciones, separación entre elementos del *hero banner*. Solo se muestra si existe mas de un elemento declarado
  {.ul-list}

- **image**: *Object* ver ***macro image*** para las opciones
- **text**: *String*{.vars} texto a mostrar
- **textTable**: *Object*{.vars} ver ***macro generic*** para las opciones. Agrega una tabla como contendor del texto
- **cta**: *Object*{.vars} ver ***modulo cta*** para las opciones

{.ul-list}

{{ module.spacer(30) }}

El orden de los elementos ***image***, ***text*** y ***cta*** dentro del objeto de configuración indican la posición de los elementos mostrados.

{{ module.spacer(30) }}

{% include "docs/modules/hero/image_tag.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHero*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-hero",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;inner: { size: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;bottom: { size: 40 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*textTable*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: true,
&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "/images/vintage-radio.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;width: "100%",
&nbsp;&nbsp;&nbsp;&nbsp;domain: main.imagesUrlProduction
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*Variable text\*\* {.h3 .white .d-center}",
&nbsp;&nbsp;*cta*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align: "center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40},
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;text: "**Call 2 action** {.h4 .white}",
&nbsp;&nbsp;&nbsp;&nbsp;link: "#"
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/hero.njk"**\%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/hero/image_tag_2.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHero*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-hero",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;inner: { size: 40 },
&nbsp;&nbsp;&nbsp;&nbsp;size: 40
&nbsp;&nbsp;},
&nbsp;&nbsp;*textTable*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: true,
&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*Variable text\*\* {.h3 .white .d-center}",
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "/images/vintage-radio.jpg",
&nbsp;&nbsp;&nbsp;&nbsp;width: "100%",
&nbsp;&nbsp;&nbsp;&nbsp;domain: main.imagesUrlProduction
&nbsp;&nbsp;},
&nbsp;&nbsp;*cta*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align: "center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;gutters: { width: 40},
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;text: "**Call 2 action** {.h4 .white}",
&nbsp;&nbsp;&nbsp;&nbsp;link: "#"
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/hero.njk"**\%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/hero/image_css.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHero*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "hero-aol"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;top: { size: 120 },
&nbsp;&nbsp;&nbsp;&nbsp;bottom: { size: 240 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*¿Quieres obtener tu insignia? Comunícate con nosotros.\*\*\{.h3 .white .d-center\}
\
\[Call 2 Action\]\(#\)\{.button-big\} \{.d-center\}"
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/hero.njk"**\%\}

{{ module.spacer(30) }}

##### SCSS{.h5}

Estilos declarados en el archivo */src/css/styles.scss*

{{ module.spacer(20) }}

.hero-aol {
&nbsp;&nbsp;background-color: #000000;
&nbsp;&nbsp;background-image: url("../../../images/vintage-radio-bg.jpg");
&nbsp;&nbsp;background-repeat: no-repeat;
&nbsp;&nbsp;background-position: center;
&nbsp;&nbsp;background-size: cover;
}

{{ module.spacer(10) }}

.button-big {
&nbsp;&nbsp;background-color: #ff5900;
&nbsp;&nbsp;border-radius: 8px;
&nbsp;&nbsp;display: inline-block;
&nbsp;&nbsp;color: #ffffff;
&nbsp;&nbsp;margin-top: 30px;
&nbsp;&nbsp;padding: 10px 40px;
&nbsp;&nbsp;font-size: 24px;
&nbsp;&nbsp;font-weight: bold;
&nbsp;&nbsp;line-height: 34px;
&nbsp;&nbsp;text-decoration: none;
}
  
{% endcall %}

{% endcall %}