import React from "react";
import TitleCard from "./TitleCard";
import ClockIcon from "@/components/ui/icons/ClockIcon";
import { TableItem } from "./types/TableItem";

type TableProps = {
  data: TableItem[] | undefined;
};

export default function TableComponent({ data }: TableProps) {
  return (
    <table className="mt-10 w-full">
      <thead>
        <tr>
          <th className="w-7 p-2 text-left text-[#B3B3B3]">#</th>
          <th className="p-2 text-left text-[#B3B3B3]">TITLE</th>
          <th className="hidden p-2 text-left text-[#B3B3B3] sm:block">
            ALBUM
          </th>
          <th className="p-2 text-left text-[#B3B3B3]">
            <ClockIcon width={28} height={28} />
          </th>
        </tr>
        <tr>
          <td colSpan={4}>
            <hr />
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <th className="py-4"></th>
          </td>
        </tr>
      </thead>
      <tbody className="pt-10">
        {data?.map((row, index) => (
          <tr key={index}>
            <td className="text-base text-white sm:p-2 sm:text-xl">
              {index + 1}
            </td>
            <td className="p-2 text-white">
              <TitleCard {...row.track} />
            </td>
            <td className="hidden p-2 text-white sm:block">{row.album}</td>
            <td className="p-2 text-white">{row.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
