import fs from 'node:fs';
import fsPromise from 'node:fs/promises';
import http from 'node:http';
import { setTimeout, setInterval } from 'node:timers/promises';

async function anynomousFunction() {
  const abortController = new AbortController();
  const { signal } = abortController;

  // node:fs, node:fs/promises
  fs.readFile('file.txt', { signal }, (err, data) => {});
  await fsPromise.readFile('file.txt', { signal });
  fs.createReadStream('file.txt', { signal });

  // node:http
  http.get('http://example.com', { signal }, (res) => {});

  // fetch
  fetch('http://example.com', { signal });

  // node:timers/promises
  setTimeout(1000, undefined, { signal });
  setInterval(1000, undefined, { signal });

  // axios
  // axios.get('http://example.com', { signal });
}

export async function reallyLongRunningTask(signal?: AbortSignal) {
  console.log('Starting really long running task...');

  for (let i = 1; i <= 1_000; i++) {
    await setTimeout(1_000, undefined, { signal });
    console.log(i);
  }
}
