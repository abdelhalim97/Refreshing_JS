let ourInput=document.getElementById("nb")
let changeMe=document.getElementById("changeMe")
let checking=document.getElementById("checking")
let checkDiv=document.getElementById("checkDiv")
handleClear=()=>{ourInput.value=(10/3).toFixed(2)}//parseFloat(string)
handleIncrement=()=>ourInput.value*=.01
handlechangeMe=()=>{
    let initialH2="dont "+changeMe.innerHTML
    changeMe.innerHTML=initialH2
}
typeName=()=>{
    const yourName=prompt("yourName")
    confirm("is ur name correct?")? alert("welcome",yourName):alert("wrong")
}
// screenWidth=()=>{
//     alert(screen.width)
// }
randomNumber=(param)=>{
    ourDiv=document.getElementById(param)
    let randomNumber = Math.floor(Math.random()*2)
    
    randomNumber===0?ourDiv.innerHTML="0":ourDiv.innerHTML="1"
}
checking.checked?checkDiv.innerHTML="this div is checked" :checkDiv.innerHTML="this div isnt checked"
var newWindow

openWindow=()=>{
    newWindow=window.open("test.html","","width=250 ,height=50")
    newWindow.document.innerHTML('<p>f</p>')
}
closeWindow=()=>{
    newWindow.close()
}
addMouseOver=()=>{
    document.getElementById('imgToChange').src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
}
MouseOut=()=>{
    document.getElementById('imgToChange').src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
}
grayMe=()=>{
    let newElement=document.createElement('span')
    let newCreateTextNode=document.createTextNode("this is added using createTextNode")
    document.getElementById("grayMe").appendChild(newElement)
    newElement.appendChild(newCreateTextNode)
    document.getElementsByTagName('span')[0].setAttribute("class","grayMe")
    document.getElementById("grayMe").addEventListener("click",openWindow)
}
fillInput=(ourInput)=>{
// let selectValue=document.getElementById('city').value
let inputValue=document.getElementById('fillMe')
console.log(ourInput==='Sousse')
if(ourInput==='Sousse'){
    inputValue.value="Sousse"
    return 0
}
inputValue.value='Tunis'

}