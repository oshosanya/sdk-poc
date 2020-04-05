import IChannel from '../IChannel'
import template from "../../lib/template";
export default class Kongapay implements IChannel {
    init() {
        let box = document.getElementById("kongapay");
        box?.addEventListener("click", (e:Event) => this.initiateTransaction({e}));
    }

    initiateTransaction({...args}: { [p: string]: any }): any {
        template.loadTemplate("kongapay/index", {})
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        console.log("Transaction initiated");
    }
}