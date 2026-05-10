# Deploy public con Git + Vercel

## 0. Preparar el logo

Antes de subir a GitHub, copia manualmente este archivo:

```txt
C:\Users\Ratxel\Downloads\ChatGPT Image May 10, 2026, 05_00_18 PM.png
```

A esta ruta dentro del proyecto:

```txt
C:\Users\Ratxel\Documents\New project 3\hackathon-oracle-saas-partner-pulse\assets\oracle-partner-pulse-logo.png
```

En local el servidor puede leerlo desde Downloads, pero en Vercel el archivo debe estar dentro del proyecto.

## 1. Crear repositorio Git

```powershell
cd "C:\Users\Ratxel\Documents\New project 3\hackathon-oracle-saas-partner-pulse"
git init
git add .
git commit -m "Initial Oracle SaaS Partner Pulse MVP"
```

## 2. Crear repo en GitHub

Crea un repositorio nuevo en GitHub, por ejemplo:

```txt
oracle-saas-partner-pulse
```

No agregues README desde GitHub si ya tienes este proyecto local.

## 3. Conectar repo local con GitHub

Reemplaza `TU_USUARIO` por tu usuario u organizacion:

```powershell
git branch -M main
git remote add origin https://github.com/TU_USUARIO/oracle-saas-partner-pulse.git
git push -u origin main
```

## 4. Importar en Vercel

1. Entra a https://vercel.com/dashboard
2. Click en `Add New...`
3. Click en `Project`
4. Selecciona el repo `oracle-saas-partner-pulse`
5. Framework Preset: `Other`
6. Build Command: vacio
7. Output Directory: vacio o `.`
8. Click en `Deploy`

## 5. Abrir link publico

Vercel te dara un link similar a:

```txt
https://oracle-saas-partner-pulse.vercel.app
```

Cada nuevo `git push` a `main` actualizara el deployment.
