# take-a-nap [![Build Status](https://travis-ci.org/Urucas/take-a-nap.svg?branch=master)](https://travis-ci.org/Urucas/take-a-nap)
Just another javascript implementation of ```sleep``` to use with await

# Install
```bash
npm install --save take-a-nap
```

# Usage 
```javascript
import { nap } from 'take-a-nap'

async function waiting() {
  await nap(3000)
}
```
