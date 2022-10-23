//date_instance.js
const date = new Date();
//Wed Jan 19 2022 16:06:05 GMT+0900 

//2date_instance.js
const date1 = new Date(2022, 11, 25);
//Sun Dec 25 2022 00:00:00 GMT+0900 (한국 표준시)
const date2 = new Date(2022, 11, 25, 18, 30, 50);
//Sun Dec 25 2022 18:30:50 GMT+0900 (한국 표준시)

//3date_instance.js
const date3 = new Date("2022-12-25");
//Sun Dec 25 2022 09:00:00 GMT+0900 (한국 표준시)
const date4 = new Date("2022/12/25/18:30:50");
//Sun Dec 25 2022 18:30:50 GMT+0900 (한국 표준시)