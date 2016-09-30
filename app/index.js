import BufferCrypt from './models/buffer_crypt.js';

//Creates a node Buffer with you raw text and keep your decimal key.
//Calling BufferCrypt.sdesEncrypt(keyRaw, buffer) you can encrypt the buffer
//Calling BufferCrypt.sdesDecrypt(keyRaw, buffer) you can descrypt the buffer
//
//Example:
//
/*
 *  let raw = new Buffer('|><+-àèìÒù');
 *  let key = 666;
 *  let enc = BufferCrypt.sdesEncrypt(key, raw);
 *  let dec = BufferCrypt.sdesDecrypt(key, enc);
 *
 *  console.log(`using key ${key}`);
 *
 *  console.log(`original  = ${raw.toString()}`);
 *  console.log(`encrypted = ${enc.toString()}`);
 *  console.log(`decrypted = ${dec.toString()}`);
 *  console.log('\nBuffers\n');
 *
 *  console.log("original");
 *  console.log(raw);
 *  console.log("encrypted");
 *  console.log(enc);
 *  console.log("decrypted");
 *  console.log(dec);
 */

module.exports = BufferCrypt
