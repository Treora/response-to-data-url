# response-to-data-url

Tiny javascript module that, given a [Response][] object (returned by e.g.
[`fetch()`][fetch]), returns (a Promise of) the response body as a [`data:` URL][dataURL].


## Install

`npm install response-to-data-url`


## Use

Example case, fetching some resources:
```
import responseToDataUrl from 'response-to-data-url'

fetch('https://example.com/pic.png')
  .then(responseToDataUrl)
  .then(dataUrl => {
    // dataUrl === 'data:image/png;base64,somelongstringofdatahere'
  })
```


## API

`responseToDataUrl(response)`

Arguments:
 - response: a [Response][]

Returns a Promise that resolves with a string.


[Response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
[dataURL]: https://tools.ietf.org/html/rfc2397
