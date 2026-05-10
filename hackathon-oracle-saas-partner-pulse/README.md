# Oracle SaaS Partner Pulse

MVP navegable para CSM, separado del proyecto InRetail Command Tower.

## Lanzar

```powershell
cd "C:\Users\Ratxel\Documents\New project 3\hackathon-oracle-saas-partner-pulse"
node server.mjs
```

Abrir:

```txt
http://localhost:4174
```

El MVP no incluye pipeline, revenue, renewal, cross-sell ni indicadores economicos/comerciales.

## Partner Rating capability

El prototipo incluye una version simplificada del guideline de Partner Rating con escala 1-5:

```txt
1 Poor / Failed
2 Ineffective
3 Minimum / Fair
4 Successful
5 Excellent
```

Dimensiones usadas:

- Engagement with CSM
- Engagement with customer
- Engagement with support
- Scope setting and management
- Product, industry or domain competency
- Methodology
- Transition to ownership and adoption

La dimension de transicion se enfoca en ownership, sustainment y adopcion post go-live, no en indicadores comerciales.

## Logo

El servidor expone el logo desde:

```txt
C:\Users\Ratxel\Downloads\ChatGPT Image May 10, 2026, 05_00_18 PM.png
```

La app lo consume como:

```txt
/assets/oracle-partner-pulse-logo.png
```
