var no:number = 153;

ArmstrongCheck(no);

function ArmstrongCheck(no1)
{
	var originalNumber:number=no1;
	var remainder:number;
	var result:number=0;

   while(no1 != 0)
    {
        remainder = no1%10;

        result = (result + (remainder*remainder*remainder));

        no1 = ~~(no1/10);
    }

    if(result == originalNumber)
        console.log(originalNumber + " is an Armstrong number.");
    else
        console.log(originalNumber + " is not an Armstrong number.");

}

