import { getTopicById } from "@api/topics";
import { TopicContent } from "@features/TopicContent";

export default async function Topic({ params }: { params: Promise<{ topicId: string, courseId: string }> }) {
  const urlParams = await params;
  const topic = await getTopicById(urlParams.topicId);

  return <TopicContent topic={topic} courseId={urlParams.courseId} />;
}
