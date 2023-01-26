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

## Macros y funciones{.h2}

{{ module.spacer(40) }}

{#########################
ATRIBUTOS
##########################}

### **setAttr** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** {.h4}

{{ module.spacer(10) }}

Se utliza normalmente para agregar, en caso de ser necesario, un atrinuto y su valor definido o asiganr un valor predeterminado. En caso de que ambos valores no esten definidos se omite.

{{ module.spacer(10) }}

- **attribute**: *String*{.vars} nombre del atrinuto a agregar
- **value**: *String/Number*{.vars} valor del atributo
- **default**: *String*{.vars} valor predeterminado del atriuto, ***opcional***, *default ''*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

***setAttrs*** ( *attribute*, *value*, *default* )

{{ module.spacer(10) }}

&lt;tag \{\{ **setAttrs**("width", 500, "100%" ) \}\}"&gt;&lt;/tag&gt;
&lt;tag \{\{ **setAttrs**("width", "", "100%" ) \}\}"&gt;&lt;/tag&gt;
&lt;tag \{\{ **setAttrs**("width") \}\}"&gt;&lt;/tag&gt;
  
{% endcall %}
{% call module.generic( tableCode ) %}

##### HTML{.h5}

{{ module.spacer(20) }}

&lt;tag ***width***="500"&gt;&lt;/tag&gt;
&lt;tag ***width***="100%"&gt;&lt;/tag&gt;
&lt;tag&gt;&lt;/tag&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
VALUE
##########################}

### **setValue** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** {.h4}

{{ module.spacer(10) }}

Se utliza normalmente para especificar el valor de un elemento, si el valor dado es un objeto, es necesario especificar el índice para aplicarlo, si el valor es un número, texto o un valor boleano se aplica como esta espcificado, en caso de no existir un valor se omite.

{{ module.spacer(10) }}

- **value**: *String/Number*{.vars} valor del atributo
- **id**: *String*{.vars} nombre del índice en el objeto de datos

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

***setValue*** ( *value*, *id* )

{{ module.spacer(10) }}

&lt;tag width="\{\{ **setValue**({
&nbsp;&nbsp;*height*: 100,
&nbsp;&nbsp;*width*: 200
}, "width" ) \}\}"&gt;&lt;/tag&gt;
&lt;tag width="\{\{ **setValue**(300) \}\}"&gt;&lt;/tag&gt;
&lt;tag width="\{\{ **setValue**() \}\}"&gt;&lt;/tag&gt;
  
{% endcall %}
{% call module.generic( tableCode ) %}

##### HTML{.h5}

{{ module.spacer(20) }}

&lt;tag ***width***="200"&gt;&lt;/tag&gt;
&lt;tag ***width***="300"&gt;&lt;/tag&gt;
&lt;tag&gt;&lt;/tag&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
LINK
##########################}

### **addLink** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** {.h4}

{{ module.spacer(10) }}

Se utliza agregar el marcado para hivervínculos o tag ***&lt;a&gt;***

{{ module.spacer(10) }}

- **class**: *String*{.vars} clase css para identificar o agregar estilos en línea
- **link**: *String*{.vars} URL destino del hipervínculo

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

***addLink*** ({ *class*, *link* })

{{ module.spacer(10) }}

\{\% ***call* addLink**({ *class*: "button", *link*: "#" }) \%\}
Button text {.text}
\{\% ***endcall*** \%\}

{{ module.spacer(10) }}

\{\% ***call* addLink**({ *class*: "button" }) \%\}
Button text {.text}
\{\% ***endcall*** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}

##### HTML{.h5}

{{ module.spacer(20) }}

&lt;a ***href***="#" ***class***="button"&gt;Button text&lt;/a&gt;

{{ module.spacer(10) }}

Button text
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
TABLA
##########################}

### **table** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object / Boolean*{.gray} {.h4}

{{ module.spacer(10) }}

*true*{.vars} para agregar la tabla sin opciones

{{ module.spacer(10) }}

- **align**: *String*{.vars} indica la alienación de la tabla, acepta cualquier valor válido, *default ''*{.gray}
- **bgcolor**: *String*{.vars} color de fondo de la tabla en hexadecimal, *default ''*{.gray}
- **class**: *String*{.vars} clase css para identificar a la tabla y aplicar estilos en línea adicionales, *default ''*{.gray}
- **width**: *String*{.vars} o *Number*{.vars} texto para indicar porcentajes y número para anchos específicos, *default ''*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *table***({
&nbsp;&nbsp;*class*: "demo",
&nbsp;&nbsp;*align*: "left",
&nbsp;&nbsp;*bgcolor*: "red",
&nbsp;&nbsp;*width*: "100%"
}) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***align***="left" ***bgcolor***="red" ***border***="0" ***class***="demo" ***cellspacing***="0" ***cellpadding***="0" ***width***="100%" ***style***="min-width: 100% !important; mso-cellspacing: 0px; mso-padding-alt: 0px 0px 0px 0px; width: 100% !important;"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}

##### Nunjucks{.h5}

{{ module.spacer(20) }}
  
\{\% **call *table***(true) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}

{% call module.generic( tableCode ) %}

##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***border***="0" ***cellspacing***="0" ***cellpadding***="0" ***width***="100%" ***style***="min-width: 100% !important; mso-cellspacing: 0px; mso-padding-alt: 0px 0px 0px 0px; width: 100% !important;"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
RENGLÓN
##########################}

### **row** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *Object / Boolean*{.gray} {.h4}

{{ module.spacer(10) }}

*true*{.vars} para agregar el renglón sin opciones

{{ module.spacer(10) }}

- **class**: *String*{.vars} clase css para identificar el renglón y aplicar estilos en línea adicionales, *default ''*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *row***({
&nbsp;&nbsp;*class*: "demo"
}) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;tr ***class***="demo"&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *row***(true) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;tr&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
COLUMNA
##########################}

### **column** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}

  {{ module.spacer(20) }}

#### **Parametros** *Object / Boolean*{.gray} {.h4}

{{ module.spacer(10) }}

*true*{.vars} para agregar la columna sin opciones

{{ module.spacer(10) }}

- **tag**: *String*{.vars} etiqueta a usarse, *default 'td'*{.gray}
- **align**: *String*{.vars} indica la alienación del contenido de la celda, *default ''*{.gray}
- **bgcolor**: *String*{.vars} color de fondo de la celda, *default ''*{.gray}
- **class**: *String*{.vars} clase css para identificar la celda y aplicar estilos en línea adicionales, *default ''*{.gray}
- **colspan**: *Number*{.vars} número para establecer la cantidad de columnas a unir, *default ''*{.gray}
- **height**: *Number*{.vars} número para establecer la altura de la celda, *default ''*{.gray}
- **rowspan**: *Number*{.vars} número para establecer la cantida de renglones a unir, *default ''*{.gray}
- **valign**: *String*{.vars} establece la alineación vertical de la celda, *default ''*{.gray}
- **width**: *String*{.vars} o *Number*{.vars} texto para indicar un porcentaje y número para anchos específicos, *default ''*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *column***({
&nbsp;&nbsp;*class*: "demo",
&nbsp;&nbsp;*align*: "center",
&nbsp;&nbsp;*valign*: "top",
&nbsp;&nbsp;*bgcolor*: "yellow",
&nbsp;&nbsp;*width*: "100%",
&nbsp;&nbsp;*height*: 40
}) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;td ***align***="center" ***bgcolor***="yellow" ***class***="demo" ***width***="100%" ***height***="40" ***valign***="top" ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/td&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *column***({ *tag*: "th" }) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;th ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/th&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *column***(true) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/td&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
GUTTERS
##########################}

### **gutter** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

- **size**: *Number*{.vars} ancho de la celda, *default ''*{.gray}
- **class**: *String*{.vars} clase css para indicar el ancho en resoluciones menores a 480px, *default 'content-spacing'*{.gray}
- **hideOnMobile**: *Boolean*{.vars} *true* para ocultar en resoluciones menores de 480px, *default 'false'*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ ***gutter***({
&nbsp;&nbsp;*size*: 30,
&nbsp;&nbsp;*class*: "content-spacing-large",
&nbsp;&nbsp;*hideOnMobile*: true
}) \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;td ***class***="content-spacing-large m-hide" ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;" ***width***="30"&gt;
&nbsp;&nbsp;*&lt;img src=".../spacer.gif" alt="" width="100%" height="10"&gt;*
&lt;/td&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
SET CONTENT
##########################}

### **setContent** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/functions.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *String*{.gray} {.h4}

{{ module.spacer(10) }}

- **class**: *String*{.vars} clase css para agregar un div al elemento y aplicar estilos en línea adicionales

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *setContent***(*"demo"*) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;div ***class***="demo"&gt;
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&lt;/div&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *setContent***() \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** %\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

***\{\{ caller() \}\}***{.modules}
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
SPACER
##########################}

### **spacer** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/modules.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *Number / Boolean*{.gray} {.h4}

{{ module.spacer(10) }}

- **size**: *Number*{.vars} alto de la tabla, *default 20*{.gray}
- **hideOnMobile**: *Boolean*{.vars} *true* para ocultar en resoluciones menores de 480px, *default 'false'*{.gray}

{.ul-list}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ **spacer**(*30*, *true*) \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***class***="m-table" ***style***="min-width: 100% !important; mso-cellspacing: 0px; mso-padding-alt: 0px 0px 0px 0px; width: 100% !important;" ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;" ***height***="30"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;img src=".../spacer.gif" alt="" width="100%" height="30"&gt;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ **spacer**(*20*) \}\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***class***="spacer" ***style***="min-width: 100% !important; mso-cellspacing: 0px; mso-padding-alt: 0px 0px 0px 0px; width: 100% !important;" ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;" ***height***="20"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;img src=".../spacer.gif" alt="" width="100%" height="20"&gt;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
GENERIC TABLE
##########################}

### **generic** {.h3 .titles}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/modules.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

- **class**: *String*{.vars} clase css para identificar a elemento de contenido utiliza ***setContent***, *default ''*{.gray  }
- **table**: *Object*{.vars} ver ***macro table*** para las opciones
- **gutters**: *Boolean/Object*{.vars} ver ***macro gutter*** para las opciones generales
  - **left**: *Object*{.vars} ver ***macro gutter*** para las opciones, solo aplica para la columna izquierda y sobreescribe las opciones generales
  {.ul-list}

  - **right**: *Object*{.vars} ver ***macro gutter*** para las opciones, solo aplica para la columna derecha y sobreescribe las opciones generales
  {.ul-list}

- **spacer**: *Boolean/Object*{.vars} ver ***macro spacer*** para las opciones generales
  - **top**: *Object* ver ***macro spacer*** para las opciones, solo aplica colocar un espacio en la parte superior y sobreescribe las opciones generales
  {.ul-list}
  
  - **bottom**: ver ***macro spacer*** para las opciones, solo aplica colocar un espacio en la parte inferior y sobreescribe las opciones generales
  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/macros/generic.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *generic***({
&nbsp;&nbsp;*class*: "content",
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 30 }
}) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ***class***="content"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40"/&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
IMAGE TABLE
##########################}

### **image** {.h3 .titles}

{{ module.spacer(10) }}

Usa el ***shortcode image***

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/modules.njk*{.comments}
**Depende de**: *generic*{.vars}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***macro generic***, más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars}
  - **url**: *String*{.vars} URL de la imagen a insertar
  - **width**: *Number*{.vars} ancho de la imagen, *default '100%'*{.gray}
  - **height**: *Number*{.vars} alto de la imagen
  - **alt**: *String*{.vars} texto alterno para describir a la imagen
  - **format**: *String* ver ***shortcode image*** para las opciones
  - **quality**: *Number* ver ***shortcode image*** para las opciones
  - **domain**: *String* ver ***shortcode image*** para las opciones
  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/macros/image.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\{ ***image***({
&nbsp;&nbsp;*class*: "image",
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "http://",
&nbsp;&nbsp;&nbsp;&nbsp;width: "100%",
&nbsp;&nbsp;&nbsp;&nbsp;alt: "Imagen"
&nbsp;&nbsp;},
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 30 }
}) \}\}

{{ module.spacer(20) }}

\{\% **call *image***({
&nbsp;&nbsp;*class*: "image",
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "http://",
&nbsp;&nbsp;&nbsp;&nbsp;width: "100%",
&nbsp;&nbsp;&nbsp;&nbsp;alt: "Imagen"
&nbsp;&nbsp;},
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 30 }
}) \%\}
\{\% **endcall** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ***class***="image"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;img **src**="http://" **width**="130" **height**="60" **alt**="Imagen" /&gt;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{{ module.spacer(80) }}

{#########################
IMAGE CONTENT TABLE
##########################}

### **imageContent** {.h3 .titles}

{{ module.spacer(10) }}

Usa el ***shortcode image***

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/components/modules.njk*{.comments}

{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***macro generic***, más:

{{ module.spacer(10) }}

- **image**: *Object*{.vars}
  - **url**: *String*{.vars} URL de la imagen a insertar
  - **width**: *Number*{.vars} ancho de la imagen, *default '100%'*{.gray}
  - **height**: *Number*{.vars} alto de la imagen
  - **alt**: *String*{.vars} texto alterno para describir a la imagen
  - **position**: *String*{.vars} indica la posición de la imagen, acepta ***"left"*** o ***"right"***, *default 'left'*{.gray}
  - **format**: *String* ver ***shortcode image*** para las opciones
  - **quality**: *Number* ver ***shortcode image*** para las opciones
  - **domain**: *String* ver ***shortcode image*** para las opciones
  {.ul-list}

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/macros/imageContent.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **call *imageContent***({
&nbsp;&nbsp;*class*: "image",
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;url: "http://",
&nbsp;&nbsp;&nbsp;&nbsp;width: 130,
&nbsp;&nbsp;&nbsp;&nbsp;height: 60,
&nbsp;&nbsp;&nbsp;&nbsp;alt: "Imagen",
&nbsp;&nbsp;&nbsp;&nbsp;position: "right",
&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*table*: true,
&nbsp;&nbsp;*gutters*: { width: 40 },
&nbsp;&nbsp;*spacer*: { size: 30 }
}) \%\}
&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
\{\% **endcall** \%\}
  
{% endcall %}
{% call module.generic( tableCode ) %}
  
##### HTML{.h5}

{{ module.spacer(20) }}

&lt;table ***width***="100%" ***cellspacing***="0" ***cellpadding***="0" ***border***="0"&gt;
&nbsp;&nbsp;&lt;tbody&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***\{\{ caller() \}\}***{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td ***style***="font-size: 0 !important; font-weight: normal; line-height: 0 !important; padding: 0 !important;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div ***class***="image m-right"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;img **src**="http://" **width**="130" **height**="60" **alt**="Imagen" /&gt;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;table ***class***="spacer" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&lt;td ***class***="content-spacing" ***width***="40" /&gt;*{.modules}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;/tbody&gt;
&lt;/table&gt;
  
{% endcall %}

{% endcall %}