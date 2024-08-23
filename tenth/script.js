console.log('One');
const hello = () => {
    console.log('Hello');
}
setTimeout(hello, 2000) // will execute the hello code after 2000 miliseconds or 2 seconds (1s = 1000ms)
setTimeout(() => {
    console.log(`1 + 2 = 3`); //cannot take parameters
}, 4000);
console.log('Two');
//Callbacks
const sum = (a, b) => {
    console.log(`a + b = ${a + b}`);
}
const calculateSum = (a, b, sumCallback) => {
    sumCallback(a, b);
}
calculateSum(5, 4, sum);
const calculateProduct = (a, b, product) => {
    product(a, b);
}
calculateProduct(5, 4, (a, b) => {
    console.log(`a * b = ${a * b}`);
})
calculatefactorial = (num) => {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        let factorial = num * calculatefactorial(num - 1);
        return factorial;
    }
}
factorialValue = (num, callback) => {
    let result = callback(num);
    console.log(`Factorial of ${num} = ${result}`);
}
factorialValue(5, calculatefactorial);
setTimeout(() => {
    console.log(console.log('Hello Js')) //setTimeout accepts callback
}, 5000);
//Callback hell
for(let i = 0; i < 5; i++) {
    let str = '';
    for(let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(str);
}
const getdata = (dataId, getNextData, getThirdData) => {
    setTimeout(() => {
        console.log(`Data Id = ${dataId}`);
        if(getNextData) {
            getNextData(() => {
                if(getThirdData) {
                    getThirdData();
                }
            });
        }
    }, 2000);
}
getdata('nilav.talukdar', () => {
    getdata('nilavtalukdar85', () => {
        getdata('nilavtalukdar49');
    });
});
const printNumbers = (num1, num2, num3) => {
    setTimeout(() => {
        console.log(num1);
        if(num2) {
            num2(() => {
                if(num3) {
                    num3( () => {
                        if(num3) {
                            num3();
                        }
                    }); 
                }
            });
        }
    }, 6000);
}
printNumbers(1, () => {
    printNumbers(2, () => {
        printNumbers(3);
    });
});
let promiseDone = new Promise((resolve, reject) => {
    console.log('I am a promise')
    resolve('Promise resolved');
});
let promiseNotDone = new Promise((resolve, reject) => {
    console.log('I am not a promise');
    reject('Some error occured');
});
console.log('Hello Javascript');
const getUserId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`user id = ${id}`); 
            resolve('success'); 
        }, 3000);
    });
}
let data = getUserId('nilav.talukdar');
console.log(data);
let helloJs = new Promise((resolve, reject) => {
    console.log('Hello Javascript');
    resolve('success');
});
helloJs.then((res) => {
    console.log('Promise fullfilled');
    console.log(res);
})
let helloWorld = new Promise((resolve, reject) => {
    console.log('Hello World');
    reject('Error');
})
helloWorld.catch((err) => {
    console.log('Promise rejected');
    console.log(err);
})
const API_1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data 1');
            resolve('success');
        }, 4000);
    });
}
const API_2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data 2');
            resolve('success');
        }, 4000);
    });
}
const data1 = API_1();
console.log('Fetching Data 1......');
data1.then((res) => {
    console.log(res);
    console.log('Fetching Data 2......');
    const data2 = API_2();
    data2.then((res) => {
        console.log(res);
    });
});
const user_Data1 = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User Id =', userId);
            resolve('success');
        });
    }, 2000);
}
const user_Data2 = (password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Password =', password);
            resolve('success');
        });
    }, 2000);
}
console.log('Getting your user id......');
let userId = user_Data1('nilav.talukdar');
userId.then((res) => {
    console.log(res);
    console.log('Getting your password......');
    return user_Data2('ha3bf9162y#2004');
}).then((res) => {
    console.log(res);
});
const number = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            resolve('success');
        }, 2000);
    });
}
number(1).then(() => {
    return number(2);
}).then(() => {
    return number(3);
})
//Async await
const api = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data recieved');
            resolve(200);
        }, 2000);
    });
}
async function getdata() {
    await api();
    await api();
}
(async function () { //async functions always returns a promise
    console.log('Hello'); //Arrow functions doesn't work with async keyword
})(); //IIFE (immediately invoked function expression), we can call this function only once, generally used in apis