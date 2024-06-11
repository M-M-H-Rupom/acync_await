// Function Sequence
//callback async
// function mfirst(){ 
//     console.log('hello');
// }
// function msecond(){
//     console.log('goodbye');
// }
// mfirst();
// msecond();
// function cal_sum(sum1,sum2){
//     let total = sum1 + sum2;
//     return total;
// }
// let calculation = cal_sum(10,12);
// console.log(calculation);

// setTimeout(function(){
//     my_func();
// },2000)
// function my_func(){
//     console.log('this is a async function');
// }

// XMLHttpRequest
// function data_func(){
//     let data = new XMLHttpRequest();
//     data.open('GET','text.txt',true);
//     data.onload = function(){
//         if(data.status == 200){
//             document.getElementById('show_data').innerHTML = data.response;
            // document.write(data.response);
//         }else{
//             document.write('no data');
//         }
//     }
//     data.send();
// }
// data_func();

// Promise
// let mypromise = new Promise(function(myResolve,myReject){
//     let req = new XMLHttpRequest();
//     req.open('GET','text.txt',true);
//     req.onload = function(){
//         if(req.status == 200){
//             myResolve(req.response)
//         }else{
//             myReject('Data not found');
//         }
//     }
//     req.send();
// })
// mypromise.then(
//     function(value){
//         console.log(value);
//     },
//     function(error){
//         console.log(error);
//     }
// )
// let p_data = new Promise(function(myResolve,myReject){
//     let data = new XMLHttpRequest();
//     data.open('GET','data.txt',true);
//     data.onload = function(){
//         if(data.status == 200){
//             myResolve(data.response);
//         }else{
//             myReject('No data found');
//         }
//     }
//     data.send();
// }) 
// p_data.then(function(value){
//     document.getElementById('show_data').innerHTML = value;
// },function(error){
//     document.getElementById('show_data').innerHTML = error;
// })

// async await 
async function new_car(){
    let my_prom = new Promise(function(resolve){
        let n_requst = new XMLHttpRequest();
        n_requst.open('GET','https://jsonplaceholder.typicode.com/users',true);
        n_requst.onload = function(){
            if(n_requst.status == 200){
                resolve(n_requst.response);
            }
        }
        n_requst.send();
    });
    let await_data = await my_prom;
    document.getElementById('show_data').innerHTML = await_data;
    let all_user = JSON.parse(await_data);
    // console.log(all_user);
    for(let all_k of all_user){
        for(let a_key in all_k){
            console.log(all_k[a_key]);
        }
    }
}
new_car();
