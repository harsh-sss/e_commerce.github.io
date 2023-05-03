function onDisplay() {
    let x= document.getElementById('services').value;
    let y= document.getElementById('name').value;
    let z = document.getElementById('email').value;
    
    if (x.length==0 || y.length==0 || z.length==0) {
        alert("Please Fill all the fields")
    }
    else{
        alert(y+ ' you have succesfully registred for ' +x);
        alert('Our Team will contact you soon!')
    }
}