"use server";


import  prisma  from "@/lib/prisma";


export async function createPosts(data : FormData){
    const title = data.get("title") as string;
    const content = data.get("content") as string;


    await prisma.post.create({
        data : {
            title , 
            content,
        }
    });
}


export async function DeletePost(id : string){
    await prisma.post.delete({
        where : {
            id ,
        },
    });

    return { success : true};
}