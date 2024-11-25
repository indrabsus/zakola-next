import { NextRequest, NextResponse } from "next/server";
const data = [
    {
        id:1,
        name: "Sepatu Baru",
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3c26fa5a-157b-4174-9679-17258d767047/AIR+JORDAN+1+RETRO+LOW+OG.png"
    },
    {
        id:2,
        name: "Sepatu Putih Oke",
        price: 25000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b9c5f5-9049-422d-aa76-19ea5323ef58/WMNS+AIR+JORDAN+1+MID.png"
    },
    {
        id:3,
        name: "Nike Air Jordan",
        price: 46700,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/AIR+JORDAN+1+LOW.png"
    }
]
export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if(id){
        const detailProduct = data.find(item => item.id == Number(id))
        if(detailProduct){
            return NextResponse.json({status: 200, message: "Success", data: detailProduct })
        }
        return NextResponse.json({status: 404, message: "Not Found", data: {} })
    }
    return NextResponse.json({status: 200, message: "Success", data })
}