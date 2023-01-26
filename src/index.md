---
layout: base_content.njk
---
{% import "components/functions.njk" as function %}
{% import "components/modules.njk" as module %}

{% include "general/header.njk" %}

{% call module.generic({
  table: { class: "body" },
  gutters: { width: 40, class: "content-spacing-medium" },
  spacer: { size: 40 }
}) %}

## [Macros](/docs/macros/){.h3 .black}

{{ module.spacer(20) }}

## [Filtros y Shortcodes](/docs/eleventy/){.h3 .black}

{{ module.spacer(20) }}

## [Componentes](/docs/components/){.h3 .black}

{{ module.spacer(20) }}

## [Módulos](/docs/modules/){.h3 .black}

{{ module.spacer(40) }}

{% call module.generic({
  class: "alert",
  table: {
    bgcolor: "#f5f5f5"
  },
  gutters: {
    width: 40
  },
  spacer: {
    size: 40
  }
}) %}

Cambia el directorio que actua como repositorio de contenido, ahora es ***src/_content***{.vars} en lugar de ***_data/content.***{.vars}

{{ module.spacer(10) }}

Esto permite aligerar la carga de datos al momento de la construción del sitio, pero ya no se regenera en el modo de obervación al momento de aplicar cambios dentro de esta carpeta. Es necesario guardar algún otro archivo de tipo ***njk***{.vars}, ***imagen***{.vars} o ***.js***{.vars}

{% endcall %}

{{ module.spacer(40) }}

## CSS{.h2 .titles}

{{ module.spacer(20) }}

Los estilos para cada pieza de email se manejan en 2 formas y archivos.

{{ module.spacer(10) }}

### _config.scss{.h4 .files}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/css/_config.scss*{.comments}

{{ module.spacer(10) }}

En este archivo se definen todos los ***mixins***, ***funciones*** y ***variables*** globales del proyecto.
Este archivo se importa a los demas archivos *.scss*

{{ module.spacer(20) }}

### responsive.scss{.h4 .files}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/css/responsive.scss*{.comments}

{{ module.spacer(10) }}

En este archivo se definen todas las clases css que se incorporan al HTML de cada pieza. Contiene los ***media-queries*** para las resoluciones menores o igual a 480px (***responsive***) y las clases y ***media-queries*** para el **modo oscuro** y **claro**.
Hace uso de las *funciones* y *mixins* declarados en ***_config.scss***.
No se incluyen los estilos para las fuentes tipográficas y/o colores.

{{ module.spacer(10) }}

Todas las clases "responsivas" inician con la leta "***m***".

{{ module.spacer(20) }}

### styles.scss{.h4 .files}

{{ module.spacer(10) }}

**Ubicación**: */src/_includes/css/styles.scss*{.comments}

{{ module.spacer(10) }}

En este archivo se definen todas los estilos referentes al aspecto visual. Casa clase declarada, si se encuentra el selector en el HTML de cada pieza, se agrega al estilo en la línea de código (*style*).
Hace uso de las *funciones* y *mixins* declarados en ***_config.scss***.

{{ module.spacer(10) }}

Para diferenciar las clases *responsivas* que inician con la leta "***m***", se recoenda usar la leta "***d***" para identificar las clases o estilos en línea no *responsivos*.

{% endcall %}