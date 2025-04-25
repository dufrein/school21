import { getTopic } from "@api/topics";
import { TopicContent } from "@features/TopicContent";

export default async function Topic({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const urlParams = await params;
  const topic = await getTopic(urlParams.id);

  return <TopicContent topic={topic} />;
}
