function download(content, filename, mimeType) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  const creatA = document.createElement('a');
  creatA.href = 'data';
  document.body.appendChild(creatA);
  console.log(document.body);


}

$(document).ready(() => {
  download('hey', 'test.txt', 'text/plain');
// });

$('#download').on("click", function() {
  function download() {
    // var jsonObject = {
    //   "name": "John",
    //   "age": 31,
    //   "city": "New York"
    // };
    var jsonObject = 'hey';
    // var fileContents = JSON.stringify(jsonObject, null, 2);
    var fileContents = jsonObject;
    var fileName = "data.txt";

    var pp = document.createElement('a');
    pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
    pp.setAttribute('download', fileName);
    pp.click();
  }
  setTimeout(function() {
    download()
  }, 500);
});
});