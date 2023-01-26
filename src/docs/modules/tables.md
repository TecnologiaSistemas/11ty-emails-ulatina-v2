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

## Tablas {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/table.njk*{.comments}
**Objeto de configuración**: ***blockTable***{.vars}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***macro table*** más:

{{ module.spacer(10) }}

- **rowsClass**: *String*{.vars} clase css para identificar a el elemento o agregar estilos en línea
- **rows**: *Array*{.vars} arreglo bi-dimensional para indicar el número de renglones y columnas, la primer dimensión de arreglo contiene el arreglo con el objeto de contenido y confguración de la celda, la segunda dimensión indica el tipo de contenido y características de la celda. Valores aceptados en el objeto del arreglo de la segunda dimensión:
  - **column** *Object*{.vars}
    - ***config***: *Object*{.vars} opciones de configuración de la celda, ver *macro column* para las opciones
    {.ul-list}

  - **gutter**: *Object*{.vars} genera una celda vacia para separar el contenido, ver *macro gutter* para las opciones
  - **text** *Object*{.vars}
    - ***config***: *Object*{.vars} opciones de configuración de la celda, ver *macro column* para las opciones
    - ***content***: *String*{.vars} texto, markdown o html a mostrar
    {.ul-list}

  - **image** *Object*{.vars}
    - ***config***: *Object*{.vars} opciones de configuración de la celda, ver *macro column* para las opciones
    - ***content***: *Object*{.vars} ver *macro image* para las opciones
    {.ul-list}

  - **cta** *Object*{.vars}
    - ***config***: *Object*{.vars} opciones de configuración de la celda, ver *macro column* para las opciones
    - ***content***: *Object*{.vars} ver *módulo CTA* para las opciones
    {.ul-list}

  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/tables/example.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockTable*** = {
&nbsp;&nbsp;***macro table options***,
&nbsp;&nbsp;***rows*** *Array*[
&nbsp;&nbsp;&nbsp;&nbsp;*Array*[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Object* {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*type ("image", "text", "gutter", "column", "cta")* {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***config***: *Object*,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***content***: *Object, Number or String*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% **set *blockTable*** = {
&nbsp;&nbsp;*class*: "generic-table",
&nbsp;&nbsp;*bgcolor*: "red",
&nbsp;&nbsp;*rowsClass*: "generic-row",
&nbsp;&nbsp;*rows*: [
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ column: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colspan: 5,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 40
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { top: { size: 5 } }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 10 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: { valign: "top" },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ cta: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align: "center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "border-rounded",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "black",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: "auto"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutters: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_whatsapp-white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 30,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: "left",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: "\*\*Call 2 action\*\*{.h4 .white}",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;link: "#"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: { colspan: 5 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: '____{noshade size="1" width="100%" style="border-top:1px solid white;"}'
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ column: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colspan: 5,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/table.njk"** \%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/tables/border_bottom.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockTable*** = {
&nbsp;&nbsp;*class*: "generic-header",
&nbsp;&nbsp;*bgcolor*: "red",
&nbsp;&nbsp;*rowsClass*: "generic-row",
&nbsp;&nbsp;*rows*: [
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: { colspan: 5 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: '&lt;hr noshade size="1" width="100%" style="border-top:1px solid white;"&gt;'
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/table.njk"** \%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/tables/blank_bottom.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockTable*** = {
&nbsp;&nbsp;*class*: "generic-header",
&nbsp;&nbsp;*bgcolor*: "red",
&nbsp;&nbsp;*rowsClass*: "generic-row",
&nbsp;&nbsp;*rows*: [
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ column: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colspan: 5,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 10,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "white"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/table.njk"** \%\}

{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/tables/2_columns_content.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockTable*** = {
&nbsp;&nbsp;*class*: "generic-table",
&nbsp;&nbsp;*bgcolor*: "red",
&nbsp;&nbsp;*rowsClass*: "generic-row",
&nbsp;&nbsp;*rows*: [
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 50 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ column: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colspan: 9,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "orange",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 5
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} }
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 50 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 20 } },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "\*\*Texto en columna\*\* {.text .white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ gutter: { width: 30 } }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;]
} \%\}

{{ module.spacer(20) }}

\{\% ***include* "modules/table.njk"** \%\}

{% endcall %}

{% endcall %}