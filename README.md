
# Simply.djs [ @ghostdevdbd/simply.djs ]

## Installation
```
-- No NPM package yet
```

## Example

```javascript
require("dotenv").config();
const ClientCreate = require("./utilities/client/client");
const client = new ClientCreate({
  token: process.env.token,
  embedColor: "#FFF18E",
});

client.ready("with simply.djs", "playing", "idle");
client.login();
```
