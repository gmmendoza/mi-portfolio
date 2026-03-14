# SaaS ERP Cloud — Estructura de la Aplicación

## 📁 Estructura de Carpetas

```
Saas.app/
└── app/
    ├── index.html          ← Entrada principal (shell / layout)
    ├── views/              ← Vistas HTML separadas por sección
    │   ├── dashboard.html  ← Vista: Resumen General / KPIs / Gráficos
    │   ├── pos.html        ← Vista: Terminal Punto de Venta
    │   ├── inventory.html  ← Vista: Gestión de Inventario
    │   └── history.html    ← Vista: Historial de Ventas
    └── README.md           ← Este archivo
```

## 🗂️ Descripción de Vistas

| Archivo              | Sección              | Descripción                                               |
|----------------------|----------------------|-----------------------------------------------------------|
| `views/dashboard.html` | Dashboard            | KPIs (ingresos, órdenes, ticket promedio), gráfico de flujo y actividad reciente |
| `views/pos.html`       | Punto de Venta       | Cuadrícula de productos, búsqueda, carrito y cobro       |
| `views/inventory.html` | Inventario           | Listado en tarjetas con filtros por nombre y categoría   |
| `views/history.html`   | Historial de Ventas  | Tabla de transacciones con exportación CSV               |

## ⚙️ Cómo Funciona el Sistema de Vistas

El archivo `index.html` actúa como **shell** (esqueleto). Contiene:
- La barra lateral (sidebar) con navegación
- El header superior con buscador y notificaciones
- El área de contenido donde se montan las secciones

Cada sección (`<section id="dashboard">`, `<section id="pos">`, etc.) está incrustada en el `index.html` y es controlada por la función `switchView(viewName)`, que:
1. Oculta todas las secciones `.view-section`
2. Muestra la sección activa con la clase `active`
3. Actualiza el elemento `#breadcrumbs` en el header

## 📝 Notas de Desarrollo

- Las vistas en `views/` son **referencias de código** para mantener la organización.
- El `index.html` contiene el código completo y funcional.
- Los estilos usan **Tailwind CSS** vía CDN.
- La lógica JavaScript está embebida en `index.html` al final del archivo.
