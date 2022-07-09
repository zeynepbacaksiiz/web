$(function () {

    let INNER_WIDTH=$(window).width();

    function scroolCheck() {
        INNER_WIDTH=$(window).width();
        const tabletWidth=1200;
        console.log($(window).scrollTop())
        if($(window).width()>tabletWidth)
        {
            if ($(window).scrollTop()>$('.sec-1').position().top-34)
                $(".brand-logo path").addClass("blue")
            else
                $(".brand-logo path").removeClass("blue")
        }
        else{
            if ($(".swipe-area").position().left+$(".swipe-area").width()<$(".brand-logo").position().left || $(window).scrollTop()>$('.sec-1').position().top-34)
                $(".brand-logo path").addClass("blue")
            else
                $(".brand-logo path").removeClass("blue")
        }
    }
    scroolCheck();
    $(window).scroll(function (event) {
        scroolCheck();
    });




    //EFFECTS*************


    class swipe{
        constructor(){
            this.flightPath = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: 1200, y: 0},
                ]
            }
            this.flightPath2 = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: -1200, y: 0},
                ]
            }
            this.controller=null;

            this.tween = null;
            this.tween2 = null;
            this.tween3 = null;
            this.tweenWheel = null;
    
            this.scene=null;
            this.scene2=null;
            this.scene3=null;
            this.scene4=null;
        }

        
        createController(){
            this.controller=new ScrollMagic.Controller();
        }
        createTweens (){
            this.tween=new TimelineLite()
            this.tween.add(
                TweenLite.to(".swipe-area", 1, {
                    bezier: this.flightPath,
                    ease: Power1.easeInOut
                })
            )
            this.tween2=new TimelineLite()
            this.tween2.add(
                TweenLite.to(".scooter-boy", 1, {
                    bezier: this.flightPath,
                    ease: Power1.easeInOut
                })
            )
            this.tween3=new TimelineLite()
            this.tween3.add(
                TweenLite.to(".new", 1, {
                    bezier: this.flightPath2,
                    ease: Power1.easeInOut
                })
            )
            this.tweenWheel=new TimelineLite()
            this.tweenWheel.add(
                TweenLite.to(".back-tires,.front-tires", 1, {rotation:1000,ease: Power1.easeInOut}));

        }
        createScenes() {

            this.scene = new ScrollMagic.Scene({
                triggerElement: "section.welcome",
                duration: 3000,
                triggerHook:0,
                offset:0
            })
                .setTween(this.tween)
                // .addIndicators()
                .setPin("section.welcome")
                .addTo(this.controller);

            this.scene2 = new ScrollMagic.Scene({
                // triggerElement: "section.welcome",
                duration: 3000,
                triggerHook:0,
                offset:0
            })
                .setTween(this.tween2)
                .addTo(this.controller);

            this.scene3 = new ScrollMagic.Scene({
                triggerElement: "section.welcome",
                duration: 3000,
                triggerHook:0,
                offset:0
            })
                .setTween(this.tween3)
                .addTo(this.controller);

            this.scene4 = new ScrollMagic.Scene({
                triggerElement: "section.welcome",
                duration: 3000,
                triggerHook:0,
                offset:0
            })
                .setTween(this.tweenWheel)
                .addTo(this.controller);
        }

        resetController(){
            this.controller.destroy(true)
            this.controller=null;
        }
        resetTween(){
            this.tween.clear();
            this.tween2.clear();
            this.tween3.clear();
            this.tweenWheel.clear();
            this.tween = null;
            this.tween2 = null;
            this.tween3 = null;
            this.tweenWheel = null;
        }
        destroyScene(){
            this.scene.remove();
            this.scene2.remove();
            this.scene3.remove();
            this.scene4.remove();
            this.scene=null;
            this.scene2=null;
            this.scene3=null;
            this.scene4=null;
        }

        start(){
            this.createTweens();
            this.createController();
            this.createScenes();
        }
        finish(){
            this.resetController();
            this.destroyScene();
            this.resetTween();
        }
        switchMobile(){
            this.flightPath = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: 950, y: 0},
                ]
            }
            this.flightPath2 = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: -950, y: 0},
                ]
            }
            this.finish();
            this.start();
        }
        switchDesktop(){
            this.flightPath = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: 1800, y: 0},
                ]
            }
            this.flightPath2 = {
                // curviness: 1,
                autoRotate: false,
                values: [
                    {x: -1800, y: 0},
                ]
            }
            this.finish();
            this.start();
        }
    }
    function swipeArea() {
        const flightPath = {
            // curviness: 1,
            autoRotate: false,
            values: [
                {x: 1800, y: 0},
            ]
        }
        const flightPath2 = {
            // curviness: 1,
            autoRotate: false,
            values: [
                {x: -1800, y: 0},
            ]
        }

        const tween = new TimelineLite()
        tween.add(
            TweenLite.to(".swipe-area", 1, {
                bezier: flightPath,
                ease: Power1.easeInOut
            })
        )

        const tween2 = new TimelineLite()
        tween2.add(
            TweenLite.to(".scooter-boy", 1, {
                bezier: flightPath,
                ease: Power1.easeInOut
            })
        )
        const tween3 = new TimelineLite()
        tween3.add(
            TweenLite.to(".new", 1, {
                bezier: flightPath2,
                ease: Power1.easeInOut
            })
        )

        const tweenWheel = new TimelineLite()
        tweenWheel.add(
            TweenLite.to(".back-tires,.front-tires", 1, {rotation:1000,ease: Power1.easeInOut}));



        const controller =new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            triggerElement: "section.welcome",
            duration: 3000,
            triggerHook:0,
            offset:0
        })
            .setTween(tween)
            // .addIndicators()
            .setPin("section.welcome")
            .addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            // triggerElement: "section.welcome",
            duration: 3000,
            triggerHook:0,
            offset:0
        })
            .setTween(tween2)
            // .addIndicators()
            // .setPin("section.welcome")
            .addTo(controller);

        const scene3 = new ScrollMagic.Scene({
            triggerElement: "section.welcome",
            duration: 3000,
            triggerHook:0,
            offset:0
        })
            .setTween(tween3)
            // .addIndicators()
            // .setPin("section.welcome")
            .addTo(controller);

        const scene4 = new ScrollMagic.Scene({
            triggerElement: "section.welcome",
            duration: 3000,
            triggerHook:0,
            offset:0
        })
            .setTween(tweenWheel)
            // .addIndicators()
            // .setPin("section.welcome")
            .addTo(controller);
    }

    let swiper=new swipe();
    swiper.start();

    let t1Controller =null;
    let t2Controller =null;
    let t3Controller =null;

    function startSectionScene(){
        t1Controller=section("#t-1");
        t2Controller=section("#t-2");
        t3Controller=section("#t-3");
    }
    function removeSectionScene(){
        // t1Controller.remove();
        // t2Controller.remove();
        // t3Controller.remove();
    }
    function section(id) {
        const flightPath = {
            curviness: 1,
            autoRotate: false,
            values: [
                {x: 0, y: 0},
                {x: 0, y: -425},
            ]
        }

        const tween = new TimelineLite()
        tween.add(
            TweenLite.to(id+" .section-wrapper", 1, {
                bezier: flightPath,
                ease: Power1.easeInOut
            })
        )

        const controllerSection =new ScrollMagic.Controller();
        const sceneSection = new ScrollMagic.Scene({
            triggerElement: "div"+id,
            duration: 1000,
            triggerHook:0,
            offset:-750
        })
            .setTween(tween)
            // .addIndicators()
            // .setPin("section.template-1")
            .addTo(controllerSection);

        return sceneSection;
    }


    let draggable="";

    function draggableStart(deviceScreen) {
        var type=deviceScreen=="desktop"?"vertical":"horizontal"
        draggable=new ScrollBooster({
            viewport: document.querySelector('.gallery-line'),
            content: document.querySelector('.gallery-item-container'),
            scrollMode: 'transform', // use CSS 'transform' property
            direction: type, // allow only horizontal scrolling
            emulateScroll: true, // scroll on wheel events
        });
    }
    function draggableDestroy() {
        if (draggable!="")
            draggable.destroy();
    }


    function resizeCheck(){
        if ($(window).width()<=576)
        {
            swiper.switchMobile();

            draggableDestroy();

            draggableStart("mobile")
        }
        else if($(window).width()>576)
        {

            swiper.switchDesktop();

            draggableDestroy();
            draggableStart("desktop")
        }

        if($(window).width()<1140)
        {

            removeSectionScene();
        }
        else{
            startSectionScene();
        }

    }
    resizeCheck();
    $( window ).resize(function() {
        console.log($(window).width())
        if ($(window).width()!=INNER_WIDTH)
            resizeCheck();
    });
    //****************************

    // import ScrollBooster from 'scrollbooster';


    class Gallery{
        //container=null;
        //items=null;

        constructor(container,itemName) {
            this.container=$(container);
            this.items=$(itemName)
            this.itemsClick();
        }

        itemsClick(){
            this.items.on("click touchstart",function(){
                let oldSelected=$(".gallery-item.selected")
                oldSelected.removeClass("selected");

                if($(this).hasClass("primary"))
                {
                    $(".mv").removeClass("mv-hide")
                    $(".gallery-image").addClass("mv-hide");
                    $('.upper-container h3').show();
                }
                else{
                    $(".mv").addClass("mv-hide")
                    $(".gallery-image").removeClass("mv-hide");
                    $(".upper-container h3").hide();
                }
                $(this).addClass("selected");
                $("img.gallery-image").attr("src",$(this).children("img").attr("src"))
            })
        }

    }

    gallery=new Gallery(
        ".gallery-item-container",
        ".gallery-item");






});