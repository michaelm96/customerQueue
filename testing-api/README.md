# testing-api server
​
List of available endpoints:
​

- `GET /customers/`
- `GET /customers/type/:type`
- `GET /customers/byQueue`
- `GET /customers/id/:id`
- `POST /customers/`
- `PUT /customers/:id`
- `DELETE /customers/:id`

### GET /customers

description:
get all customers queue

Response:

- status: 200
- message: "Data found"
- result:

```json
[{
    "_id": "<ID of this queue>",
    "username": "<name of customer>",
    "gender": "<gender of customer>",
    "todayDate": "<date when this queue created>",
    "birthday": "<birthday of customer>",
    "queue": "<queue number>",
    "type": "<type of the queue>",
},{
    "_id": "<ID of this queue>",
    "username": "<name of customer>",
    "gender": "<gender of customer>",
    "todayDate": "<date when this queue created>",
    "birthday": "<birthday of customer>",
    "queue": "<queue number>",
    "type": "<type of the queue>",
},
{},
{},
.....]
```

### GET /customers/type/:type

description:
get all based on type

Request:

- params:

```json
{
  "type": "<type of the queue>"
}
```

Response:

- status: 200
- message: "Data found"
- result:

```json
[{
    "_id": "<ID of this queue>",
    "username": "<name of customer>",
    "gender": "<gender of customer>",
    "todayDate": "<date when this queue created>",
    "birthday": "<birthday of customer>",
    "queue": "<queue number>",
    "type": "<type of the queue based on request>",
},{
    "_id": "<ID of this queue>",
    "username": "<name of customer>",
    "gender": "<gender of customer>",
    "todayDate": "<date when this queue created>",
    "birthday": "<birthday of customer>",
    "queue": "<queue number>",
    "type": "<type of the queue based on request>",
},
{},
{},
.....]
```

### GET /customers/byQueue

description:
get customers queue based on type and number of the queue

Request:

- body:

```json
{
  "type": "<type of the queue>",
  "queue": "<number of the queue>"
}
```

​Response:

- status: 200
- message: "Data found"
- result:
  ​

```json
[
  {
    "_id": "<ID of this queue>",
    "username": "<name of customer>",
    "gender": "<gender of customer>",
    "todayDate": "<date when this queue created>",
    "birthday": "<birthday of customer>",
    "queue": "<queue number>",
    "type": "<type of the queue based on request>"
  }
]
```

### GET /customers/id/:id

description:
get queue based on id

Request:

- params:

```json
{
  "id": "<ID of this queue>"
}
```

Response:

- status: 200
- message: "Data found"
- result:

```json
{
  "_id": "<ID of this queue>",
  "username": "<name of customer>",
  "gender": "<gender of customer>",
  "todayDate": "<date when this queue created>",
  "birthday": "<birthday of customer>",
  "queue": "<queue number>",
  "type": "<type of the queue based on request>"
}
```

​

### POST /customers/

description:
create new queue
​

Request:

- body:

```json
{
  "username": "<name of customer>",
  "gender": "<gender of customer>",
  "birthday": "<birthday of customer>",
  "type": "<type of the queue>"
}
```

Response:

- status: 201
- message: "New queue created"
- result: "Your queue is B-2" (example)
  ​

```json
{
  "message": "New queue created",
  "result": "Your queue is B-2"
}
```

### PUT /customers/:id

description:
update new queue based on id
​

Request:

- body:

```json
{
  "username": "<name of customer>", (optional)
  "gender": "<gender of customer>", (optional)
  "birthday": "<birthday of customer>", (optional)
  "type": "<type of the queue>", (optional)
  "queue": "<queue number>", (optional)
}
```

Response:

- status: 200
- message: "customer data is updated" ​
- result:

```json
{
  "_id": "<ID of this queue>",
  "username": "<name of customer>",
  "gender": "<gender of customer>",
  "todayDate": "<date when this queue created>",
  "birthday": "<birthday of customer>",
  "queue": "<queue number>",
  "type": "<type of the queue>"
}
```

### DELETE /customers/:id

description:
delete the queue based on id
​

Request:

- params:

```json
{
  "id": "<ID of this queue>"
}
```

Response:

- status: 200
- message: "customer have been deleted"