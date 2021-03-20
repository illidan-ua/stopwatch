        let mSec = 0; let sec = 0; let mMin = 0; let min = 0; let mHour = 0; let hour = 0;
        let run;
        let flag = false;
        let btn = document.querySelectorAll('button');
        let clockFace = document.querySelector('p');
            btn[0].addEventListener('click', () => {
                if (flag === false) {
                    flag = true;
                    run = setInterval( () => {
                        if (mSec < 9) {
                            mSec++;
                        }else{
                            mSec = 0;
                            sec++;
                        }if (sec == 6) {
                            sec = 0;
                            mMin++;
                        }if (mMin == 10) {
                            mMin = 0;
                            min++;
                        }if (min == 6) {
                            min = 0;
                            mHour++;
                        }if (mHour == 10) {
                            mHour = 0;
                            hour++;
                        }
                        clockFace.innerHTML = `${hour}${mHour} : ${min}${mMin} : ${sec}${mSec}`;}, 1000);
                }
                else if (flag === true) {
                    clearInterval(run);
                    mSec = 0; sec = 0; mMin = 0; min = 0; mHour = 0; hour = 0;
                    flag = false;
                    clockFace.innerHTML = `${hour}${mHour} : ${min}${mMin} : ${sec}${mSec}`;
                } 
            });
            btn[1].addEventListener('click', () => {
                if (flag === true) {
                    clearInterval(run);
                    flag = false;
                }
            });
            btn[2].addEventListener('click', () => {
                mSec = 0; sec = 0; mMin = 0; min = 0; mHour = 0; hour = 0;
                clockFace.innerHTML = `${hour}${mHour} : ${min}${mMin} : ${sec}${mSec}`;
            });