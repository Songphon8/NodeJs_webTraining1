// const model = require("./model");

// function render(contents){
//     return`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <style>
//         @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@700&family=Inter+Tight&display=swap');
//     </style>
//     <title>Lesvest</title>
// </head>
// <body>
//     <nav>Lesvest</nav>
//     <span id="header">What can we do for you?</span>

//     <div class="slideshow-container">
//         ${contents
//             .map ((content) => `<div class="slideshow-item"><h2>${content.title}</h2><p>${content.desc}</p></div>`)
//             .join('')
//         }
//     </div>
// </body>
// <footer>
//     <section class="ft-main">
//         <div class="ft-main-item">
//             <h2 class="ft-title">Lesvest</h2>
//             <ul>
//                 <li><a href="#">Branches</a></li>
//             </ul>
//         </div>
//         <div class="ft-main-item">
//             <h2 class="ft-title">Resource</h2>
//             <ul>
//                 <li><a href="#">Blog</a></li>
//                 <li><a href="#">Help Center</a></li>
//                 <li><a href="#">Release Note</a></li>
//                 <li><a href="#">Status</a></li>
//             </ul>
//         </div>
//         <div class="ft-main-item">
//             <h2 class="ft-title">Community</a></h2>
//             <ul>
//             <li><a href="#">Twitter</a></li>
//             <li><a href="#">Linkedin</a></li>
//             <li><a href="#">Facebook</a></li>
//             <li><a href="#">Instagram</a></li>
//             <li><a href="#">Podcast</a></li>
//         </ul>
//         </div>
//         <div class="ft-main-item">
//             <h2 class="ft-title">Company</a></h2>
//             <ul>
//             <li><a href="#">About us</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Legal</a></li>
//         </ul>
//         </div>
//         <div class="ft-main-item" id="claim">
//             <h2>This is a mockup of abstract website</h2><br>
//             <h2>For education propose</h2>
//         </div>
//     </section>
// </footer>
// </html>
// `
// }

// module.exports = render;