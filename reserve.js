document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        //event.preventDefault()
        let object = {};
        const formdata = new FormData(this);
        formdata.forEach((value,key) =>
            object[key] = value
        );
        const name=object.name;
        delete object.name;
        window.localStorage.setItem(name,JSON.stringify(object));
    });
    
});