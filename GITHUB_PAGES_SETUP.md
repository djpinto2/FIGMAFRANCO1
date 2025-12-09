# 🚀 Configuración de GitHub Pages - PASOS IMPORTANTES

## ⚠️ PASOS OBLIGATORIOS para activar GitHub Pages:

### 1. Activar GitHub Pages en tu repositorio:
   1. Ve a: https://github.com/djpinto2/FIGMAFRANCO1/settings/pages
   2. En la sección **"Source"** (Origen):
      - Selecciona: **"GitHub Actions"** (NO "Deploy from a branch")
   3. Haz clic en **"Save"**

### 2. Verificar que el workflow se ejecute:
   1. Ve a: https://github.com/djpinto2/FIGMAFRANCO1/actions
   2. Deberías ver el workflow "Deploy Next.js to GitHub Pages"
   3. Si no se ejecutó automáticamente, haz clic en el workflow y luego en **"Run workflow"**

### 3. Esperar el despliegue:
   - El primer despliegue puede tardar 3-5 minutos
   - Verás un checkmark verde cuando termine

### 4. Tu sitio estará disponible en:
   **https://djpinto2.github.io/FIGMAFRANCO1/**

---

## 🔧 Si aún no funciona:

### Verificar errores:
1. Ve a la pestaña **Actions**
2. Haz clic en el workflow que falló
3. Revisa los logs para ver el error

### Solución alternativa - Forzar nuevo despliegue:
1. Haz cualquier cambio pequeño (ej: un espacio en README.md)
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Trigger deployment"
   git push origin main
   ```

---

## 📝 Notas importantes:
- El sitio se actualiza automáticamente cada vez que haces push a `main`
- Si cambias algo, espera 2-3 minutos para ver los cambios
- El link siempre será: `https://djpinto2.github.io/FIGMAFRANCO1/`

