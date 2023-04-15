// Utm tags add/delete in/from session
let collectUtmTags = function(settings) {
    let reset = settings && settings.reset ? settings.reset : false;
    let utmTags = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'];
    let self = window.location.toString();
    let queryString = self.split("?");

    if (reset === true) {
        for (let key of utmTags) {
            sessionStorage.removeItem(key);
        }
    }

    if (queryString.length > 1) {
        let pairs = queryString[1].split("&");
        for (i in pairs) {
            let keyVal = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyVal[0]) === null) {
                sessionStorage.setItem(keyVal[0], decodeURIComponent(keyVal[1]));
            }
        }
    }

}

setTimeout(function() {
    collectUtmTags();
}, 2000);


// collectUtmTags({reset: true}); // reset all utm tags