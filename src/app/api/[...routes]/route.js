import map from "@config/api-map";
import { NextResponse } from "next/server";

const respond = async (routes, data) => {
  try {
    var route = map;
    for(let i = 0;i<routes.length;i++)
        route = route?.[routes[i]];
    if(typeof route == "function")
      return await route(data);
    return { success: false, message: 'API not found' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const handler = async (request, { params }) => {
  try {
    const { routes } = params;
    let data = {};
    switch(request.method){
      case "POST":
        data = await request.json();
        break;
      case "GET":
        (new URL(request.url)).searchParams.forEach((val,key)=>{
          data[key] = val;
        }); 
        break;
    }
    const response = await respond(routes, data);
    switch(typeof response){
        case "object":
          return NextResponse.json(response,{status:200});
        default:
          return new Response(response, { status: 200 });
    }

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

export { handler as POST, handler as GET };
