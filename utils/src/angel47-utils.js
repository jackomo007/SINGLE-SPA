export function emitEvent(name, data) {
  dispatchEvent(
    new CustomEvent(name, {
      detail: data,
    })
  );
}

export function listenEvent(name, cb) {
  window.addEventListener(name, cb);
}

// http://single-spa-playground.org/playground/instant-test?name=@angel47/utils&url=8500