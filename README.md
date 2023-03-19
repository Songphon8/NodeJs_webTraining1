*(This document is written in Thai language)*  
  
## เพิ่ม Node.js, Express, Morgan
ขั้นตอนแรกคือการเพิ่ม Node.js , Express Framework และ Morgan  
ในส่วนของ Node.js ต้องทำการโหลดจากหน้าเว็บมาติดตั้ง  
ส่วน Express และ Morgan จะติดตั้งโดยการพิมพ์ Command Line ลงใน Terminal และต้องลงใน Directory ที่สร้างเว็บ  
  
Express : ‘npm install express’  
Morgan : ‘npm install morgan’  
  
เมื่อทำการติดตั้งจะได้ ไฟล์ดังนี้  
![node component has been added](https://user-images.githubusercontent.com/127969012/226149970-044eb404-afc1-46b3-aa82-eb0b68d14e66.png)  
  
## index.js ใน main Directory  
![index.js file in main directory](https://user-images.githubusercontent.com/127969012/226150358-ef26f886-a4bb-4df7-8e34-e981e88677be.png)
ใส่ const ที่จำเป็นในการรัน web server เช่น Express ซึ่งเป็น Framework , morgan ใช้สำหรับ log Request ใน Server  
contentRouter เพื่อรับ export จากไฟล์ index.js ที่อยู่ใน content  
  
เพื่อให้สามารถปรับ port ตามที่ Web Hosting (Render) สุ่มมาให้ ให้ใส่คำสั่ง port ดังนี้
```js
port = process.env.port || 3030;
```
เพื่อให้เข้าถึงไฟล์ที่อยู่ใน Folder public ซึ่งในที่นี้คือ stylesheet (style.css)  
```js
app.use(express.static(‘public’)
```
ตั้งค่า morgan ให้ รัน log จาก Request
```js
app.use(morgan(“common”,{immediate:true}));
```
เพิ่อรับ contentRouter ที่กำหนดใว้ใน const
```js
app.use(‘/content’,contentRouter)
```
เพื่อ redirect เข้าไปที่ content
```js
app.get('/',(req, res)=> res.redirect('/content'));
```
ใช้เพื่อ log ว่า server รันที่ port ไหน ใช้สำหรับตรวจสอบใน Local ว่า Website ใช้ได้ไหม
```js
app.listen(port,() => console.log(`Server Running at port http://localhost:${port}`));
```


