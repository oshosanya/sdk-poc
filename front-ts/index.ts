require('../node_modules/bootstrap/dist/css/bootstrap.css');


import channels from './channels';
import stringFunctions from './lib/string';

let paymentChannel = document.querySelectorAll(".payment-channel");
paymentChannel.forEach(el => {
    let channelName: string = stringFunctions.toTitleCase(el.getAttribute('data-channel-name') || 'kongapay');
    console.log(channelName);
    let channel:any;
    try {
        channel = new (<any>channels)[channelName]();
    } catch (e) {
        channel = new (<any>channels)['Kongapay']();
    }
    el.addEventListener("click", (e:Event) => channel.initiateTransaction({e}));
});
