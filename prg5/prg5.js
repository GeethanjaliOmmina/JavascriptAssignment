function fizzbuzz()
{
    var n=document.getElementById("ui").value;
    for(i=1;i<=n;i++)
    {
        if((i%3==0)||(i%5==0))
        {
        if(i%3==0)
            document.write("Fizz");
        if(i%5==0)
            document.write("Bizz");
        }
        else
            document.write(i);
        document.write(" ");    
    }
}