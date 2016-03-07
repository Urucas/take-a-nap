const sleep = time => {
  return new Promise( (res, rej) => {
    setTimeout( _ => { res() }, time)
  })
}

async function nap(time = 1000) {
  await sleep(time)
}

export { sleep, nap }