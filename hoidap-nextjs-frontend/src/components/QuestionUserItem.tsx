import Image from "next/image";
import AnswerUserList from "./AnswerUserList";

interface QuestionUserItemProps {
  avatarUrl: string;
  subject: string;
  grade: string;
  point: number;
  timeAgo: string;
  views: number;
  content: string;
  answerAvatars: string[];
}

export default function QuestionUserItem({
  avatarUrl,
  subject,
  grade,
  point,
  timeAgo,
  views,
  content,
  answerAvatars,
}: QuestionUserItemProps) {
  return (
    <div className="bg-white rounded-md shadow p-3 space-y-2">
      {/* Phần thông tin người hỏi */}
      <div className="flex items-center gap-2">
        <Image
          src={avatarUrl}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-md border"
        />
        <div className="text-sm text-gray-700 font-medium flex items-center gap-1 flex-wrap">
          <span className="text-black font-semibold">{subject}</span> ·
          <span>{grade}</span> ·<span>{point}đ</span> ·
          <span className="text-gray-500">{timeAgo}</span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            👁‍🗨 {views}
          </span>
        </div>
      </div>

      {/* Nội dung câu hỏi và danh sách người trả lời */}
      <div className="ml-10 space-y-2">
        <div className="text-sm text-gray-800">{content}</div>
        <div className="flex items-center justify-between">
          <AnswerUserList avatarUrls={answerAvatars} />
          <button className="text-sm px-4 py-1 border border-blue-300 text-blue-600 rounded hover:bg-blue-50 transition">
            Trả lời
          </button>
        </div>
      </div>
    </div>
  );
}
