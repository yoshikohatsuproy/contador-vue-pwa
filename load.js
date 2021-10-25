if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        reg => console.log("Se registró")
    ).catch(
        error => console.log(error)
    )
}