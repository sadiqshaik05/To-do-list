let count=1
document.getElementById('time').innerHTML=Date().slice(0,15)
function addTask(){
    let text=document.getElementById('inp').value 
    if(text.trim()==' '){
        alert("please enter a task")
    }
    else{
        let item=document.createElement('div')
        item.id=count
        item.className="task"
        count++

        let s=document.createElement('span')
        s.innerHTML=text
        let img=document.createElement('img')
        img.src="https://tse2.mm.bing.net/th/id/OIP.RdPJ-XwmyEpBMPYWTem2pAHaHa?pid=Api&P=0&h=180" 

        img.onclick=function deletetask(){
            let child=document.getElementById(item.id)
            document.getElementById('list').removeChild(child)
        }

        item.appendChild(s)
        item.appendChild(img)

        document.getElementById('list').appendChild(item)
        document.getElementById('inp').value=''
    }
}