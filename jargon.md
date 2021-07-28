# Http Jargon

# Http
HyperText Transfer Protocol

The context for all of this describes request, responses and how to structure

# Request
What the client (Browser) sends to server
```js
app.get('/quotes', function(req, res)
```
# Response
What the server send back to the clien. This can be anything
including HTML, CSS, JS Files (Static Content), objects, arrays, etc

```js
app.get('/quotes', function( req, res)