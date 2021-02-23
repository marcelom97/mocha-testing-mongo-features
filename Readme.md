## Testing with mocha MongoDB utilities

### How to run

#### Docker

```sh
docker-compose build
docker-compose up
```

#### Host machine

##### You must have an instance of MongoDB running

#### Change the .env file at the root of the project

##### from this

```
MONGO_URI=mongo_test
```

##### to this

```
MONGO_URI=localhost
```
