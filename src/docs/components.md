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

[Inicio](/){.small}

{{ module.spacer(20) }}

## Componentes {.h2}

{{ module.spacer(40) }}

{#########################
GENERAL
##########################}

### **General Content** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/basic_content.njk*{.comments}
**Objeto de configuración**: ***blockContent***{.vars}
  
{{ module.spacer(20) }}

#### **Bloques a extender** {.h4}

{{ module.spacer(10) }}

- **topRow**{.blocks}
- **beforeColumn**{.blocks}
- **contentColumn**{.blocks}
  - **column**{.blocks}
  {.ul-list}

- **afterColumn**{.blocks}
- **bottomRow**{.blocks}

{.ul-list}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

- **table**: *Object*{.vars} ver ***macro table*** para las opciones
- **gutters**: *Boolean/Object*{.vars} ver ***macro gutter*** para las opciones
  - **left**: *Object*{.vars} ver ***macro gutter** para las opciones, solo aplica para la columna izquierda y sobreescribe las opciones generales
  - **right**: *Object*{.vars} ver ***macro gutter*** para las opciones, solo aplica para la columna derecha y sobreescribe las opciones generales
  {.ul-list}

- **spacer**: *Boolean/Object*{.vars} ver ***macro spacer*** para las opciones
  - **top**: *Object* ver ***macro spacer*** para las opciones, solo aplica colocar un espacio en la parte superior y sobreescribe las opciones generales
  - **bottom**: *Object* ver ***macro spacer*** para las opciones, solo aplica colocar un espacio en la parte inferior y sobreescribe las opciones generales
  {.ul-list}

- **responsive**: *Boolean*{.vars} *true* para colocar la etiqueta *th* y la clase *column* para hacer ***responsivo el bloque column***, *default 'false'*{.gray}
{.ul-list}

{{ module.spacer(30) }}

{% include "docs/components/basic_content.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockContent*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-table",
&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: { size: 40 }
} \%\}

{{ module.spacer(15) }}

\{\% ***extends* "components/basic_content.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *beforeColumn*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *contentColumn*** \%\}
&nbsp;&nbsp;\{\% **block *column*** \%\}\{\% **endblock** \%\}
\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *afterColumn*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(15) }}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block topRow --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block beforeColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block contentColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td o th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block column --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td o th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- endblock contentColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block afterColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block bottomRow --\>***{.blocks}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
HEADER
##########################}

### **Header** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/header.njk*{.comments}
**Objeto de configuración**: ***blockHeader***{.vars}
**Extiende:**: */src/_includes/components/basic_content.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Bloques a extender** {.h4}

{{ module.spacer(10) }}

- **topRow**{.blocks}
- **beforeColumn**{.blocks}
- **afterColumn**{.blocks}
- **bottomRow**{.blocks}

{.ul-list}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content***, más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars}
  - **url**: *String*{.vars} URL de la imagen a insertar
  - **width**: *Number*{.vars} ancho de la imagen, *default '100%'*{.gray}
  - **height**: *Number*{.vars} alto de la imagen
  - **alt**: *String*{.vars} texto alterno para describir a la imagen
  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/components/header.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockHeader*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-table",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;table: { class: "d-center" },
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 10 },
&nbsp;&nbsp;*responsive*: true
} \%\}

{{ module.spacer(15) }}

\{\% ***extends* "components/header.njk"** \%\}

{{ module.spacer(15) }}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *beforeColumn*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *afterColumn*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block topRow --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block beforeColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th ***class***="column"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*\{\{ **Logo image** \}\}*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block afterColumn --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block bottomRow --\>***{.blocks}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
FOOTER
##########################}

### **footer** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/footer.njk*{.comments}
**Objeto de configuración**: ***blockFooter***{.vars}
**Extiende:**: */src/_includes/components/basic_content.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Bloques a extender** {.h4}

{{ module.spacer(10) }}

- **topRow**{.blocks}
- **column**{.blocks}
- **bottomRow**{.blocks}

{.ul-list}

{{ module.spacer(20) }}

#### **Parametros** *Object* {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content***

{{ module.spacer(30) }}

{% include "docs/components/footer.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockFooter*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-table",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: { size: 30 }
} \%\}

{{ module.spacer(15) }}

\{\% **extends* "components/footer.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *column*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}

{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block topRow --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block column --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block bottomRow --\>***{.blocks}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
LIST
##########################}

### **list** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/list.njk*{.comments}
**Objeto de configuración**: ***blockList***{.vars}
**Extiende:**: */src/_includes/components/basic_content.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Bloques a extender** {.h4}

{{ module.spacer(10) }}

- **topRow**{.blocks}
- **bottomRow**{.blocks}

{.ul-list}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **items**: *Object*{.vars} objeto con la colección de datos y configuración de la lista
  - **type**: *String*{.vars} indica el tipo de lista a mostrar, valores aceptados *md* para archivos markdown, *html* para usar el tag *&lt;ul /&gt;*, *image* para mostrar una imagen como índice, *letter* para mostrar letras como índice, *number* para mostrar números como índice, *roman* para mostrar números romanos como índice
  - **spacer**: *Object*{.vars} ver ***macro spacer*** para las opciones, este se aplica solo cuando el html como resultado es una tabla. Se aplica en cada celda del renglón
  - **content**: *Array*{.vars} arreglo de objetos con el texto a mostrar en la lista
    - **file**: *String*{.vars} ruta del archivo dentro de *src/_content* cuando el tipo (*type*) es *md*
    - **image**: *Object*{.vars} ver ***macro image*** para las opciones cuando el contenido sea imagen
    - **text**: *String*{.vars} texto a mostrar, se omite si el tipo (*type*) es *md*
    {.ul-list}

  - **attributes**: *Object*{.vars}
    - **class**: *String*{.vars} clase css a aplicar en cada elemento de la lista
    - **index**: *Object*{.vars} valores para el índice cuando se usa el tag *&lt;table /&gt;*, ver *column* para las opciones
    {.ul-list}
    
      - **align**: *String*
      - **class**: *String*
      - **valign**: *String*
      - **width**: *Number*
      - **prepend**: *String*{.vars} texto que se añade al principio del índice
      - **append**: *String*{.vars} texto que se añade al final del 
      {.ul-list}

    - **content**: *Object*{.vars} valores para el contenido cuando se usa el tag *&lt;table /&gt;*, ver *column* para las opciones
      - **align**: *String*
      - **class**: *String*
      - **valign**: *String*
      {.ul-list}

    {.ul-list}

  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/components/list_bullets.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: HTML Tag List{.h5}

{{ module.spacer(20) }}

\{\% **set *blockList*** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: { 
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "li-list"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item1 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item2 }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***class***="list-aol" ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0" ***bgcolor***="#000000"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block topRow --\>***{.blocks}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul ***class***="ul-list"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li ***class***="li-list"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;JavaScript alternative to Jekyll&lt;/em&gt;.&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li ***class***="li-list"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Eleventy-specific terminology&lt;/strong&gt;&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul ***class***="ul-list"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Template&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="30" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\<\!-- block bottomRow --\>***{.blocks}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/components/list_numbers.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: Numbers (HTML Table){.h5}

{{ module.spacer(20) }}

\{\% **set blockList** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "number",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "li-list",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valign: "top",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 15
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item1 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item2 }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/components/list_letters.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: Letters (HTML Table){.h5}

{{ module.spacer(20) }}

\{\% **set blockList** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "letter",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "li-list",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valign: "top",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 15
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item1 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item2 }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/components/list_roman.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: Roman (HTML Table){.h5}

{{ module.spacer(20) }}

\{\% **set blockList** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "roman",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "li-list",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valign: "top",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 15
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item1 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ text: items.item2 }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/components/list_images.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: Image (HTML Table){.h5}

{{ module.spacer(20) }}

\{\% **set blockList** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: {
&nbsp;&nbsp;&nbsp;&nbsp;width: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { width: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "image",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;attributes: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "li-list",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align: "center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valign: "top",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 15
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 60,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 60
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: items.item1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../icon_m_whatsapp-orange.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 24,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 24
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: items.item2
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/components/list_md.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks: MD File (HTML Tag List){.h5}

{{ module.spacer(20) }}

\{\% **set blockList** = {
&nbsp;&nbsp;*class*: "ul-list",
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "list-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: { size: 30 },
&nbsp;&nbsp;*items*: {
&nbsp;&nbsp;&nbsp;&nbsp;type: "md",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;attributes: { class: "li-list" },
&nbsp;&nbsp;&nbsp;&nbsp;content: [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ file: "docs/lorem.md" },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ file: "docs/lorem.md" }
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;}
} \%\}

\{\% ***extends* "components/list.njk"** \%\}

{{ module.spacer(15) }}

\{\% **block *topRow*** \%\}\{\% **endblock** \%\}

{{ module.spacer(10) }}

\{\% **block *bottomRow*** \%\}\{\% **endblock** \%\}
  
{% endcall %}

{% endcall %}