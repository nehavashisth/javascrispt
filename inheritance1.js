class parent
{
    static a=100
    static b=200
    static wish()
    {
        console.log("Hi Good Morning");
        
    }
}
class child extends parent
{
    static a=3000
    static c=300
    static lastwish()
    {
        console.log("Bye ");
        
    }
}
child.wish()
child.lastwish()