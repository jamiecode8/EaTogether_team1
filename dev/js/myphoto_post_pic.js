function doFirst(){
    document.getElementById('pho_theFile').onchange = fileChange;
};

function fileChange(){
    let file = document.getElementById('pho_theFile').files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(){
        let pho_image = document.getElementById('pho_image');
        pho_image.src = readFile.result;
        pho_image.style.maxWidth = '760px';
        pho_image.style.maxHeight = '422px';
        pho_image.style.position = 'absolute';
        pho_image.style.top = '50%';
        pho_image.style.left = '50%';
        pho_image.style.transform = 'translate(-50%,-50%)';
        
        if( pho_image.src != ""){
            let pho_input_change = document.getElementsByClassName('pho_input_change')[0]; 
            let pho_picUpload = document.getElementsByClassName('pho_picUpload')[0]; 
            let pho_picForm = document.getElementsByClassName('pho_picForm')[0];  
            pho_picUpload.style.top = '86%';
            pho_picUpload.style.left = '86%';
            pho_input_change.style.top = '86%';
            pho_input_change.style.left = '86%';
            pho_picForm.style.display = 'none';
        };
    });
};
window.addEventListener('load',doFirst);



