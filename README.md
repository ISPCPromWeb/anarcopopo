# MyVet

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
