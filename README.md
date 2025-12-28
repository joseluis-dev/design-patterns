<div align="center">

# Patrones de diseño (TypeScript + Python)

Colección de ejemplos **claros y pequeños** de patrones de diseño implementados en **TypeScript** y en **Python**, pensados para leerse rápido y servir como referencia.

[Ver contenido](#contenido) · [Ejecución](#ejecución) · [Estructura](#estructura) · [Roadmap](#roadmap)

</div>

---

## Objetivo

- Reunir implementaciones de patrones de diseño con enfoque didáctico.
- Mantener ejemplos **autocontenidos** (fáciles de copiar/ejecutar).
- Mostrar, cuando aporte valor, **más de un estilo** (p. ej. OOP vs funcional) para el mismo patrón.
- Permitir ejemplos en **más de un lenguaje** cuando sea útil para comparar enfoques.

## Contenido

### Patrones creacionales

- ✅ **Factory Method**
  - Carpeta: [Factory Method](Factory%20Method/)
  - Ejemplos:
    - [Factory Method con clases](Factory%20Method/index.ts) (Creator abstracto + productos concretos)
    - [Factory Method estilo funcional](Factory%20Method/function.ts) (factory method pasado como parámetro)
    - [Factory Method en Python](Factory%20Method/main.py) (Creator abstracto + productos concretos)

## Estructura

```
patrones de diseño/
├─ Factory Method/
│  ├─ index.ts
│  └─ function.ts
│  └─ main.py
└─ README.md
```

## Ejecución

Hay ejemplos en TypeScript y Python. Tienes varias opciones según cómo tengas configurado tu entorno.

### Python

Desde la carpeta del patrón:

```bash
python .\main.py
```

O desde la raíz del repositorio:

```bash
python "Factory Method/main.py"
```

### TypeScript

### Opción A — Ejecutar con ts-node (rápido)

1) Instala dependencias (una vez):

```bash
npm init -y
npm i -D typescript ts-node @types/node
```

2) Ejecuta un ejemplo:

```bash
npx ts-node "Factory Method/index.ts"
# o
npx ts-node "Factory Method/function.ts"
```

### Opción B — Compilar con tsc y ejecutar con Node

1) Instala TypeScript (una vez):

```bash
npm init -y
npm i -D typescript
```

2) Crea un `tsconfig.json` básico:

```bash
npx tsc --init
```

3) Compila y ejecuta (ejemplo):

```bash
npx tsc
node dist/Factory\ Method/index.js
```

> Nota: la ruta final depende de tu configuración (`outDir`, etc.). Si aún no tienes build configurado en el repo, la opción con `ts-node` suele ser la más directa.

## Convenciones

- Cada patrón vive en su propia carpeta.
- Los ejemplos imprimen por consola para mostrar el flujo ("Client", "Creator", etc.).
- Mantengo nombres descriptivos y código intencionalmente pequeño para facilitar lectura.

## Roadmap

- [ ] Abstract Factory
- [ ] Builder
- [ ] Prototype
- [ ] Singleton
- [ ] Adapter
- [ ] Decorator
- [ ] Facade
- [ ] Strategy
- [ ] Observer

---

### Sugerencias

Si quieres, puedo añadir:
- Un `package.json` mínimo con scripts (`dev`, `run:factory-method`, etc.) sin cambiar la estructura actual.
- Un índice por patrón con “Qué problema resuelve / Cuándo usarlo / Pros y contras”.
