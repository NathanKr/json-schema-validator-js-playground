const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const dataOk = {
  foo: 1,
  bar: "abc",
};

const dataNotOk = {
  foo: "1",
  bar: "abc",
};

const data = [dataOk, dataNotOk];

data.forEach((it) => {
  let valid = validate(it);
  if (!valid) {
    console.log(validate.errors);
  }
});
