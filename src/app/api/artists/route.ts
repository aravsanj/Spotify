import JamendoInstance from "@/data/axios/JamendoInstance";
import { JAMENDO_GET_ARTISTS } from "@/data/endpoints";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") ?? "10");

  const response = await JamendoInstance.get(JAMENDO_GET_ARTISTS({ limit }));

  return Response.json(response.data);
}