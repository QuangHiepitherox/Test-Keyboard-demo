
    let root = document.getElementById('root').value
    let CL = document.getElementById('CL')
    let NL = document.getElementById('NL')
    window.onkeydown = function(e){
        let event = e.key;
        let codes = e.which;
        let code1 = e.code
        console.log(codes)
        let keyboardnum = document.getElementById(`buttons${codes}`)
        let keyboard = document.getElementById('buttons16s')
        let keyboard1 = document.getElementById('buttons17s')
        console.log(e)
        if(codes){
            keyboardnum.classList.add('buttons');
            
            if(event == 'CapsLock'){
                CL.classList.toggle('lightyellow')
            }
            else if(event == 'NumLock'){
                NL.classList.toggle('lightyellow')
            }
            else if(event == 'ScrollLock'){
                SL.classList.toggle('lightyellow')
            }
        }
        if(code1 =='ShiftRight'){
            keyboard.classList.add('buttons');
        }
        else if(code1 =='AltRight'){
            keyboard1.classList.add('buttons');
        }

    }

