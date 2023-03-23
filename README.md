*(This document is written in Thai language)*  
  
## เพิ่ม Node.js, Express, Morgan
ขั้นตอนแรกคือการเพิ่ม Node.js , Express Framework และ Morgan  
ในส่วนของ Node.js ต้องทำการโหลดจากหน้าเว็บมาติดตั้ง  
ส่วน Express และ Morgan จะติดตั้งโดยการพิมพ์ Command Line ลงใน Terminal และต้องลงใน Directory ที่สร้างเว็บ  
  
Express : npm install express  
Morgan : npm install morgan  
  
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
เข้าถึงไฟล์ที่อยู่ใน Folder public ซึ่งในที่นี้คือ stylesheet (style.css)  
```js
app.use(express.static(‘public’)
```
ตั้งค่า morgan ให้ รัน log จาก Request
```js
app.use(morgan(“common”,{immediate:true}));
```
รับ contentRouter ที่กำหนดใว้ใน const
```js
app.use(‘/content’,contentRouter)
```
redirect เข้าไปที่ content
```js
app.get('/',(req, res)=> res.redirect('/content'));
```
log ว่า server รันที่ port ไหน ใช้สำหรับตรวจสอบใน Local ว่า Website ใช้ได้ไหม
```js
app.listen(port,() => console.log(`Server Running at port http://localhost:${port}`));
```
  
## index.js ใน content  
![index.js file in content directory](https://user-images.githubusercontent.com/127969012/226157328-978b9358-b18d-4815-94f0-5548c6b8209a.png)  
ไฟล์นี้เปรียบเสมือน Router ระหว่าง content กับ main directory ซึ่งจะทำการรับค่าจาก controller และส่งไปหา index.js ใน main  
```js
const router = express.Router();  
```
ใช้เป็น middleware สำหรับ routing system  
## conntroller.js
![contoller.js](https://user-images.githubusercontent.com/127969012/226157421-8f0430d7-83c1-44e4-8daf-ee5a914ab29f.png)  
รับค่าจาก model และ view และรัน function listAction เพื่อส่งไปหา index.js  
ซึ่งเป็น function แบบ async await โดยให้ await รอข้อมูลผ่าน
```js
const data = await getAll();
```
เมื่อได้แล้วจะนำมา render เป็นเว็ปและรัน variable จาก Data ผ่าน body
```js
body (const body = render(data);)
```
และตอบสนองโดยการส่ง body ออกไป  
## model.js
![model.js](https://user-images.githubusercontent.com/127969012/227240278-cb0adb0a-3a36-4232-b550-381104ce43b1.png)
ไฟล์ตัวนี้ไว้เก็บ data เพื่อใช้ในการแสดงข้อมูลโดยเก็บข้อมูลแบบ array และส่งข้อมูลไปหา controller.js ผ่าน function getAll() และทำให้วงจร Async สมบูรณ์  
## view.js และ index.html  
![view.js](https://user-images.githubusercontent.com/127969012/227240856-c07cb486-9b35-4d86-bc28-2796c31f23a7.png)
![index.html](https://user-images.githubusercontent.com/127969012/227240878-2c701280-2d19-4d8d-9fb6-41d97624ac42.png)
ไฟล์ที่ใช้สำหรับ Render หน้าเว็บ โดยมี index.html เป็น template เพื่อให้ทำหน้าเว็บสะดวกขึ้น  
โดยหน้าเว็บมีต้นแบบมาจาก https://help.abstract.com/hc/en-us เพื่อฝึกทำหน้าเว็บ และดัดแปลงเพื่อให้ทำการแสดงข้อมูลจาก Model ขึ้นหน้าเว็บได้  
และ .join(‘’) ใช้เพื่อลบ ‘,’ ที่แสดงผลระหว่าง array ออก
![Show model.js data thought view.js](https://user-images.githubusercontent.com/127969012/227241536-fc8faef3-9415-4574-a5cc-92ac03300c1c.png)  

## style.css
![style.css](https://user-images.githubusercontent.com/127969012/227242365-991bdb7d-f968-4410-b006-c256d30e55b5.png)
ใช้สำหรับตกแต่งหน้าเว็บให้เป็นไปตามต้องการ ซึ่งมีการทำให้เป็น Responsive และจัดให้หน้าเว็บอยู่ในความเหมาะสม
