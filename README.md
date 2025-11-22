
# Proyecto Next.js + Django -- Prueba Técnica

Este proyecto es una aplicación construida con **Next.js** para el frontend y **Django REST Framework** para el backend. A continuación encontrarás todos los pasos necesarios para instalar, configurar y ejecutar el entorno completo.

------------------------------------------------------------------------

## Requerimientos

### **Frontend (Next.js)**

- Node.js 18+
- npm o yarn

### **Backend (Django)**

- Python 3.10+
- pip
- Virtualenv (opcional pero recomendado)

------------------------------------------------------------------------

## Instalación y Ejecución

------------------------------------------------------------------------

# 🖥️ Backend -- Django REST Framework

### 1. Clonar el repositorio

```bash
git clone <https://github.com/MAAC2020/pruebatecnicaproyectsandsystem>
cd backend/
```

### 2. Crear entorno virtual (opcional pero recomendado)

```bash
python -m venv venv
```

### 3. Activar entorno virtual

- **Windows**

```bash
venv\Scripts\activate
```

- **Mac / Linux**

```bash
source venv/bin/activate
```

### 4. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 5. Ejecutar migraciones

```bash
python manage.py migrate
```

### 6. Ejecutar servidor Django

```bash
python manage.py runserver
```

### 7. Acceder al backend

Una vez levantado el servidor, puedes acceder al backend desde tu navegador o desde cualquier cliente HTTP (Postman, Insomnia, etc.):

```
http://127.0.0.1:8000
```

Por ejemplo:

- Listar recursos de tu API: `http://127.0.0.1:8000/api/v1/<recurso>/`
- Acceder al admin de Django: `http://127.0.0.1:8000/admin/`

------------------------------------------------------------------------

# 🌐 Frontend -- Next.js

### 1. Ir al directorio del frontend

```bash
cd frontend/
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar el entorno de desarrollo

```bash
npm run dev
# o
yarn dev
```

### 4. Acceder al frontend

Una vez levantado el servidor de desarrollo, puedes acceder a la aplicación desde tu navegador:

```
http://localhost:3000
```

------------------------------------------------------------------------

## 📁 Estructura General

```
root
 ├── backend/     -> Proyecto Django REST
 ├── frontend/    -> Proyecto Next.js
 └── README.md
```

------------------------------------------------------------------------
