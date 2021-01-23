let editbtn = document.querySelector("#edit");

window.addEventListener("load", function(){
    editbtn.addEventListener("change", async function(e){
        e.preventDefault();
        let file = editbtn.files[0];
            let formData = new FormData();
        formData.append("user" , file);
        let obj = await axios.patch("http://localhost:3000/user/updateprofilephoto" , formData);
        console.log(obj);
        if(obj.data.message){
            window.location.reload();
        }
    })
})