// const sentence = "hello there from lighthouse labs";


// process.stdout.write


const typewriter = function (str, callback) {

  // setTimeout(()=>{
  //   if (str.length === 0) {
  //     callback('\n');
  //     return;
  //   }
  //   callback(str[0]);
  //   typewriter(str.slice(1), callback);
  // }, 100);

  for (let i = 0; i < str.length; i = i + 1){
    setTimeout(()=>{
      callback(str[i]);
      if (i === str.length - 1) {
        callback('\n');
      }
    }, 50 + i*50);
  }
};


// typewriter('abc', ele => process.stdout.write(ele));