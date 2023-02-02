function TimeConvert(n) {
    // let num = n;
    // let hours = (num / 59)
    // let rhours = Math.floor(hours);
    // let min = (hours - rhours) * 60;
    // let rmin = Math.round(min)
    let hours = Math.floor(n / 60);
    let rmin = n % 60;
    return n + " minutes = " + hours + " hour(s) and " + rmin + " minute(s)."



}
document.write(TimeConvert(200));

// أنا بدي عددالساعات بدون فواصل لهيك استخدمت ال mathfloor
// قسمت العدد n على ستين كرمال اعرف كم ساعة
// عدد الساعات قسمتو على ما تبقى