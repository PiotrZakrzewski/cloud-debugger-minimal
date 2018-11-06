const Debugagent = require("@google-cloud/debug-agent");
const Express = require("express");

const port = process.env.PORT || 3000;

Debugagent.start({
    allowExpressions: true,
    keyFilename: "secrets/debugger-sa-key.json",
    projectId: "piotr-workshop-test",
    serviceContext: {
      service: "cloud-debugger-minimal",
      version: "1.0.0",
    },
});

const app = Express();

app.get('/', async(req, res) => {
    res.send("OK");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`)
});
