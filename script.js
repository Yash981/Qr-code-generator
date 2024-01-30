const generateQRCode = () => {
  var imageTitle = document.querySelector(".imageTitle");
  var inputField = document.querySelector(".inputfield");
  var text = document.getElementById("urlInputField").value;
  var qrcodeContainer = document.getElementById("qrcode");
  var dqrcode = document.getElementById('downloadQR');
  var copyqrcode = document.getElementById('copyQR');

  qrcodeContainer.innerHTML = "";
  qrcodeContainer.style.border = "none";

  if (text.trim() !== "") {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 150,
      height: 160,
    });

    qrcodeContainer.style.border = "15px solid #F2F5F9";
    inputField.style.visibility = "hidden";
    inputField.style.display = "none";
    imageTitle.style.position = "absolute";
    imageTitle.style.top = "50px";
    imageTitle.style.left = "50px";
    dqrcode.style.display = 'block'
    dqrcode.style.visibility = 'visible'
    copyqrcode.style.display = 'block'
    copyqrcode.style.visibility = 'visible'
  }
};

const downloadQRCode = () =>{
    var qrcodeContainer = document.getElementById('qrcode');
    var imgDataUrl = qrcodeContainer.querySelector('img').src;
    

    
    var link = document.createElement('a');
    link.href = imgDataUrl;
    link.download = 'qrcode.png'; 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

const copyQRcode = () =>{
    var qrcodeContainer = document.getElementById('qrcode');
    var imgDataUrl = qrcodeContainer.querySelector('img').src;
    navigator.clipboard.writeText(imgDataUrl);

}