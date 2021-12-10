# nestjs

## Step 0
- copy example.env and rename to .env file

```
add db port
add username, password

need mapping to docker db setting
```

## Step 1
- start mongodb in docker

```
cd database
docker-compose up  (start mongo in dokcer)
```

## step 2
- start services

```
cd services
yarn  (install dependencies)
yarn start:dev
```

## step 3
- start web

```
cd web
yarn (install dependencies)
yarn serve
```
