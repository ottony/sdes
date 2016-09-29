# BufferCrypt
BufferCrypt contains a Simple DES implementation with javascript.
S-DES is a didatic implementation of DES algorithm.

# Using
First, import the dist/index.js file. It contain a BufferCrypt object with `sdesEncrypt` and `sdesDecrypt` static functions 

```javascript
BufferCrypt.sdesEncrypt(key, buffer)
```

```javascript
BufferCrypt.sdesDecrypt(key, buffer)
```

`key` is a integer key with 10 bits, that means betwen 0 and 1023.
`buffer` is a node Buffer, see https://nodejs.org/api/buffer.html to more exaplanation.

# Example

```javascript
  let raw = new Buffer('|><+-àèìÒù');
  
  let key = 666;
  let enc = BufferCrypt.sdesEncrypt(key, raw);
  let dec = BufferCrypt.sdesDecrypt(key, enc);                                                                                         
  
  console.log(`using key ${key}`);                                                                                                     
  
  console.log(`original  = ${raw.toString()}`);
  console.log(`encrypted = ${enc.toString()}`);
  console.log(`decrypted = ${dec.toString()}`);
  
  console.log('Buffers');
                                                                                          
  console.log("original");
  console.log(raw);
  console.log("encrypted");
  console.log(enc);
  console.log("decrypted");
  console.log(dec)
```
It will produces

```shell
using key 666
original  = |><+-àèìÒù
encrypted = Ln�}�������
                       �5
decrypted = |><+-àèìÒù

Buffers

original
<Buffer 7c 3e 3c 2b 2d c3 a0 c3 a8 c3 ac c3 92 c3 b9>
encrypted
<Buffer 4c 6e dc 7d 13 e9 d9 e9 a0 e9 e5 e9 0b e9 35>
decrypted
<Buffer 7c 3e 3c 2b 2d c3 a0 c3 a8 c3 ac c3 92 c3 b9>
```
# TODO
* Great refactor
* Specs

# Some references
http://homepages.gac.edu/~holte/courses/mcs150-J01/documents/DESinstructions.html
http://homepages.gac.edu/~holte/courses/mcs150-J01/documents/DESexample.html
