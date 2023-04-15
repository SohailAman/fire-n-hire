document.addEventListener('DOMContentLoaded', () => {

    const templatesHeaderConfig = [{
        templateName: ['default config'],
        desktop: {
            sticky: true,
            onScroll: true,
        },
        mobile: {
            sticky: false,
            onScroll: false,
        }
    },
    {
        templateName: ['page-template-page-registration'],
        desktop: {
            sticky: false,
            onScroll: false,
        },
        mobile: {
            sticky: false,
            onScroll: false,
        }
    },
    {
        templateName: ['page-template-page-client-registration'],
        desktop: {
            sticky: false,
            onScroll: false,
        },
        mobile: {
            sticky: false,
            onScroll: false,
        }
    },
    {
        templateName: ['page-template-page-teamregistration'],
        desktop: {
            sticky: false,
            onScroll: false,
        },
        mobile: {
            sticky: false,
            onScroll: false,
        }
    },
    {
        templateName: ['page-template-page-blog'],
        desktop: {
            sticky: true,
            onScroll: false,
        },
        mobile: {
            sticky: true,
            onScroll: false,
        }
    },
    {
        templateName: ['post-template-default', 'single'],
        desktop: {
            sticky: true,
            onScroll: false,
        },
        mobile: {
            sticky: true,
            onScroll: false,
        }
    }
    ]

    const body = document.querySelector('body')
    const header = document.querySelector('.header-container')
    const topBtn = document.querySelector('#nav-add-btn-bottom')

    const screenWidthMobile = 1064;
    let currentTemplate = null;
    let prevCoords = 0;


    const headerWatcher = () => {
        const template = currentTemplate
        const currentCoords = window.scrollY
        const isMobileScreen = () => window.screen.width <= screenWidthMobile;

        if (prevCoords > currentCoords) {

            if (!isMobileScreen()) {
                if (template.desktop.sticky && !header.classList.contains('sticky')) {
                    header.classList.add('sticky')
                }
                if (template.desktop.sticky && template.desktop.onScroll && currentCoords < 10) {
                    if (header.classList.contains('sticky')) {
                        header.classList.remove('sticky')
                    }
                }
            } else {
                if (template.mobile.sticky && !header.classList.contains('sticky')) {
                    header.classList.add('sticky')

                }
                if (template.mobile.sticky && template.mobile.onScroll && currentCoords < 10) {
                    if (!header.classList.contains('sticky')) {
                        header.classList.remove('sticky')
                    }
                }
            }

            topBtn.classList.add('visible')

        } else {

            if (!isMobileScreen()) {
                if (template.desktop.sticky && !template.desktop.onScroll && !header.classList.contains('sticky')) {
                    header.classList.add('sticky')
                } else if (template.desktop.sticky && template.desktop.onScroll && header.classList.contains('sticky')) {
                    header.classList.remove('sticky')
                }
            } else {
                if (template.mobile.sticky && !template.mobile.onScroll && !header.classList.contains('sticky')) {
                    header.classList.add('sticky')
                } else if (template.mobile.sticky && template.mobile.onScroll && header.classList.contains('sticky')) {
                    header.classList.remove('sticky')
                }
            }

            if (topBtn.classList.contains('visible')) {
                topBtn.classList.remove('visible')
            }
        }

        prevCoords = currentCoords
    }

    const templateNameIsMatched = (classNames) => {
        return classNames.every(className => body.classList.contains(className))
    }

    templatesHeaderConfig.forEach(templateItem => {
        if (templateNameIsMatched(templateItem.templateName)) {
            currentTemplate = templateItem
        }
    })

    if (currentTemplate === null) {
        currentTemplate = templatesHeaderConfig[0]
    }

    window.addEventListener('scroll', throttle(headerWatcher, 10));

    function throttle(fn, wait) {
        let time = Date.now();
        return function () {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }

    document.querySelector('#menu-toggle').addEventListener('click', (e) => {
        const menuBtn = e.currentTarget
        menuBtn.classList.toggle('toggled')
        document.querySelector('.main-navigation').classList.toggle('active')
        if (menuBtn.classList.contains('toggled')) {
            body.style.overflow = 'hidden'
            if (topBtn.classList.contains('visible')) {
                topBtn.classList.remove('visible')
            }
        } else {
            body.style.overflow = 'auto'
            topBtn.classList.add('visible')
        }
    })

    document.querySelectorAll('li.menu-item-has-children > a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentNode.classList.toggle('open')
        })
    })
})