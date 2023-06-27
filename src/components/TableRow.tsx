import moment from "moment";
import Checkbox from "./Checkbox";
import FolderIcon from "./icons/FolderIcon";
import HourglassIcon from "./icons/Hourglass";

import XMarkIcon from "./icons/XMark";
import { FileProps, FilesContext } from "./context/filesContext";
import { useContext } from "react";

const TableRow: React.FC<FileProps> = ({
  id,
  name,
  type,
  created,
  createdBy,
  status,
  totalSigners,
  signedBy,
  version,
}) => {
  const { selectedFiles, setSelectedFiles } = useContext(FilesContext);

  const renderLabel = () => {
    if (type === "CONTAINER") return <ContainerLabel />;
    if (type === "FILE") return <FileLabel name={name} />;
    if (type === "FOLDER") return <FolderIcon className="w-4 h-4 m-auto" />;
    return null;
  };

  const renderSignatureStatus = () => {
    if (status === "SIGNING" || status === "DECLINED") {
      return (
        <StatusLabel
          status={status}
          signedBy={signedBy}
          totalSigners={totalSigners}
        />
      );
    }
    return null;
  };

  const isRowSelected = selectedFiles.includes(id);

  const handleSelectFile = () => {
    if (selectedFiles.includes(id)) {
      setSelectedFiles(selectedFiles.filter((fileId) => fileId !== id));
    } else {
      setSelectedFiles([...selectedFiles, id]);
    }
  };

  return (
    <tr className={`${isRowSelected ? "bg-[#E4F3E8]" : ""}`}>
      <td className="w-5">
        <Checkbox onChange={handleSelectFile} isChecked={isRowSelected} />
      </td>
      <th className="py-4">
        <div className="flex items-center justify-start gap-4 ml-4">
          {renderLabel()}
          {type === "FOLDER" ? (
            <a href="#" className="font-normal">
              {name}
            </a>
          ) : (
            <a download={name} href="#" className="font-normal">
              {name}
            </a>
          )}
        </div>
      </th>
      <td className="py-2">{renderSignatureStatus()}</td>
      <td className="py-2 text-center">{version}</td>
      <td className="py-2">
        <p>{moment(created).format("DD.MM.YYYY HH:mm")}</p>
        <p className="text-sm text-gray-500">{createdBy}</p>
      </td>
    </tr>
  );
};

function ContainerLabel() {
  return (
    <span className="w-10 py-3 text-[0.5rem] text-center font-semibold text-[#0A3776] rounded bg-[#E4EBF4] ">
      ASICE
    </span>
  );
}

function FileLabel({ name }: { name: string }) {
  return (
    <span className="w-10 py-3 text-center text-[0.625rem] rounded font-semibold  text-[#BB2612] border border-[#DBC9C9] bg-[#F6ECEA]">
      {name.split(".")[1].toUpperCase()}
    </span>
  );
}

function StatusLabel({
  status,
  signedBy,
  totalSigners,
}: {
  status: string | undefined;
  signedBy: string | undefined;
  totalSigners: string | undefined;
}) {
  const bgColor = () => {
    if (status === "SIGNING") return "bg-[#FDF7E6]";
    if (status === "DECLINED") return "bg-[#FFEEEE]";
  };

  const icon = () => {
    if (status === "SIGNING")
      return <HourglassIcon className="w-[1rem] h-[1rem] m-auto" />;
    if (status === "DECLINED")
      return <XMarkIcon className="w-[1rem] h-[1rem] m-auto" />;
  };

  return (
    <span
      className={`${bgColor()} flex items-center justify-center gap-2 px-2 py-1 m-auto font-medium rounded w-max`}
    >
      {icon()}
      <p className="text-sm">
        {signedBy}/{totalSigners}
      </p>
    </span>
  );
}

export default TableRow;
