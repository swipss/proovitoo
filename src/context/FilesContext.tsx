import { createContext, useState } from "react";

export interface FileProps {
  id: string;
  name: string;
  type: "CONTAINER" | "FILE" | "FOLDER";
  created: string;
  createdBy: string;
  status?: "SIGNING" | "DECLINED";
  totalSigners?: string;
  signedBy?: string;
  version?: string;
}

interface FilesContextProps {
  allFiles: FileProps[];
  setAllFiles: React.Dispatch<React.SetStateAction<FileProps[]>>;
  selectedFiles: string[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilesContext = createContext({} as FilesContextProps);

export const FilesProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFiles, setAllFiles] = useState<FileProps[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  return (
    <FilesContext.Provider
      value={{ allFiles, setAllFiles, selectedFiles, setSelectedFiles }}
    >
      {children}
    </FilesContext.Provider>
  );
};
