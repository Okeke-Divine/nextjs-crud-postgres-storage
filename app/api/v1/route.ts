import {NextResponse} from "next/server";

export const GET = (req: Request, res: Response) => {
    return NextResponse({message: "api/v1 endpoint"}, {status: 200})
}