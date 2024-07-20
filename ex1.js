const arr = ["asdvxzz", "asdf", "asd", "asdqwewqe"]
let string = ''
for(let i=1; i<arr.length; i++){
  let stringCheck = ''
  for(let j=1; j<=arr[i].length; j++){
    if(arr[i-1].substr(0, j) == arr[i].substr(0, j)){
        stringCheck = arr[i].substr(0, j)
    }
  }
  if(stringCheck == ''){
    console.log("no value")
    return "no value"
  } else {
    if(stringCheck.length < string.length ){
      string = stringCheck
    } else if(i==1){
      string = stringCheck
    }
  }
}
console.log(string)
return string