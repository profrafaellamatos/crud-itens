const form = document.getElementById("crudForm")
const input = document.getElementById("itemName")

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let item = input.value.trim()

    if(item == ""){
        input.className = "form-control is-invalid"
    }else{
        input.className = "form-control"
    }
})