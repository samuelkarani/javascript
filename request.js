const https = require("https");

function request(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        resolve({
          body,
          headers: res.headers,
          statusCode: res.statusCode
        });
      });
      res.on("error", reject);
    });
  });
}

async function test() {
  console.log(await request("https://jsonplaceholder.typicode.com/todos/1"));
}

test();
