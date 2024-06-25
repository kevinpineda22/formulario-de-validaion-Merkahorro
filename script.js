const form =document.getElementById('form')
form.addEventListener('submit', validar)

   async function validar(event) { 
    event.preventDefault()
    const form = new FormData(this)
     const response =  await fetch(this.action,{
        method: this.method,
        body:form,
        headers: {
            'Accept':' application/JSON'
        }
    }) 
    if(response.ok){
        this.reset()
        alert('Gracias por llenar en formulario')
    }
    
}