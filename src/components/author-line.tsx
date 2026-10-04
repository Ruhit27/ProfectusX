import Image from "next/image";
import { formatDate } from "@/lib/format";

export function AuthorLine({ author, avatar, date }: { author?: string; avatar?: string; date: Date }) {
  return (
    <div className="flex items-center gap-4">
      {avatar ? (
        <Image src={avatar} alt="" width={48} height={48} unoptimized className="size-12 rounded-full object-cover" />
      ) : (
        <span aria-hidden="true" className="size-12 rounded-full bg-[rgb(40,40,40)]" />
      )}
      <div>
        {author && <p className="text-lg font-medium text-heading">{author}</p>}
        <time dateTime={date.toISOString()} className="text-sm text-muted">
          {formatDate(date)}
        </time>
      </div>
    </div>
  );
}
