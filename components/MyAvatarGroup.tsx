import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { MoreHorizontal } from "lucide-react";
import plus from "../app/assets/plus.jpeg";

export default function MyAvatarGroup() {
  return (
    <div className="flex -space-x-1 *:ring *:ring-background">
      <Avatar className="w-[16px] h-[16px] ">
        <AvatarImage src="https://s3-alpha-sig.figma.com/img/08e4/55fe/112b5aa889f8276e41832a747a9bda45?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1V4dv9zMjE-q04UMc8v40a0g~MzNMx5lIxB1RrYFiDQeKvMb0KPtXRAkuonyERM8TaSrYonblHrii5U6qbxuEfQeQc7aTMOm9rep57QkXYD68gkGJBJ7u9HGUuJxmI6yHcIApLN5nTIZGDPB7UskB9KtgUKLQumf-RoEtqoqr~z8iLGHPyWkVRgzuhO~8vNoah8Hy43KA7QVDceBo5FuYE4RggifskQfOt2oTvALHc8PScNoYijN0tplV7s~VOvMlUGrerhs6ESfWNMneR0deygwZHuX165HD8IoWs4IeS64RiSdO-hXuPBdIeBKugA948m~dwK4a3R0tKhu3TWBA__" />
      </Avatar>
      <Avatar className="w-[16px] h-[16px] ">
        <AvatarImage src="https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E9D2s92LtINyTUembtnwzqsf79ZsGqXYbI9VKICrgO1ceox2D-v6FkROuS4lnYLTSXOe3FiWLiUZKOE2TmjrBPYScnRId0KLqKhgfHQ6Ph~yxhE3Dpmf8bxi0VKT~ntSX8c2nQzrAnOVWAsZSDtlblXPAEmBZcL2qaTjAS5r6Zo0u4BZyOw9QtzJayOAXr4bkfYEQyB8LxP3LtWY5n182nB1awHjidSoB9SSuWE9gvSBvplLay8Cc1eFd9m8zhpjT1DPPN9JZjDSz1eUG7zj8kR1tlDpUYYbcp8WlALUGmhCPfQKlMbfMjWgnCFiKLVIzFmixeRi7nunkOP33G6QVg__" />
      </Avatar>
      <Avatar className="w-[16px] h-[16px] ">
        <AvatarImage src="https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNu3FVxtjzixJW46VtK9hqskeYVp0KWxYon--GcVb1dxCNJ-dqjbiZOiYhloAE8ykoB8ooTGY8b5HKmzNpSXL6lcZlCugk-hvG0Napwa4LRZLzyCSkoy2lMHzEk~yw8qGeh~4Jbj8GMprjoTZvN6TkO2rU2bKH-0AEOK1T3suDocW5PbSqlhVAlSKW0inlUsz8eufcXRZ3Ym6PSgp1yaJEYKwn8DOHktjxGKYFEpvo5MICgH392VU5GleZW9k-tcpW6KmpSoevYVHrok9HjU1VES7NJxfB9ZLH7FUrJeB5xtQZvCje6h7zxPu5v9QKaW-POQ6kOrIlJfP3aEBSDwog__" />
      </Avatar>
      <Avatar  className="w-[16px] h-[16px] ">
        <AvatarImage src={plus.src} />
      </Avatar>
    </div>
  );
}
