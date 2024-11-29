document.querySelector("#cheek_left").style.left = "647px";
document.querySelector("#cheek_left").style.top = "388px";
document.querySelector("#cheek_right").style.left = "859px";
document.querySelector("#cheek_right").style.top = "396px";
document.querySelector("#HADA").style.left = "477px";
document.querySelector("#HADA").style.top = "501px";
document.querySelector("#LAST_OF_HAIR").style.left = "277px";
document.querySelector("#LAST_OF_HAIR").style.top = "189px";
document.querySelector("#LEFT_MATU").style.left = "636px";
document.querySelector("#LEFT_MATU").style.top = "302px";
document.querySelector("#LEFT_MAYU").style.left = "646px";
document.querySelector("#LEFT_MAYU").style.top = "326px";
document.querySelector("#LEFT_ME").style.left = "714px";
document.querySelector("#LEFT_ME").style.top = "379px";
document.querySelector("#LEFT_ME_HIGHLIGHT").style.left = "713px";
document.querySelector("#LEFT_ME_HIGHLIGHT").style.top = "378px";
document.querySelector("#LEFT_SYOKKAKU").style.left = "643px";
document.querySelector("#LEFT_SYOKKAKU").style.top = "233px";
document.querySelector("#MATH").style.left = "792px";
document.querySelector("#MATH").style.top = "468px";
document.querySelector("#PING").style.left = "848px";
document.querySelector("#PING").style.top = "125px";
document.querySelector("#RIGHT_MATU").style.left = "849px";
document.querySelector("#RIGHT_MATU").style.top = "307px";
document.querySelector("#RIGHT_MAYU").style.left = "857px";
document.querySelector("#RIGHT_MAYU").style.top = "330px";
document.querySelector("#RIGHT_ME").style.left = "880px";
document.querySelector("#RIGHT_ME").style.top = "383px";
document.querySelector("#RIGHT_ME_HIGHLIGHT").style.left = "882px";
document.querySelector("#RIGHT_ME_HIGHLIGHT").style.top = "384px";
document.querySelector("#RIGHT_SYOKKAKU").style.left = "919px";
document.querySelector("#RIGHT_SYOKKAKU").style.top = "281px";
document.querySelector("#RINKAKU").style.left = "568px";
document.querySelector("#RINKAKU").style.top = "210px";
document.querySelector("#SECOND_USHIRO_KAMI").style.left = "350px";
document.querySelector("#SECOND_USHIRO_KAMI").style.top = "220px";
document.querySelector("#SHITA").style.left = "611px";
document.querySelector("#SHITA").style.top = "586px";
document.querySelector("#TOP_ATAMA").style.left = "580px";
document.querySelector("#TOP_ATAMA").style.top = "99px";
document.querySelector("#UE").style.left = "438px";
document.querySelector("#UE").style.top = "599px";
document.querySelector("#USHIROKAMI").style.left = "378px";
document.querySelector("#USHIROKAMI").style.top = "454px";

window.addEventListener('load', () => {
    var objects = document.querySelectorAll("img");

    objects.forEach((element) => {
        const position_info = { x: parseInt(element.style.left.replace("px", "")), y: parseInt(element.style.top.replace("px", "")) }
        element.style["aspect-ratio"] = `${element.naturalWidth}/${element.naturalHeight}`;
        const mainloop = () =>{
            const multiplyer = window.innerHeight / 1200;
            element.height = element.naturalHeight * multiplyer;
            element.style.top = `${position_info.y * multiplyer}px`;
            element.style.left = `${position_info.x  * multiplyer}px`;

            requestAnimationFrame(mainloop);
        }
        requestAnimationFrame(mainloop)
        /**
         * 
         * @param {Number} ver 
         * @param {Number} hor 
         * @param {Number} sign 
         */
        function generateFollowMouse(ver, hor, sign){
            /**
             * 
             * @param {PointerEvent} ev 
             */
            const followMouse = (ev) =>{
                const multiplyer = window.innerHeight / 1200;

                element.height = element.naturalHeight * multiplyer;
                
                const y = position_info.y + (Math.min(hor, Math.abs((position_info.y - ev.clientY) / window.innerHeight) * hor) * Math.sign(position_info.y - ev.clientY)) * sign;
                const x = position_info.x + (Math.min(ver, Math.abs((position_info.x - ev.clientX) / window.innerWidth) * ver) * Math.sign(position_info.x - ev.clientX)) * sign;

                element.style.top = `${y * multiplyer}px`;
                element.style.left = `${x * multiplyer}px`;
            }
            return followMouse;
        }

        //.tuiteiku
        if (element.classList.contains("tuiteiku"))
            document.addEventListener('pointermove',((ev)=>requestAnimationFrame(()=>{generateFollowMouse(20,3,-1)(ev)})))

        //.inverted_tuiteiku
        if (element.classList.contains("inverted_tuiteiku"))
            document.addEventListener('pointermove',((ev)=>requestAnimationFrame(()=>{generateFollowMouse(20,3,1)(ev)})))
        
        //.more_tuiteiku
        if (element.classList.contains("more_tuiteiku"))
            document.addEventListener('pointermove',((ev)=>requestAnimationFrame(()=>{generateFollowMouse(40,8,-1)(ev)})))
    });
})