# Instrucciones para subir a GitHub

## Paso 1: Crear el repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `elara-share` (o el que prefieras)
3. Descripción: "Sitio web responsive Elara Share"
4. Elige Público o Privado
5. **NO marques** "Initialize with README"
6. Haz clic en "Create repository"

## Paso 2: Conectar y subir el código

Después de crear el repositorio, GitHub te mostrará comandos. O ejecuta estos (reemplaza TU_USUARIO con tu usuario de GitHub):

```bash
git remote add origin https://github.com/TU_USUARIO/elara-share.git
git branch -M main
git push -u origin main
```

## Alternativa: Si ya tienes el repositorio creado

Solo ejecuta:
```bash
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git push -u origin main
```

