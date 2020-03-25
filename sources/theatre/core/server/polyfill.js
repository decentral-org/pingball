function polyfillWebToServer(){
  if (typeof window === 'undefined') {
      global.window = {};
      global.window.requestAnimationFrame=function(){
          setImmediate(()=>f(Date.now()))
      }
  }
}

export {polyfillWebToServer}
