
# Simply.djs [ @ghostdevdbd/simply.djs ]

## Installation
```
-- No NPM package yet
```

## Example

```javascript
require("dotenv").config();
const ClientCreate = require("package-name"); // no NPM package yet so yea
const client = new ClientCreate({
  token: process.env.token,
  embedColor: "#FFF18E",
});

client.ready("with simply.djs", "playing", "idle");
client.login();
```
