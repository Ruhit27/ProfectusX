import { handleApplicationRequest } from "@/lib/applications/handle-application-request";
import { notifierFromEnv } from "@/lib/applications/notifiers";

export async function POST(request: Request) {
  return handleApplicationRequest(request, notifierFromEnv());
}
