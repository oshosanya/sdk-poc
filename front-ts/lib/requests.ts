import $ from 'jquery';

export default class Requests {
    static fetchText(url: string): Promise<any> {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                dataType: "text",
                beforeSend: function () {
                    // UIHelper.resetPinPadButtons();
                },
                success: function (response) {
                    resolve(response)
                },
                error: function (error) {
                    reject(error)
                }
            })
        })
    }

    static fetch (url: string, data: any): Promise<any> {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                data: data,
                dataType: "json",
                beforeSend: function () {
                    // UIHelper.preloader();
                },
                success: function (response) {
                    resolve(response)
                },
                error: function (error) {
                    reject(error)
                }
            })
        })
    }
    
    static postRequest (url: string, data: any, timeout: number): Promise<any> {
        timeout = timeout || 30000;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                data: data,
                method: "POST",
                cache: false,
                dataType: "json",
                beforeSend: function (request) {
                    request.setRequestHeader("X-CSRF-Token", data._csrf);
                },
                success: function (response) {
                    resolve(response)
                },
                error: function (error) {
                    if(error.status === 400) {
                        resolve(error)
                    } else {
                        reject(error)
                    }
                },
                timeout : timeout
            })
        })
    }

    static putRequest (url: string, data: any, timeout: number): Promise<any> {
        timeout = timeout || 30000;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                data: data,
                method: "PUT",
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {
                    resolve(response)
                },
                error: function (error) {
                    reject(error)
                },
                timeout: timeout
            })
        })
    }

    static getRequest (url: string, timeout: number): Promise<any> {
        timeout = timeout || 30000;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {
                    resolve(response)
                },
                error: function (error) {
                    reject(error)
                },
                timeout: timeout
            })
        })
    }
}