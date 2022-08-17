import Link from "next/link";
const Navigation = props => {
    return (

        <div>
        <Link href={'/'}>
        <a>Home</a>
        </Link>
        <Link href={'/user'}>
        <a>Users</a>
        </Link>
        <Link href={'/post'}>
        <a>Posts</a>
        </Link>
   
   
   
        <style>
         {
           `a{
             display:inline-block;
             color:blue;
             margin:10px 20px;
           }
           
           `
         }
        </style>
       </div>
    );

}
export default Navigation;