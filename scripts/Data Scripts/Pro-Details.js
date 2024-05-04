

 export let proDetails = JSON.parse(localStorage.getItem('proDetails')) 
 if (!proDetails){
    proDetails = [{
            quantity : 1,
            productId : 'E_commerce_web_product_Id_Num_00021',
            Name : 'Mens Cartoon Cat Graphic Kangaroo Pocket Drawstring Hoodies'
        }]
    }

 export function saveToStrage (){
    localStorage.setItem('proDetails', JSON.stringify(proDetails) )
 }
