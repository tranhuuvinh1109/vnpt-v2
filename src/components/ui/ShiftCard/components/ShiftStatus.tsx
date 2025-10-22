import { EShiftStatus } from "@/enum";
import { CircleCheckBig, ClipboardCheck, Loader } from "lucide-react";

type ShiftStatusProps = {
  status: EShiftStatus;
  isShowDetail?: boolean;
};

export const ShiftStatus = ({ status, isShowDetail = false }: ShiftStatusProps) => {
  switch (status) {
    case EShiftStatus.DONE:
      return (
        <div className="flex items-center gap-1 font-medium text-green-500">
          <CircleCheckBig size={18} /> {isShowDetail && <span>Đã hoàn thành</span>}
        </div>
      );
    case EShiftStatus.IN_PROGRESS:
      return (
        <div className="text-element-primary flex items-center gap-1 font-medium">
          <Loader size={18} className="animate-spin" />{" "}
          {isShowDetail && <span>Đang thực hiện</span>}
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1 font-medium text-red-500">
          <ClipboardCheck size={18} /> {isShowDetail && <span>Chưa làm</span>}
        </div>
      );
  }
};
