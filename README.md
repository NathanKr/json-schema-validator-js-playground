<h2>Motivation</h2>
Experiment with JSON schema validator to be used in javascript validation (node\browser). Here ajv is used




<h2>Validation steps</h2>
There are three steps here
<ol>
<li>Create json schema : Check e.g. <a href='https://json-schema.org/'>here</a> </li>
<li>Compile the schema :

```
const validate = ajv.compile(schema);
```

</li>
<li>validate the schema :

```
let valid = validate(it);
```

</li>
</ol>


<h2>Points of interest</h2>
<ul>
<li>JSON schema is not mandatory to perform javascript validation. You can use e.g. <a href='https://www.npmjs.com/package/joi'>joi</a> which is very popular. However, joi does not use typescript feature e.g. decorator and I am looking for a tool that knows to use typescript decoration to impose validation constraints directly of typescript interface</li>
</ul>


<h2>Installation</h2>

```
npm i
```
