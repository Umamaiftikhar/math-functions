<script>
        // checking the num is positive or negative 
        function CheckNum(Num){
            if (Num>=0){
                document.write("it's positive number ");
            }
            else{
                document.write("it's a negative number")
            }
        }
        Num=Number(prompt("enter your num here")) ;
        CheckNum(Num);

         //squaring the number
         var num=prompt("Enter Number:");
        var num = Math.pow(num, 2);
        document.write("The square of the num is:"+num);
        document.write('<br>');

        //cubing the number
        var cube=prompt("Enter num:");
        var cube=Math.pow(cube,3);
        document.write("The cube of the num is:"+cube);
        document.write('<br>');

         let val1 = prompt("Please first value");
         let val2 = prompt("Please second value");
        var difference  = Math.abs(Number(val1)-Number(val2)); 
        let result = difference > 10 ? true : false
</script>
