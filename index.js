document.addEventListener('DOMContentLoaded', ()=>{
    
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        const formInput = document.querySelector('#state')
        
 fetch("https://api.openbrewerydb.org/breweries")

    .then(res => res.json())
    .then(data => {console.log(data)
        data.forEach(objectData =>{
            
            if(objectData.state === formInput.value){
                submitState(objectData.website_url)
            }

// const breweries = objectData.state
// console.log(breweries)
// for(let i = 0; i < objectData.state.length; i++){
//     console.log(breweries[i])
// }

     })
                   
     })
    })
   
    

document.getElementById("title").style.textAlign = "justify"
    const likeBox = document.getElementById("likeBox")
    const myButton = document.getElementById("myButton")
    
    myButton.addEventListener("click", event => {
        likeBox.style.backgroundColor = "blue"
        likeBox.textContent = "YES!"
        
    })

    myButton.addEventListener("mouseover", event =>{
       
        if(likeBox.textContent !== "YES!"){
            likeBox.style.backgroundColor = "red"
        }else{
            likeBox.style.backgroundColor = "blue"
        }
    })

    myButton.addEventListener("mouseout", event =>{
        likeBox.style.backgroundColor = "white"

        
    })

})

function submitState(breweryUrl){
    const div = document.createElement('div')
let aTag = document.createElement('a')
let btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
aTag.textContent = `${breweryUrl} `
aTag.href = breweryUrl
div.appendChild(aTag)
div.appendChild(btn)


document.querySelector('#url_container').append(div)
}

function handleDelete(e){
    e.target.parentNode.remove()
}



