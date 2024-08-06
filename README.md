# MyVet

My Vet es un sistema de Gestión Integral desarrollado pensando exclusivamente en las necesidades de las veterinarias. Es un sistema de gestión de historias clínicas para veterinarias, manteniendo un registro actualizado de los clientes y sus mascotas. La automatización de las historias clínicas permitirá al médico veterinario llevar un mayor control y seguimiento de las consultas y evolución de sus pacientes. Permite tanbièn, llevar un registro de todas las vacunas aplicadas. En un futuro podrá disponer de su agenda para otorgar turnos a sus clientes. Como bonus, cuenta con una tienda virtual lista para expandir tu negocio y cartera de clientes, pudiendo administrar sus ventas, agregar nuevos productos y eventualmente, ampliar su oferta.

Para las personas dueñas de mascotas, My Vet tambièn es un centro de información sobre sus mascotas, contando con su información, vacunas aplicadas y en un futuro la posibilidad de reservar turnos con los especialistas elegidos. Además, puede adquirir alimentos y accesorios para su mascota desde cualquier dispositivo, disfrutando de un amplio catálogo de productos.

## Django Setup

### Setup virtual environment

```python
python3 -m venv .venv
```

or

```python
python -m venv .venv
```

### Activate virtual environment

#### On Unix

```python
source .venv/bin/activate
```

#### On Windows

```python
source .venv/Scripts/activate
```

### Install requirements

```python
pip install -r requirements.txt
```

### Run the server

```python
python3 manage.py runserver localhost:8001
```

or

```python
python manage.py runserver localhost:8001
```

- **Go to [http://localhost:8001/api/pets](http://localhost:8001/api/pets) to see the pets**
- **Go to [http://localhost:8001/admin](http://localhost:8001/admin) to see the admin**

## NextJS Setup

### Install dependencies

```js
npm i
```

### Run the server

```js
npm run dev
```

- **Go to [http://localhost:3000](http://localhost:) to see the UI**
