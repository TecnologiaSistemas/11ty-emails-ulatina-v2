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

## Módulos {.h2}

{{ module.spacer(20) }}

### [Header](/docs/modules/header/) {.h4}

{{ module.spacer(20) }}

### [Footer](/docs/modules/footer/) {.h4}

{{ module.spacer(20) }}

### [Características](/docs/modules/feats/) {.h4}

{{ module.spacer(20) }}

### [Tablas](/docs/modules/tables/) {.h4}

{{ module.spacer(20) }}

### [Destacados](/docs/modules/higihlights/) {.h4}

{{ module.spacer(20) }}

### [CTA](/docs/modules/cta/) {.h4}

{{ module.spacer(20) }}

### [Hero Banner](/docs/modules/hero/) {.h4}

{{ module.spacer(20) }}

### [Contenido](/docs/modules/content/) {.h4}

{% endcall %}