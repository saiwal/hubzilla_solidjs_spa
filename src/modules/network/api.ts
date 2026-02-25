import { apiGet } from "../../core/api/client";
import type { Post } from "./types";

export function fetchNetworkStream() {
  return apiGet<Post[]>("network/stream");
}
