var numbers:number[] = [23,89,6,29,56,45,77,32];
var max = Maximum(numbers);


function Maximum(arr:number[])
{
	var i:number;
	var first:number; 
	var second:number; 
      
             
        first = second = Number.MIN_VALUE; 
        for (var i = 0; i < arr.length ; i++) 
        { 
           
            if (arr[i] > first) 
            { 
                second = first; 
                first = arr[i]; 
            } 
      
            else if (arr[i] > second && arr[i] != first) 
                second = arr[i]; 
        } 
          
        if (second == Number.MIN_VALUE) 
            console.log("There is no second largest"+ " element\n"); 
        else
            console.log(Number.MIN_VALUE + "The second largest element" + " is "+ second); 
}
