jQuery(function($) {
    $('.hero').bgSwitcher({
        images: ['img/image1.JPG','img/image2.JPG','img/image3.JPG','img/image4.JPG','img/image5.JPG','img/image6.JPG','img/image7.JPG','img/image8.JPG'], // 切替背景画像を指定
	      interval: 4500, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 800, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});
