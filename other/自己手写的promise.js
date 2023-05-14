const PROMISE_PENNDING = "pendding";
const PROMISE_FULFILLED = "fulfilled";
const PROMISE_REJECT = "reject";

function execFnsWithCatchError(fn, value, resolve, reject) {
  try {
    const reason = fn(value);
    resolve(reason);
  } catch (error) {
    reject(error);
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_PENNDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectjFns = [];
    const resolve = (value) => {
      //调动不到this.then
      //如果状态已经改变就不要改变
      if (this.status === PROMISE_PENNDING) {
        queueMicrotask(() => {
          //if(this.status !== PROMISE_PENNDING) return
          this.status = PROMISE_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((item) => {
            item(this.value);
          });
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_PENNDING) {
        queueMicrotask(() => {
          //if(this.status !== PROMISE_PENNDING) return
          this.status = PROMISE_REJECT;
          this.reason = reason;
          this.onRejectjFns.forEach((item) => {
            item(this.reason);
          });
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (Err) {
      throw new Error(Err);
    }
  }

  //接收2个参数
  then(onFulfilled, onReject) {
    onFulfilled = onFulfilled || ((value) => { return value});
    onReject =
      onReject ||
      ((err) => {
        throw err;
      });
    //如果状态已经改变，就立即执行
    //需要继续传递 所以要返回一个promise
    return new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_FULFILLED) {
        execFnsWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_REJECT) {
        execFnsWithCatchError(onReject, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_PENNDING) {
        onFulfilled &&
          this.onFulfilledFns.push(() => {
            execFnsWithCatchError(onFulfilled, this.value, resolve, reject);
          });
        onReject &&
          this.onRejectjFns.push(() => {
            execFnsWithCatchError(onReject, this.reason, resolve, reject);
          });
      }
    });
  }
  catch(onReject) {
    //以为catch后面还会有所以需要return 
   return this.then(undefined, onReject);
  }
  finally(onFulfilled) {
    this.then(onFulfilled,onFulfilled);
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve("!11");
  //reject("1112")
});

promise
  .then(
    (res) => {
      console.log(res);
      throw new Error('123')
      //return "111";
    },
    (err) => {
      console.log(err);
    }
  )
  .catch((err) => {
    console.log(err);
    return "222"
  }).then(res=>{
    console.log("cathen",res);
  })
  .finally(()=>{
    console.log("finally");
  })
