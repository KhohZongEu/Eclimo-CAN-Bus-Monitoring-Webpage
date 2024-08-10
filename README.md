# Eclimo CAN bus monitoring webapp

## Currently implemented functions
- Colour Changing grid based on cell color
- Data retrieval from firebase database

## Firebase RTDB integration

## Color changing grid function usage
1. Inside `ultra-cap.js` you will be able to tweek the rendering and data of the page
2. Use `changeColor("id", voltage)` to change color of individual cells
3. Range of voltages currently set is `0 - 3 V`
4. To change voltage range use the `lowVolt` and `highVolt` variables to adjust it 

## CSS class list
`.data-box` - boxes with blue border around<br>
`.detail` - grid for individual cells<br>
`.cell` - individual color changing cells<br>
`#detailed-data` - defines grid size<br>