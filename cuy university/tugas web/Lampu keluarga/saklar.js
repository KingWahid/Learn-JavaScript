function saklar(jenis) {
    let toggle1 = document.getElementById('toggle-tm1');
    let toggle2 = document.getElementById('toggle-tm2');
    let toggle3 = document.getElementById('toggle-tm3');
    let toggle4 = document.getElementById('toggle-tm4');
    let toggle5 = document.getElementById('toggle-kel1');
    let toggle6 = document.getElementById('toggle-kel2');
    let toggle7 = document.getElementById('toggle-kel3');
    let toggle8 = document.getElementById('toggle-tidur1');
    let toggle9 = document.getElementById('toggle-tidur2');
    let toggle10 = document.getElementById('toggle-mkn1');
    let toggle11 = document.getElementById('toggle-mkn2');
    let toggle12 = document.getElementById('toggle-toilet');
  
    let toggletamu = document.getElementById('toggle-tm5');
    let togglekel = document.getElementById('toggle-kel4');
    let toggletidur = document.getElementById('toggle-tidur');
    let togglemakan = document.getElementById('toggle-makan');
  
    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');
    let lampu4 = document.getElementById('lampu4');
    let lampu5 = document.getElementById('lampu5');
    let lampu6 = document.getElementById('lampu6');
    let lampu7 = document.getElementById('lampu7');
    let lampu8 = document.getElementById('lampu8');
    let lampu9 = document.getElementById('lampu9');
    let lampu10 = document.getElementById('lampu10');
    let lampu11 = document.getElementById('lampu11');
    let lampu12 = document.getElementById('lampu12');
  
    if (jenis == 0) {
      //ruang tamu
      if (toggletamu.checked) {
        lampu1.src = 'img/on.gif';
        lampu2.src = 'img/on.gif';
        lampu3.src = 'img/on.gif';
        lampu4.src = 'img/on.gif';
  
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
        toggle4.checked = true;
      } else {
        lampu1.src = 'img/off.gif';
        lampu2.src = 'img/off.gif';
        lampu3.src = 'img/off.gif';
        lampu4.src = 'img/off.gif';
  
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        toggle4.checked = false;
      }
  
      //ruang keluarga
      if (togglekel.checked) {
        lampu5.src = 'img/on.gif';
        lampu6.src = 'img/on.gif';
        lampu7.src = 'img/on.gif';
  
        toggle5.checked = true;
        toggle6.checked = true;
        toggle7.checked = true;
      } else {
        lampu5.src = 'img/off.gif';
        lampu6.src = 'img/off.gif';
        lampu7.src = 'img/off.gif';
  
        toggle5.checked = false;
        toggle6.checked = false;
        toggle7.checked = false;
      }
  
      //ruang kamar tidur
      if (toggletidur.checked) {
        lampu8.src = 'img/on.gif';
        lampu9.src = 'img/on.gif';
  
        toggle8.checked = true;
        toggle9.checked = true;
      } else {
        lampu8.src = 'img/off.gif';
        lampu9.src = 'img/off.gif';
  
        toggle8.checked = false;
        toggle9.checked = false;
      }
  
      //ruang makan
      if (togglemakan.checked) {
        lampu10.src = 'img/on.gif';
        lampu11.src = 'img/on.gif';
  
        toggle10.checked = true;
        toggle11.checked = true;
      } else {
        lampu10.src = 'img/off.gif';
        lampu11.src = 'img/off.gif';
  
        toggle10.checked = false;
        toggle11.checked = false;
      }
    }
  
    if (jenis == 1) {
      if (toggle1.checked) {
        lampu1.src = 'img/on.gif';
      } else {
        lampu1.src = 'img/off.gif';
      }
  
      if (toggle2.checked) {
        lampu2.src = 'img/on.gif';
      } else {
        lampu2.src = 'img/off.gif';
      }
  
      if (toggle3.checked) {
        lampu3.src = 'img/on.gif';
      } else {
        lampu3.src = 'img/off.gif';
      }
  
      if (toggle4.checked) {
        lampu4.src = 'img/on.gif';
      } else {
        lampu4.src = 'img/off.gif';
      }
  
      if (toggle5.checked) {
        lampu5.src = 'img/on.gif';
      } else {
        lampu5.src = 'img/off.gif';
      }
  
      if (toggle6.checked) {
        lampu6.src = 'img/on.gif';
      } else {
        lampu6.src = 'img/off.gif';
      }
  
      if (toggle7.checked) {
        lampu7.src = 'img/on.gif';
      } else {
        lampu7.src = 'img/off.gif';
      }
  
      if (toggle8.checked) {
        lampu8.src = 'img/on.gif';
      } else {
        lampu8.src = 'img/off.gif';
      }
  
      if (toggle9.checked) {
        lampu9.src = 'img/on.gif';
      } else {
        lampu9.src = 'img/off.gif';
      }
  
      if (toggle10.checked) {
        lampu10.src = 'img/on.gif';
      } else {
        lampu10.src = 'img/off.gif';
      }
  
      if (toggle11.checked) {
        lampu11.src = 'img/on.gif';
      } else {
        lampu11.src = 'img/off.gif';
      }
  
      if (toggle12.checked) {
        lampu12.src = 'img/on.gif';
      } else {
        lampu12.src = 'img/off.gif';
      }
    }
  }