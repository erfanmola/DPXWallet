import Toastify from 'toastify-js';
import WebApp from '@twa-dev/sdk';

let Audios = {};

const Utils = {
    
    // Wrapper for Toastify function
    Toast: (text, duration = 2000) => { 
        Toastify({text: text, duration: duration, gravity: 'top', position: 'left', style: {background: 'var(--tg-theme-text-color)', color: 'var(--tg-theme-bg-color)'}}).showToast(); 
    },

    // Send request to DPX API & return reponse
    DPXSendRequest: async (endpoint = '/', data = [], method = 'POST', i18n = null) => {

        const FD = new FormData();

        for (const [key, value] of Object.entries(data)) {
            
            FD.append(key, value);

        }
        
        try {

            var endpoint_url = `${ import.meta.env.VITE_APP_URL.toString().replace(/\/+$/, '') }/api`;

            let data = { 'method': method };

            if (method === 'POST') {

                data['body'] = FD;

            }

            var request = await fetch(`${ endpoint_url }${ endpoint }`, data);

            var result = await request.json();

        } catch(Exception) {

            result = { status: 'error' };

        }

        if (result.status !== 'success') {

            if ('info' in result) {

                if (i18n) {

                    Utils.Toast(i18n.t(`api.errors.${ result.error }`));

                }else{
                
                    Utils.Toast(result.info);

                }
                

            }else{

                Utils.Toast("Error");

            }

            return null;

        }else{

            return result;

        }

    },

    // Preload audio file
    PreLoadAudio: (name) => {
            
        if (Audios[name] === undefined) {
        
            Audios[name] = new Audio(`${import.meta.env.BASE_URL}assets/sounds/${ name }`);

        }

    },

    // Play an audio file
    PlayAudio: (name) => {

        Audios[name].play();

    },

    // a prefered way of showing Telegram WebApp prompts and handling it's callback
    Prompt: (title = null, text, options) => {

        if (WebApp.isVersionAtLeast('6.2')) {

            WebApp.HapticFeedback.notificationOccurred('warning');

            let buttons = [];

            options.forEach((option, key) => {
                
                let id = Math.random().toString(36).slice(2, 7);
                options[key]['id'] = id;

                buttons.push({
                    id: id,
                    type: option.type,
                    text: option.text
                });

            });

            WebApp.showPopup({
                title: title,
                message: text,
                buttons: buttons
            });

            let OnPopupClosedHanlder = (data) => {

                options.forEach((option) => {

                    if (option.id === data['button_id']) {
                        
                        option.event();

                    }

                });

                WebApp.offEvent('popupClosed', OnPopupClosedHanlder);

            };

            WebApp.onEvent('popupClosed', OnPopupClosedHanlder);

        }else{

            Utils.Toast('Unsupported');

        }

    },

    // Scan QRCode if supported
    ScanQRCode: (text, onReceive) => {

        if (WebApp.isVersionAtLeast('6.4')) {

            WebApp.HapticFeedback.notificationOccurred('warning');

            WebApp.showScanQrPopup({
                text: text,
            });

            let OnQRTextReceivedHanlder = (data) => {

                if (onReceive(data)) {

                    WebApp.offEvent('qrTextReceived', OnQRTextReceivedHanlder);
                    WebApp.closeScanQrPopup();

                }

            };

            WebApp.onEvent('qrTextReceived', OnQRTextReceivedHanlder);

        }else{

            Utils.Toast('Unsupported');

        }

    },

    // Hide keyboard when user clicks enter
    hideKeyboardOnEnter: (event) => { if (event.keyCode === 13) { event.target.blur(); } },

    // Copy text to clipboard
    copyTextToClipboard: (text) => {

        if (!navigator.clipboard) {
    
            var textArea = document.createElement("textarea");
            textArea.value = text;
            
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
          
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
          
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch (err) {
        
            }
          
            document.body.removeChild(textArea);
    
          return;
          
        }
    
        navigator.clipboard.writeText(text);
    
    },

    // Get wallet/secret from LocalStorage
    GetWallet(param = null) {

        let info = window.localStorage.getItem(`wallet_user_${ WebApp.initDataUnsafe.user.id }`);

        if (info) {

            if (param) {

                return JSON.parse(info)[param];

            }else{
                
                return JSON.parse(info);

            }

        }else{

            return null;

        }

    },

    // Set wallet/secret to LocalStorage
    SetWallet(wallet = null, secret = null) {

        if (wallet === null) {

            wallet = Utils.GetWallet('wallet');

        }else if (secret === null) {

            secret = Utils.GetWallet('secret');

        }

        window.localStorage.setItem(`wallet_user_${ WebApp.initDataUnsafe.user.id }`, JSON.stringify({
            wallet: wallet,
            secret: secret,
        }))

    },

    // a hacky trick to fix mispositioning of UI elements when keyboard opens
    HandleInputFocus: () => {

        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

    }

};

export default Utils;