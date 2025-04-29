import Image from "next/image";

interface AnswerUserListProps {
  avatarUrls: string[];
}

export default function AnswerUserList({ avatarUrls }: AnswerUserListProps) {
  return (
    <div className="flex space-x-1">
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`avatar ${index + 1}`}
          width={24}
          height={24}
          className="rounded-full border"
        />
      ))}
    </div>
  );
}
