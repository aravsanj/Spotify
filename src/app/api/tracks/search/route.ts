import JamendoInstance from "@/data/axios/JamendoInstance";
import { JAMENDO_SEARCH_TRACKS } from "@/data/endpoints";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") ?? "10");
  const offset = parseInt(searchParams.get("offset") ?? "0");
  const query = searchParams.get("query") ?? "";

  const response = await JamendoInstance.get(
    JAMENDO_SEARCH_TRACKS({ limit, offset, query })
  );

  return Response.json(response.data);
}
