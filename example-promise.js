function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('They are not both Numbers');
    }
  });
}

addPromise(4, 6).then(function(val){
  console.log(val);
}, function(err){
  console.log(err);
});

addPromise(4, 'Hello').then(function(val){
  console.log(val);
}, function(err){
  console.log(err);
});
