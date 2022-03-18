<h2>Motivation</h2>
Experiment with JSON schema validator to be used in javascript validation (node\browser). Here ajv is used




<h2>Validation steps</h2>
There are three steps here
<ol>
<li>Create json schema (can be in code as object or as json file)

```js
const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

```

Check e.g. <a href='https://json-schema.org/'>here</a> </li>

<li>Compile the schema :

```js
const validate = ajv.compile(schema);
```

</li>
<li>validate the schema on an js object

```js
let valid = validate(it);
```

</li>
</ol>


<h2>Points of interest</h2>
<ul>
<li>JSON schema is not mandatory to perform javascript validation. You can use e.g. <a href='https://www.npmjs.com/package/joi'>joi</a> which is very popular. However, joi does not use typescript feature e.g. interface and I am looking for a tool that knows to use typescript to impose validation constraints directly of typescript interface</li>
</ul>


<h2>Installation</h2>

```
npm i
```
