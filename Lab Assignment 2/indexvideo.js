
        var myVideo2 = document.getElementById("video2");

        function playPause2() {
            if (myVideo2.paused)
                myVideo2.play();
            else
                myVideo2.pause();
        }

        function makeBig2() {
            myVideo2.width = 560;
        }

        function makeSmall2() {
            myVideo2.width = 320;
        }

        function makeNormal2() {
            myVideo2.width = 420;
        }



        var vid2 = document.getElementById("video2");

        function getVolume2() {
            alert(vid2.volume);
        }

        function setHalfVolume2() {
            vid2.volume = 0.2;
            alert("The volume is 20% which is Low !!");
        }

        function setFullVolume2() {
            vid2.volume = 1.0;
            alert("The volume is 100% which is Full Volume !!");
        }



        var myVideo3 = document.getElementById("video3");

        function playPause3() {
            if (myVideo3.paused)
                myVideo3.play();
            else
                myVideo3.pause();
        }

        function makeBig3() {
            myVideo3.width = 560;
        }

        function makeSmall3() {
            myVideo3.width = 320;
        }

        function makeNormal3() {
            myVideo3.width = 420;
        }


        var vid3 = document.getElementById("video3");

        function getVolume3() {
            alert(vid3.volume);
        }

        function setHalfVolume3() {
            vid3.volume = 0.2;
            alert("The volume is 20% which is Low !!");
        }

        function setFullVolume3() {
            vid3.volume = 1.0;
            alert("The volume is 100% which is Full Volume !!");
        }
