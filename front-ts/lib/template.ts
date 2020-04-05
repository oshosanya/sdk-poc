import config from '../config';
import moment from 'moment';
import $ from 'jquery';
import {encodeQueryData} from './utils'
import Requests from "./requests";
import {getContentView} from "./view";

export default class Template {
    static loadTemplate (templateName: string, data: object|string) {
        let templateUrl = config.baseUrl + "/templates/" + templateName;
        console.log(templateUrl);
        let closeSession = false;

        if (templateUrl.includes("loan")) {
            let loanData: any = {
                payment_amount : $("#refundable_amount").val(),
                current_date: moment().format('MMMM-Do-YYYY'),
                current_time: moment().format('h:mm a'),
                rate : $("#rate").val(),
                duration : $("#duration").val(),
                payment_sequence : $("#payment_sequence").val(),
                loan_amount:  $("#loan_amount").val(),
                remaining_amount: (Number($("#commitment-fee").val())).toFixed(2),
                phone_number: $("#phone").val(),
                initial_refundable_amount : $("#initial_refundable_amount").val(),
                refundable_amount : $("#refundable_amount").val(),
                non_refundable_amount : $("#non_refundable_amount").val(),
                commitment_fee : $("#commitment-fee").val()
            };

            loanData.remaining_amount = (Number(loanData.commitment_fee) + Number(loanData.non_refundable_amount)).toFixed(2);

            if (config.baseUrl.includes("staging") || config.baseUrl.includes("local") || config.baseUrl.includes("127.0.0.1")) {
                loanData.partial_loan_js = "/js/v1/sandbox/pg.js";
            } else {
                loanData.partial_loan_js = "/js/v1/production/pg.js";
            }

            let urlEncodedData = encodeQueryData(loanData);
            templateUrl = (templateUrl.indexOf("?") >= 0) ? templateUrl+ "&"+urlEncodedData : templateUrl +"?"+urlEncodedData;
            closeSession =  true;
        }

        return Requests.fetchText(templateUrl).then(function (data) {
            getContentView().empty().append(data);
        })
    }
}