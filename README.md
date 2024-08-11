# Eclimo CAN bus monitoring webapp

## Currently implemented functions
- Colour Changing grid based on cell color
- Data retrieval from firebase database

## Firebase RTDB integration
### Database Details
Database details for Google Firebase are safe to be included as stated by [Google Engineers](https://medium.com/@paulbreslin/is-it-safe-to-expose-your-firebase-api-key-to-the-public-7e5bd01e637b#:~:text=In%20a%20word%2C%20yes.,security%20risk%20to%20expose%20it.)
> [!IMPORTANT]
> Database details are to be changed.<br>
> Database Read & Write Rules should also be changed according to usage
> ```
>const firebaseConfig = {
>    apiKey: "YOUR_API_KEY",
>    authDomain: "YOUR_AUTH_DOMAIN",
>    databaseURL: "YOUR_DB_URL",
>    projectId: "YOUR_PROJECT_ID",
>    storageBucket: "YOUR_STORAGE_BUCKET",
>    messagingSenderId: "YOUR_MESSAGE_Sender_ID",
>    appId: "YOUR_APP_ID",
>    measurementId: "YOUR_MEASUREMENT_ID",
>  };
> ```

## Color changing grid function usage
1. Inside `./js/pages/ultra-cap.js` you will be able to tweek the rendering and data of the page
2. Use `changeColor("id", voltage)` to change color of individual cells
3. Range of voltages currently set is `0 - 3 V`
4. To change voltage range use the `lowVolt` and `highVolt` variables to adjust it 

## CSS class list
`.data-box` - boxes with blue border around<br>
`.detail` - grid for individual cells<br>
`.cell` - individual color changing cells<br>
`#detailed-data` - defines grid size<br>