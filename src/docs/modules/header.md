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

## Header {.h2}

{{ module.spacer(40) }}

{#########################
SOLO TEXTO
##########################}

### **Solo texto** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/modules/header/text.njk*{.comments}
**Objeto de configuración**: ***blockHeader***{.vars}
**Extiende**: */src/_includes/components/header.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **text**: *String*{.vars} texto a mostrar

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/header/text.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;*class*: "header",
&nbsp;&nbsp;&nbsp;&nbsp;*bgcolor*: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*text*: "\[\*\*Variable Text\*\*\]\(#\){.white .decoration-none} {.h3 .d-center}"
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
SOLO LOGO
##########################}

### **Imagen** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/modules/header/image-text.njk*{.comments}
**Objeto de configuración**: ***blockHeader***{.vars}
**Extiende**: */src/_includes/components/header.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars} ver ***macro image*** para las opciones

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/header/image-left.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(60) }}

{% include "docs/modules/header/image-center.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(60) }}

{% include "docs/modules/header/image-right.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-right" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;}
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
LOGO Y TEXTO
##########################}

### **Imagen y texto** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/modules/header/image-text.njk*{.comments}
**Objeto de configuración**: ***blockHeader***{.vars}
**Extiende**: */src/_includes/components/header.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars} ver ***macro image*** para las opciones
- **textPosition**: *String*{.vars} indica la posición del text a mostrar, valores aceptados "left" o "right", *default 'left'*{.gray}
- **text**: *String*{.vars} texto a mostrar
- **responsive**: *Boolean*{.vars} *true* para colocar la etiqueta *th* y la clase *column* para hacer responsivo el header, *default ‘false’*{,gray}
- **mobileSpacer**: *String*{.vars} clase css para indicar el espacio que solo se muestra en móviles cuando *responsive = true*, *default ''*{,gray}
{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/header/image-text-left.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-right m-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*textPosition*: "left",
&nbsp;&nbsp;*text*: "\*\*11ty emails V2\*\* {.h5 .white .d-left .m-center}",
&nbsp;&nbsp;*responsive*: true,
&nbsp;&nbsp;*mobileSpacer*: "m-br-medium"
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(60) }}

{% include "docs/modules/header/image-text-right.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "m-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*11ty emails V2\*\* {.h5 .white .d-right .m-center}",
&nbsp;&nbsp;*responsive*: true,
&nbsp;&nbsp;*mobileSpacer*: "m-br-medium"
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
LOGO, TEXTO E ICONO
##########################}

### **Imagen, texto e icono** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/modules/header/image-icon-text.njk*{.comments}
**Objeto de configuración**: ***blockHeader***{.vars}
**Extiende**: */src/_includes/components/header.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars} ver ***macro image*** para las opciones
- **textPosition**: *String*{.vars} indica la posición del text a mostrar, valores aceptados "left" o "right", *default ''*{.gray} 
- **text**: *String*{.vars} texto a mostrar
- **icon**: *Object*{.vars} ver ***macro image*** para las opciones
  - **gutter**: *Boolean/Object*{.vars} ver ***macro gutter*** para las opciones y componentes para implementación específicas
  {.ul-list}

- **responsive**: *Boolean*{.vars} *true* para colocar la etiqueta th y la clase column para hacer responsivo el header, *default ‘false’*{,gray}
- **mobileSpacer**: *String*{.vars} clase css para indicar el espacio que solo se muestra en móviles cuando *responsive = true*, *default ''*{,gray}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/header/image-icon-left.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-right m-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*icon*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 24,
&nbsp;&nbsp;&nbsp;&nbsp;height: 24,
&nbsp;&nbsp;&nbsp;&nbsp;gutter: { width: 10 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*textPosition*: "left",
&nbsp;&nbsp;*text*: "\[11ty emails V2\]\(#\) {.white .d-left .m-center}",
&nbsp;&nbsp;*responsive*: true,
&nbsp;&nbsp;*mobileSpacer*: "m-br-medium"
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-icon-text.njk"** \%\}
  
{% endcall %}

{{ module.spacer(60) }}

{% include "docs/modules/header/image-icon-right.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "header",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 20 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-right m-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*icon*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 24,
&nbsp;&nbsp;&nbsp;&nbsp;height: 24,
&nbsp;&nbsp;&nbsp;&nbsp;gutter: { width: 10 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\[11ty emails V2\]\(#\) {.white .d-left .m-center}",
&nbsp;&nbsp;*responsive*: true,
&nbsp;&nbsp;*mobileSpacer*: "m-br-medium"
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/header/image-icon-text.njk"** \%\}
  
{% endcall %}

{% endcall %}