jQuery('.pum')
    .on('pumBeforeClose', function() {
        var $iframe = jQuery('iframe', jQuery(this)),
            src = $iframe.prop('src');
        $iframe.prop('src', '').prop('src', src.replace('?autoplay=1', ''));
    });

jQuery(document).ready(function($) {
    function getAllUrlParams() {

        // get query string from url (optional) or window
        var queryString = window.location.search.slice(1);

        // we'll store the parameters here
        var obj = {};

        // if query string exists
        if (queryString) {

            // stuff after # is not part of query string, so get rid of it
            queryString = queryString.split('#')[0];

            // split our query string into its component parts
            var arr = queryString.split('&');

            for (var i = 0; i < arr.length; i++) {

                // separate the keys and the values
                var a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                var paramName = a[0];
                var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];

                // (optional) keep case consistent
                paramName = paramName.toLowerCase();
                if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {

                    // create key if it doesn't exist
                    var key = paramName.replace(/\[(\d+)?\]/, '');

                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/)) {

                        // get the index value and add the entry at the appropriate position
                        var index = /\[(\d+)\]/.exec(paramName)[1];
                        obj[key][index] = paramValue;
                    } else {
                        // otherwise add the value to the end of the array
                        obj[key].push(paramValue);
                    }
                } else {
                    // we're dealing with a string
                    if (!obj[paramName]) {
                        // if it doesn't exist, create property
                        obj[paramName] = paramValue;
                    } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                        // if property does exist and it's a string, convert it to an array
                        obj[paramName] = [obj[paramName]];
                        obj[paramName].push(paramValue);
                    } else {
                        // otherwise add the property
                        obj[paramName].push(paramValue);
                    }
                }
            }
        }

        return obj;
    }

    let params = getAllUrlParams();
    let savedGet = localStorage.getItem('utm_params');

    if (typeof savedGet != 'string') {
        savedGet = {};
    } else {
        savedGet = JSON.parse(savedGet);
    }

    if (params) {
        for (let param in params) {
            if (~param.indexOf('utm')) {
                savedGet[param] = params[param];
            }
        }

        localStorage.setItem('utm_params', JSON.stringify(savedGet));

    }
});

const getCookie = cname => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Footer subscribe form sumbit handler
const form = document.querySelector(".subscription-widget__form #mc-embedded-subscribe-form");
if (form) {
    form.addEventListener("submit", (event) => {
        dataLayer.push({
            'event': 'subscribe_form_submission'
        }); // google tag manager event
    });
}

// Page VENTURE CAPITAL 150vc subscribe form sumbit handler
const form150vc = document.querySelector(".mc_embed_signup-150vc #mc-embedded-subscribe-form");

if (form150vc) {
    form150vc.addEventListener("submit", (event) => {
        dataLayer.push({
            'event': 'Form_Submission-150VC'
        }); // google tag manager event
    });
}


// set entry point
if (getCookie('entryPoint').length === 0) {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie = `entryPoint=${location.href}; expires=${tomorrow}; domain=lemon.io; path=/`
}

// Mixpanel

// session start
if (getCookie('sessionStart').length === 0) {
    let medium = sessionStorage.getItem('utm_medium') !== null ? sessionStorage.getItem('utm_medium') : ''
    let source = sessionStorage.getItem('utm_source') !== null ? sessionStorage.getItem('utm_source') : ''
    let campaign_name = sessionStorage.getItem('utm_campaign') !== null ? sessionStorage.getItem('utm_campaign') : ''
    let campaign_id = sessionStorage.getItem('utm_id') !== null ? sessionStorage.getItem('utm_id') : ''

    document.cookie = 'sessionStart=true; domain=lemon.io; path=/'

    mixpanel.track('session_start')
    mixpanel.register_once({
        "platform": "lemon",
        "user_login_status": "not logged in"
    });

    mixpanel.identify();

    mixpanel.people.set({
        'source': medium,
        'medium': source,
        'campaign_name': campaign_name,
        'campaign_id': campaign_id
    });
}


let pathname = location.pathname.replace(/\//g, '')

mixpanel.track('lemon_page_view', {
    'page_name': pathname !== '' ? pathname : 'home',
})

const addMixpanelEvents = (selector, eventName) => {
    const cta = document.querySelectorAll(selector);
    if (cta) {
        cta.forEach((button) => {
            button.addEventListener("click", () => {
                mixpanel.track(eventName)
            });
        });
    }
}

addMixpanelEvents('.lmn-magic-box', 'lemon_hire_talent_menu_button');
addMixpanelEvents('.lmn-magic-box', 'lemon_cta_all_main');
addMixpanelEvents('.lmn-apply-as-dev', 'lemon_apply_as_dev_menu_button');
addMixpanelEvents('.lmn-login', 'lemon_login_menu_button');
addMixpanelEvents('.menu-item-14076 a', 'lemon_blog_menu_button');
addMixpanelEvents('.menu-item-986 a', 'lemon_for_devs_menu_button');
addMixpanelEvents('.menu-item-1576 a', 'lemon_about_us_menu_button');
addMixpanelEvents('.menu-item-2465 a', 'lemon_resources_menu_button');
addMixpanelEvents('.lemon_cta_1_main', 'lemon_cta_1_main');
addMixpanelEvents('.lemon_cta_2_main', 'lemon_cta_2_main');
addMixpanelEvents('.lemon_cta_3_main', 'lemon_cta_3_main');
addMixpanelEvents('.lemon_cta_4_main', 'lemon_cta_4_main');
addMixpanelEvents('.lemon_cta_5_main', 'lemon_cta_5_main');