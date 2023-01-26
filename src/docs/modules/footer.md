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

## Footer {.h2}

{{ module.spacer(40) }}

**Ubicación**: */src/_includes/modules/footer.njk*{.comments}
**Objeto de configuración**: ***blockFooter***{.vars}
**Extiende**: */src/_includes/components/footer.njk*{.comments}
  
{{ module.spacer(20) }}

#### **Parametros** *Object*{.gray} {.h4}

{{ module.spacer(10) }}

Usa todas las opciones del ***componente General Content*** más:

{{ module.spacer(10) }}

- **text**: *String*{.vars} texto a mostrar antes de la información de contacto
- **image**: *Object*{.vars} objeto para el llamado y configuración de la imagen, ver ***macro image** para las opciones
- **contactInfo**: *String*{.vars} arreglo de objetos con la información de contacto, usa el *macro imageContent*. Cada elemento del arreglo genera una columna
  - **align**: *String*{.vars} alienación de la tabla dentro de la columna
  - **class**: *String*{.vars} clase css para identificar la tabla dentro de la columna
  - **icon**: *Object*{.vars} objeto para el llamado y configuración de la imagen como icono, ver ***macro image** para las opciones
  - **text**: *String*{.vars} texto que acompaña al icono
  {.ul-list}

- **legal**: *String*{.vars} texto a mostrar al final del footer, normalmente corresponde al texto legal o copyright.
  - **class**: *String*{.vars} clase css para identificar al elemento
  - **text**: *String*{.vars} texto a mostrar
  {.ul-list}

- **responsive**: *Boolean*{.vars} *true* para hacer responsivo

{.ul-list}

{{ module.spacer(30) }}

{% include "docs/modules/footer/full.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockFooter*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "footer-aol",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "#000000"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;size: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { size: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "d-center",
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*text*: "\*\*¿Quieres obtener tu insignia? Comunícate con nosotros.\*\* {.h5 .white .d-center}",
&nbsp;&nbsp;*contactInfo*: [
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "d-left m-center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_mail_white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutter: { width: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[mail@uni.com\]\(mailto:mail@uni.com\){.text}"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[55 22 1234 5678\]\(tel:+52552212345678\){.text}"
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "d-left m-center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_wahstapp_white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutter: { width: 10 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: { size: 20 },
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[55 4433 2211\]\(https://...com\){.text}"
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;],
&nbsp;&nbsp;*legal*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "border-top",
&nbsp;&nbsp;&nbsp;&nbsp;text: "Copyright © 2022 Nombre de la Universidad{.legal .d-center}"
&nbsp;&nbsp;},
&nbsp;&nbsp;*responsive*: true
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/footer.njk"** \%\}
  
{% endcall %}

{{ module.spacer(80) }}

{% include "docs/modules/footer/full_2.njk" %}

{{ module.spacer(30) }}

{% call module.generic( tableCode ) %}
  
##### Nunjucks{.h5}

{{ module.spacer(20) }}

\{\% **set *blockFooter*** = {
&nbsp;&nbsp;*table*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-footer",
&nbsp;&nbsp;&nbsp;&nbsp;bgcolor: "red"
&nbsp;&nbsp;},
&nbsp;&nbsp;*gutters*: { width: 30 },
&nbsp;&nbsp;*spacer*: {
&nbsp;&nbsp;&nbsp;&nbsp;size: 30,
&nbsp;&nbsp;&nbsp;&nbsp;inner: { size: 20 }
&nbsp;&nbsp;},
&nbsp;&nbsp;*image*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "d-center",
&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/logo-anahuac-bw-header.png",
&nbsp;&nbsp;&nbsp;&nbsp;width: 180,
&nbsp;&nbsp;&nbsp;&nbsp;height: 51
&nbsp;&nbsp;},
&nbsp;&nbsp;*contactInfo*: [
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-footer-inner d-center m-center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_mail_white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutter: gutterWidth,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: spacerSize,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[mail@uni.com\]\(mailto:mail@uni.com\){.white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;],
&nbsp;&nbsp;&nbsp;&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-footer-inner d-left m-center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_mail_white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutter: gutterWidth,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: spacerSize,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[mail@uni.com\]\(mailto:mail@uni.com\){.white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "generic-footer-inner d-right m-center",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: "https://.../image/icon_whatsapp-white.png",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 20,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 20
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gutter: gutterWidth,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacer: spacerSize,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:  "\[55 4433 2211\]\(#\){.white}"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;]
&nbsp;&nbsp;],
&nbsp;&nbsp;*legal*: {
&nbsp;&nbsp;&nbsp;&nbsp;class: "border-top",
&nbsp;&nbsp;&nbsp;&nbsp;text: "Copyright © 2022 Nombre de la Universidad{.legal .white .d-center}"
&nbsp;&nbsp;},
&nbsp;&nbsp;*responsive*: true
} \%\}

{{ module.spacer(10) }}

\{\% ***include* "modules/footer.njk"** \%\}
  
{% endcall %}

{% endcall %}