import type { Metadata } from "next"
import CommunityPageClient from "./CommunityPageClient"

export const metadata: Metadata = {
  title: "Developer Communities",
  description: "Connect with developer communities across different platforms",
}

export default function CommunityPage() {
  return <CommunityPageClient />
}
