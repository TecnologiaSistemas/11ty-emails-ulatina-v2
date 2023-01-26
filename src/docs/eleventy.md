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
  gutters: { width: 40, class: "content-spacing-medium" },
  spacer: { size: 40 }
}) %}

[Inicio](/){.small}

{{ module.spacer(20) }}

## Filtros{.h2}

{{ module.spacer(40) }}

{#########################
ROMAN
##########################}

### **roman** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- Da formato al índice para que se muestre el número cardinal como número romano

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ 6 | ***roman*** \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

*vi*
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
LETTER
##########################}

### **letter** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- Da formato al índice para que se muestre el número cardinal como letra, la que corresponda al alfabeto. Por ejemplo *1* = *a*

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ 6 | ***letter*** \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

*f*
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
TYPE OF
##########################}

### **typeOf** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- Obtiene el tipo de variable a evaluar, *string*{.vars}, *number*{.vars}, *object*{.vars} o *array*{.vars}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ "Seis" | ***typeOf*** \}\}

\{\{ 6 | **t*ypeOf*** \}\}

\{\{ { var : "value" } | ***typeOf*** \}\}

\{\{ [ 1, 2, 3 ] | ***typeOf*** \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

*string*

*number*

*object*

*array*
  
{% endcall %}

{{ module.spacer(80) }}

## Shortcodes{.h2}

{{ module.spacer(40) }}

{#########################
MARKDOWN
##########################}

### **renderMarkDown** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- **content**: *String*{.vars} texto en formato Markdown o HTML

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% ***renderMarkDown*** "# Título H1
&lt;hr &gt;

Párrafo" \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;h1&gt;Título&lt;/h1&gt;
&lt;hr &gt;
&lt;p&gt;Párrafo&lt;/p&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
MARKDOWN FILE
##########################}

### **renderMarkDownFile** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- **file**: *String*{.vars} ruta del archivo *.md* dentro de *src/_content/*

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% ***renderMarkDownFile*** "docs/foo/foo.md" \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;h1&gt;Título&lt;/h1&gt;
&lt;hr &gt;
&lt;p&gt;Párrafo&lt;/p&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
IMAGE
##########################}

### **image** {.h3 .titles}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

- **file**: *String*{.vars} ruta del archivo dentro de *src/*, si la ruta del archivo comimenza con *http* o *htpps* se omite la optimización. **NOTA**: cuando se usa el comando *npm run build* cambia la ruta del archivo usando el valor de *domain* mas el nombre del archivo por loque se recomienda subir los archivos optimizados dentro de la carpeta **public/images** a la ruta definida en *domain*
- **format**: *String*{.vars} formato de salida de la imagen a optimizar, acepta ***jpeg***, ***png*** y ***webp*** aunque esta última no se recomienda para emails
- **quality**: *Number*{.vars} calidad de la optimización
- **width**: *Number*{.vars} ancho de la imagen a utilizar, si el valor no es un número por defecto se optimiza la imagen a 700px de ancho
- **domain**: *String*{.vars} ruta de la carpeta donde se colocarna las imagenes optimizadas, si no se utiliza el comando *npm run build* esta ruta será relativa al proyecto tomando como carpeta de alojamiento */images*
{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% ***image*** "images/image.svg", {
&nbsp;&nbsp;*format*: "jpeg",
&nbsp;&nbsp;*quality*: 50,
&nbsp;&nbsp;*width*: 180,
&nbsp;&nbsp;*domain*: "http://domain.com/folder"
} \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

**Usando *npm run watch***
/images/image_180w.jpg
**Usando *npm run build***
http://domain.com/folder/image_180w.jpg
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% ***image*** "https://images/image.jpg", {
&nbsp;&nbsp;*format*: "png",
&nbsp;&nbsp;*quality*: 50,
&nbsp;&nbsp;*width*: 180,
&nbsp;&nbsp;*domain*: "http://domain.com/folder"
} \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

**Usando *npm run watch* o *npm run build***
https://images/image.jpg
  
{% endcall %}

{% endcall %}