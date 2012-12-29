passphrase
==========

A simple API for generating secure passphrases, inspired by http://xkcd.com/936/ and http://passphra.se/

For more context, read http://preshing.com/20110811/xkcd-password-generator

This API supports a GET request only:

<pre><code>
curl -i -X GET http://localhost:3000/passphrase
</code></pre>

<pre><code>
{
  "passphrase": "alike indicate examine angle"
}
</code></pre>

You can optionally pass in an argument to generate n passphrases:

<pre><code>
curl -i -X GET http://localhost:5000/passphrase/3
</code></pre>

<pre><code>
{
  "n": 3,
  "passphrases": [
    "chance dead struggle consist",
    "mysterious mouth represent herd",
    "diameter operation telephone planned"
  ]
}
</code></pre>
