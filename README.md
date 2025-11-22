# Proyecto Next.js + Django -- Prueba Técnica

Este proyecto es una aplicación construida con **Next.js** para el
frontend y **Django REST Framework** para el backend. A continuación
encontrarás todos los pasos necesarios para instalar, configurar y
ejecutar el entorno completo.

------------------------------------------------------------------------

## Requerimientos

### **Frontend (Next.js)**

-   Node.js 18+
-   npm o yarn

### **Backend (Django)**

-   Python 3.10+
-   pip
-   Virtualenv (opcional pero recomendado)

------------------------------------------------------------------------

## Instalación y Ejecución

------------------------------------------------------------------------

# 🖥️ Backend -- Django REST Framework

### 1. Clonar el repositorio

``` bash
git clone <url-del-repositorio>
cd backend/
```

### 2. Crear entorno virtual (opcional pero recomendado)

``` bash
python -m venv venv
```

### 3. Activar entorno virtual

-   **Windows**

``` bash
venv\Scripts\activate
```

-   **Mac / Linux**

``` bash
source venv/bin/activate
```

### 4. Instalar dependencias

``` bash
pip install -r requirements.txt
```

### 5. Ejecutar migraciones

``` bash
python manage.py migrate
```

### 6. Ejecutar servidor Django

``` bash
python manage.py runserver
```

El backend quedará disponible en:

    http://127.0.0.1:8000

------------------------------------------------------------------------

# 🌐 Frontend -- Next.js

### 1. Ir al directorio del frontend

``` bash
cd frontend/
```

### 2. Instalar dependencias

``` bash
npm install
# o
yarn install
```



### 3. Ejecutar el entorno de desarrollo

``` bash
npm run dev
# o
yarn dev
```

La app quedará en:

    http://localhost:3000

------------------------------------------------------------------------

## 📁 Estructura General

    root
     ├── backend/     -> Proyecto Django REST
     ├── frontend/    -> Proyecto Next.js
     └── README.md

------------------------------------------------------------------------

